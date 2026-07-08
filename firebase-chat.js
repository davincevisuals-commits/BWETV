/**
 * BWE TV - Firebase Configuration & Initialization
 * This file sets up Firebase for real-time database and authentication
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (or use existing one)
 * 3. Enable Realtime Database (in test mode for development)
 * 4. Enable Authentication (Email/Anonymous)
 * 5. Copy your Firebase config from Project Settings
 * 6. Replace the config below with your credentials
 */

// Firebase Configuration - REPLACE WITH YOUR OWN
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// For development/testing, use these test credentials:
// const firebaseConfig = {
//   apiKey: "AIzaSyDemoKeyForTesting",
//   authDomain: "bwetv-demo.firebaseapp.com",
//   projectId: "bwetv-demo",
//   storageBucket: "bwetv-demo.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abc123def456"
// };

// Initialize Firebase (only if SDK is loaded)
let db = null;
let auth = null;

function initializeFirebase() {
  if (typeof firebase !== 'undefined') {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Get reference to database
    db = firebase.database();
    auth = firebase.auth();
    
    console.log('✅ Firebase initialized successfully');
    return true;
  } else {
    console.warn('⚠️ Firebase SDK not loaded. Load it from: https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
    return false;
  }
}

/**
 * Firebase Chat Manager Class
 * Handles real-time messaging with Firebase Realtime Database
 */
class FirebaseChat {
  constructor(channelId = 'live-chat') {
    this.channelId = channelId;
    this.channelRef = null;
    this.messagesRef = null;
    this.usersRef = null;
    this.messages = [];
    this.listeners = [];
    
    if (db) {
      this.setupReferences();
      this.setupListeners();
    }
  }

  setupReferences() {
    this.channelRef = db.ref(`channels/${this.channelId}`);
    this.messagesRef = db.ref(`channels/${this.channelId}/messages`);
    this.usersRef = db.ref(`channels/${this.channelId}/users`);
  }

  setupListeners() {
    if (!this.messagesRef) return;

    // Listen for new messages
    this.messagesRef.limitToLast(50).on('child_added', (snapshot) => {
      const message = snapshot.val();
      if (message) {
        this.messages.push({
          id: snapshot.key,
          ...message
        });
        this.notifyListeners('messageAdded', message);
      }
    });

    // Listen for user count
    this.usersRef.on('value', (snapshot) => {
      const count = snapshot.numChildren();
      this.notifyListeners('usersUpdated', count);
    });
  }

  /**
   * Send a message to Firebase
   */
  async sendMessage(username, text, userId) {
    if (!this.messagesRef) {
      console.error('Messages reference not initialized');
      return false;
    }

    try {
      const messageData = {
        author: username,
        userId: userId,
        text: text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        likes: 0,
        isModerator: false
      };

      await this.messagesRef.push(messageData);
      console.log('✅ Message sent successfully');
      return true;
    } catch (error) {
      console.error('❌ Error sending message:', error);
      return false;
    }
  }

  /**
   * Add or update user in online users list
   */
  async addUser(username, userId) {
    if (!this.usersRef) return false;

    try {
      await this.usersRef.child(userId).set({
        username: username,
        joinedAt: firebase.database.ServerValue.TIMESTAMP,
        status: 'online'
      });
      return true;
    } catch (error) {
      console.error('Error adding user:', error);
      return false;
    }
  }

  /**
   * Remove user from online list
   */
  async removeUser(userId) {
    if (!this.usersRef) return false;

    try {
      await this.usersRef.child(userId).remove();
      return true;
    } catch (error) {
      console.error('Error removing user:', error);
      return false;
    }
  }

  /**
   * Like a message
   */
  async likeMessage(messageId) {
    if (!this.messagesRef) return false;

    try {
      const messageRef = this.messagesRef.child(messageId);
      await messageRef.update({
        likes: firebase.database.ServerValue.increment(1)
      });
      return true;
    } catch (error) {
      console.error('Error liking message:', error);
      return false;
    }
  }

  /**
   * Delete a message (for moderators)
   */
  async deleteMessage(messageId) {
    if (!this.messagesRef) return false;

    try {
      await this.messagesRef.child(messageId).remove();
      console.log('✅ Message deleted');
      return true;
    } catch (error) {
      console.error('Error deleting message:', error);
      return false;
    }
  }

  /**
   * Subscribe to chat events
   */
  subscribe(callback) {
    this.listeners.push(callback);
  }

  /**
   * Notify all subscribers
   */
  notifyListeners(event, data) {
    this.listeners.forEach(callback => {
      callback(event, data);
    });
  }

  /**
   * Disconnect and cleanup
   */
  disconnect() {
    if (this.channelRef) {
      this.channelRef.off();
    }
    this.listeners = [];
  }
}

// Firebase Authentication Helper
const FirebaseAuth = {
  /**
   * Anonymous sign-in
   */
  signInAnonymously: async () => {
    if (!auth) return null;
    try {
      const result = await auth.signInAnonymously();
      console.log('✅ Signed in anonymously as:', result.user.uid);
      return result.user;
    } catch (error) {
      console.error('❌ Error signing in:', error);
      return null;
    }
  },

  /**
   * Sign in with email
   */
  signInWithEmail: async (email, password) => {
    if (!auth) return null;
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log('✅ Signed in as:', result.user.email);
      return result.user;
    } catch (error) {
      console.error('❌ Error signing in:', error);
      return null;
    }
  },

  /**
   * Create user account
   */
  createUser: async (email, password) => {
    if (!auth) return null;
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log('✅ Account created:', result.user.email);
      return result.user;
    } catch (error) {
      console.error('❌ Error creating account:', error);
      return null;
    }
  },

  /**
   * Sign out
   */
  signOut: async () => {
    if (!auth) return;
    try {
      await auth.signOut();
      console.log('✅ Signed out');
    } catch (error) {
      console.error('❌ Error signing out:', error);
    }
  },

  /**
   * Get current user
   */
  getCurrentUser: () => {
    return auth ? auth.currentUser : null;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeFirebase,
    FirebaseChat,
    FirebaseAuth,
    firebaseConfig
  };
}