# BWE TV Live Chat - Setup Guide

## Overview
This guide explains how to set up and use the real-time chat system for BWE TV with two options: **Firebase** (cloud-based, no server required) or **Socket.io** (self-hosted server).

---

## Option 1: Firebase (Recommended for Quick Start)

### Why Firebase?
✅ No server management required  
✅ Scales automatically  
✅ Free tier includes generous limits  
✅ Real-time database  
✅ Built-in authentication  

### Setup Instructions

#### Step 1: Create Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click "Create Project"
3. Enter project name: `bwetv-chat`
4. Follow the setup wizard

#### Step 2: Enable Realtime Database
1. In Firebase Console, go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose region closest to you
4. Start in **Test Mode** (for development)
5. Click **Enable**

#### Step 3: Set Up Security Rules
Replace the default rules with:

```json
{
  "rules": {
    "channels": {
      "$channelId": {
        "messages": {
          ".read": true,
          ".write": "auth != null",
          "$messageId": {
            ".validate": "newData.hasChildren(['author', 'text', 'timestamp'])"
          }
        },
        "users": {
          ".read": true,
          ".write": "auth != null"
        }
      }
    }
  }
}
```

#### Step 4: Enable Authentication
1. Go to **Build** → **Authentication**
2. Click **Get Started**
3. Enable **Anonymous** authentication
4. Enable **Email/Password** (optional)

#### Step 5: Get Your Config
1. Go to **Project Settings** (gear icon)
2. Scroll to **Your apps**
3. Click on your web app
4. Copy the Firebase config
5. Paste it into `firebase-chat.js` (replace the config object)

#### Step 6: Add Firebase SDK to HTML
Add these scripts to `live-chat.html` before `firebase-chat.js`:

```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>
```

#### Step 7: Update live-chat.html
Replace the Socket.io initialization with Firebase:

```javascript
// At the top of the script
initializeFirebase();

class LiveChat {
  constructor() {
    this.username = this.getUsername();
    this.userId = this.generateUserId();
    this.firebaseChat = new FirebaseChat('live-chat');
    this.messages = [];
    this.onlineCount = 0;
    
    this.initChat();
    this.setupEventListeners();
    this.displayCurrentShow();
  }
  
  initChat() {
    // Sign in anonymously
    FirebaseAuth.signInAnonymously().then(() => {
      this.firebaseChat.addUser(this.username, this.userId);
    });
    
    // Listen for messages
    this.firebaseChat.subscribe((event, data) => {
      if (event === 'messageAdded') {
        this.displayMessage(data);
      } else if (event === 'usersUpdated') {
        this.onlineCount = data;
        this.updateOnlineCount();
      }
    });
    
    this.updateUsernameDisplay();
  }
  
  sendMessage(text) {
    this.firebaseChat.sendMessage(this.username, text, this.userId);
  }
}
```

### Database Structure
```
channels/
  ├── live-chat/
  │   ├── messages/
  │   │   ├── msg_1/
  │   │   │   ├── author: "John_23"
  │   │   │   ├── text: "Great show!"
  │   │   │   ├── timestamp: 1686000000
  │   │   │   └── userId: "user_123"
  │   │   └── msg_2/...
  │   └── users/
  │       ├── user_1/
  │       │   ├── username: "John_23"
  │       │   └── joinedAt: 1686000000
  │       └── user_2/...
```

---

## Option 2: Socket.io (Self-Hosted Server)

### Why Socket.io?
✅ Full control over infrastructure  
✅ No third-party dependencies  
✅ Suitable for enterprise deployments  
✅ Better for high-volume chat scenarios  

### Setup Instructions

#### Step 1: Install Node.js
Download from [https://nodejs.org](https://nodejs.org) (LTS version recommended)

#### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- `express` - Web framework
- `socket.io` - Real-time communication
- `cors` - Cross-origin requests

#### Step 3: Run the Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will start on `http://localhost:3000`

#### Step 4: Update HTML Files
In `live-chat.html`, make sure Socket.io is loaded:

```html
<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
```

#### Step 5: Create Socket.io Client Code
Replace the local chat simulation with:

```javascript
class LiveChat {
  constructor() {
    this.username = this.getUsername();
    this.userId = this.generateUserId();
    this.socket = io('http://localhost:3000'); // Connect to server
    this.messages = [];
    this.onlineCount = 0;
    
    this.initChat();
    this.setupSocketEvents();
    this.setupEventListeners();
    this.displayCurrentShow();
  }

  setupSocketEvents() {
    // Connect
    this.socket.on('connect', () => {
      console.log('Connected to chat server');
      this.socket.emit('join_channel', {
        username: this.username,
        channelId: 'live-chat',
        userId: this.userId
      });
    });

    // Receive message
    this.socket.on('message', (message) => {
      this.displayMessage(message);
    });

    // User joined
    this.socket.on('user_joined', (data) => {
      this.addSystemMessage(`👤 ${data.username} joined the chat`);
    });

    // Users updated
    this.socket.on('users_updated', (data) => {
      this.onlineCount = data.count;
      this.updateOnlineCount();
    });

    // Load recent messages
    this.socket.on('load_messages', (messages) => {
      messages.forEach(msg => this.displayMessage(msg));
    });

    // Disconnect
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }

  sendMessage(text) {
    this.socket.emit('send_message', {
      channelId: 'live-chat',
      text: text
    });
  }
}
```

#### Step 6: Deploy Server
For production deployment, use services like:
- **Heroku** - `git push heroku main`
- **Railway** - Drag and drop deployment
- **Render** - Free tier available
- **AWS** - EC2 instances
- **DigitalOcean** - Affordable VPS

Example Heroku deployment:
```bash
heroku login
heroku create bwetv-chat
git push heroku main
```

---

## Security Best Practices

### Firebase
1. Never expose your API key in production
2. Use environment variables for sensitive data
3. Implement proper authentication
4. Set up Security Rules to prevent abuse

### Socket.io
1. Add rate limiting to prevent spam
2. Implement user authentication
3. Validate all incoming messages
4. Use HTTPS in production
5. Implement proper CORS policies

---

## Features Implemented

### Chat Features
✅ Real-time messaging  
✅ User presence (online count)  
✅ Username customization  
✅ Message timestamps  
✅ Message filtering  
✅ Moderator badges  
✅ System messages  
✅ Responsive design  

### Planned Features
🔜 Message reactions/emojis  
🔜 User profiles  
🔜 Message history search  
🔜 Private messages  
🔜 Message pinning  
🔜 User reputation system  
🔜 Channel moderation tools  

---

## Troubleshooting

### Firebase Connection Issues
- Check that Firebase SDK is loaded
- Verify config values are correct
- Check browser console for errors
- Ensure Realtime Database is enabled

### Socket.io Connection Issues
- Verify server is running on port 3000
- Check that Socket.io client is loaded
- Look for CORS errors in browser console
- Verify firewall allows connections

### Message Not Sending
- Check user is authenticated
- Verify message length (max 500 chars)
- Check rate limiting (1 msg per second)
- Look at browser console for errors

---

## API Endpoints (Socket.io Server)

### GET Endpoints
- `GET /api/status` - Server status and stats
- `GET /api/messages/:channelId` - Get last 50 messages
- `GET /api/users/:channelId` - Get online users

### Socket Events
- `join_channel` - User joins chat
- `send_message` - Send a message
- `typing` - User is typing
- `like_message` - Like a message
- `delete_message` - Delete message (moderator)
- `disconnect` - User leaves

---

## Cost Analysis

### Firebase (recommended for startups)
- **Free tier**: 100 simultaneous connections, 1GB storage
- **Spark plan**: $0/month (with limitations)
- **Blaze plan**: Pay-as-you-go (~$0.01 per 100,000 operations)

### Socket.io
- **Self-hosted**: $5-100/month depending on server
- **Railway**: $5/month starter, then usage-based
- **Render**: Free tier available
- **AWS**: Varies ($1-50/month for small deployments)

**Recommendation**: Start with Firebase for prototyping, migrate to Socket.io when scaling.

---

## Support & Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Socket.io Documentation](https://socket.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Tutorials](https://nodejs.org/en/docs/)

