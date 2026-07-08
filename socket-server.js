/**
 * BWE TV - Socket.io Server for Real-time Chat
 * Run this file with Node.js for real-time messaging
 * 
 * INSTALLATION:
 * npm init -y
 * npm install express socket.io cors
 * 
 * RUNNING:
 * node socket-server.js
 * 
 * Server will run on: http://localhost:3000
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Data storage
let onlineUsers = new Map();
let messages = [];
let channelRooms = new Map();

const MAX_MESSAGES = 100;
const MESSAGE_RATE_LIMIT = 1000; // 1 second between messages

// Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    onlineUsers: onlineUsers.size,
    totalMessages: messages.length
  });
});

app.get('/api/messages/:channelId', (req, res) => {
  const { channelId } = req.params;
  const channelMessages = messages.filter(m => m.channelId === channelId);
  res.json(channelMessages.slice(-50)); // Last 50 messages
});

app.get('/api/users/:channelId', (req, res) => {
  const { channelId } = req.params;
  const channelUsers = Array.from(onlineUsers.values()).filter(u => u.channelId === channelId);
  res.json(channelUsers);
});

// Socket.io Events
io.on('connection', (socket) => {
  console.log('🟢 New user connected:', socket.id);

  // User joins a chat channel
  socket.on('join_channel', (data) => {
    const { username, channelId, userId } = data;
    const userColor = generateUserColor();

    // Store user
    onlineUsers.set(socket.id, {
      id: socket.id,
      userId: userId,
      username: username,
      channelId: channelId,
      color: userColor,
      joinedAt: new Date(),
      messageCount: 0,
      lastMessageTime: 0
    });

    // Join socket room
    socket.join(`channel_${channelId}`);

    // Initialize channel if needed
    if (!channelRooms.has(channelId)) {
      channelRooms.set(channelId, {
        id: channelId,
        createdAt: new Date(),
        messageCount: 0,
        userCount: 0
      });
    }

    // Broadcast user joined
    io.to(`channel_${channelId}`).emit('user_joined', {
      username: username,
      userId: userId,
      timestamp: new Date()
    });

    // Send current online users
    const channelUsers = Array.from(onlineUsers.values()).filter(u => u.channelId === channelId);
    io.to(`channel_${channelId}`).emit('users_updated', {
      count: channelUsers.length,
      users: channelUsers
    });

    // Send recent messages to new user
    const channelMessages = messages.filter(m => m.channelId === channelId).slice(-50);
    socket.emit('load_messages', channelMessages);

    console.log(`👤 ${username} joined ${channelId}. Online: ${onlineUsers.size}`);
  });

  // User sends a message
  socket.on('send_message', (data) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;

    const { channelId, text } = data;
    const now = Date.now();

    // Rate limiting
    if (now - user.lastMessageTime < MESSAGE_RATE_LIMIT) {
      socket.emit('error', 'Please wait before sending another message');
      return;
    }

    // Validate message
    if (!text || text.trim().length === 0 || text.length > 500) {
      socket.emit('error', 'Invalid message');
      return;
    }

    // Create message
    const message = {
      id: generateMessageId(),
      channelId: channelId,
      author: user.username,
      userId: user.userId,
      text: filterProfanity(text),
      timestamp: new Date(),
      color: user.color,
      likes: 0,
      isModerator: isModerator(user.userId)
    };

    // Store message
    messages.push(message);
    if (messages.length > MAX_MESSAGES) {
      messages.shift(); // Keep only last 100 messages in memory
    }

    // Update user
    user.messageCount++;
    user.lastMessageTime = now;

    // Broadcast message
    io.to(`channel_${channelId}`).emit('message', message);

    console.log(`💬 [${channelId}] ${user.username}: ${text.substring(0, 50)}`);
  });

  // User types indicator
  socket.on('typing', (data) => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      socket.to(`channel_${data.channelId}`).emit('user_typing', {
        username: user.username,
        userId: user.id
      });
    }
  });

  // User stops typing
  socket.on('stop_typing', (data) => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      socket.to(`channel_${data.channelId}`).emit('user_stopped_typing', {
        userId: user.id
      });
    }
  });

  // Like a message
  socket.on('like_message', (data) => {
    const { messageId, channelId } = data;
    const message = messages.find(m => m.id === messageId);
    
    if (message) {
      message.likes++;
      io.to(`channel_${channelId}`).emit('message_liked', {
        messageId: messageId,
        likes: message.likes
      });
    }
  });

  // Delete message (moderator only)
  socket.on('delete_message', (data) => {
    const user = onlineUsers.get(socket.id);
    if (!user || !isModerator(user.userId)) {
      socket.emit('error', 'Only moderators can delete messages');
      return;
    }

    const index = messages.findIndex(m => m.id === data.messageId);
    if (index !== -1) {
      messages.splice(index, 1);
      io.to(`channel_${data.channelId}`).emit('message_deleted', {
        messageId: data.messageId
      });
      console.log(`🗑️ Message ${data.messageId} deleted by moderator ${user.username}`);
    }
  });

  // User disconnects
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      // Broadcast user left
      io.to(`channel_${user.channelId}`).emit('user_left', {
        username: user.username,
        userId: user.id
      });

      // Remove user
      onlineUsers.delete(socket.id);

      // Update online count
      const channelUsers = Array.from(onlineUsers.values()).filter(u => u.channelId === user.channelId);
      io.to(`channel_${user.channelId}`).emit('users_updated', {
        count: channelUsers.length,
        users: channelUsers
      });

      console.log(`🔴 ${user.username} disconnected. Online: ${onlineUsers.size}`);
    }
  });

  // Handle errors
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// Utility Functions
function generateMessageId() {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateUserColor() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function filterProfanity(text) {
  // Simple profanity filter - add more words as needed
  const bannedWords = ['badword1', 'badword2'];
  let filtered = text;
  
  bannedWords.forEach(word => {
    const regex = new RegExp(word, 'gi');
    filtered = filtered.replace(regex, '*'.repeat(word.length));
  });

  return filtered;
}

function isModerator(userId) {
  // List of moderator user IDs
  const moderators = ['admin_001', 'mod_001', 'mod_002'];
  return moderators.includes(userId);
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🚀 BWE TV Socket.io Server running on http://localhost:${PORT}`);
  console.log(`📡 Waiting for connections...\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});