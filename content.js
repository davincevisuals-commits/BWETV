/**
 * BWE TV - Dynamic Content Management
 * Centralized data management for shows, schedules, and programs
 * Update this file to manage all content across the site
 */

// ============================================
// PROGRAMS DATA - Today's Programming
// ============================================
const PROGRAMS = [
  {
    id: 1,
    name: "Local News",
    time: "10:00 AM",
    host: "Tonny Blair.",
    description: "Latest news and updates from our community",
    duration: "60 min",
    category: "News"
  },
  {
    id: 2,
    name: "Culture Show",
    time: "12:00 PM",
    host: "Alphonse Secondo.",
    description: "Explore our rich cultural heritage and traditions",
    duration: "90 min",
    category: "Culture"
  },
  {
    id: 3,
    name: "Health Talk",
    time: "2:00 PM",
    host: "Dr. Jimmy Lujang",
    description: "Health tips and wellness advice from medical experts",
    duration: "45 min",
    category: "Health"
  },
  {
    id: 4,
    name: "Youth Forum",
    time: "4:00 PM",
    host: "Charles Khemis.",
    description: "Discussions on youth empowerment and education",
    duration: "60 min",
    category: "Education"
  },
  {
    id: 5,
    name: "Entertainment Hour",
    time: "6:00 PM",
    host: "Jessica L.",
    description: "Music, comedy, and entertainment highlights",
    duration: "60 min",
    category: "Entertainment"
  },
  {
    id: 6,
    name: "Evening News",
    time: "8:00 PM",
    host: "James M.",
    description: "Recap of the day's most important stories",
    duration: "30 min",
    category: "News"
  }
];

// ============================================
// SHOWS DATA - Complete Show Catalog
// ============================================
const SHOWS = [
  {
    id: 1,
    title: "Morning Rise",
    category: "News",
    description: "Start your day with the latest updates",
    host: "Sarah K.",
    airTime: "Daily at 10:00 AM",
    thumbnail: "📺",
    episodes: 156,
    rating: 4.8
  },
  {
    id: 2,
    title: "Cultural Roots",
    category: "Culture",
    description: "Explore our rich cultural heritage and traditions",
    host: "Moses A.",
    airTime: "Tuesdays & Thursdays at 12:00 PM",
    thumbnail: "🎭",
    episodes: 89,
    rating: 4.7
  },
  {
    id: 3,
    title: "Wellness Warriors",
    category: "Health",
    description: "Health tips and wellness advice from medical experts",
    host: "Dr. Lydia",
    airTime: "Wednesdays at 2:00 PM",
    thumbnail: "💪",
    episodes: 45,
    rating: 4.9
  },
  {
    id: 4,
    title: "Youth Voices",
    category: "Education",
    description: "Discussions on youth empowerment and education",
    host: "Brian T.",
    airTime: "Saturdays at 4:00 PM",
    thumbnail: "🎓",
    episodes: 78,
    rating: 4.6
  },
  {
    id: 5,
    title: "Entertainment Express",
    category: "Entertainment",
    description: "Music, comedy, and entertainment highlights",
    host: "Jessica L.",
    airTime: "Daily at 6:00 PM",
    thumbnail: "🎬",
    episodes: 203,
    rating: 4.5
  },
  {
    id: 6,
    title: "Business Update",
    category: "Business",
    description: "Market trends and business news",
    host: "Richard P.",
    airTime: "Fridays at 5:00 PM",
    thumbnail: "💼",
    episodes: 62,
    rating: 4.4
  }
];

// ============================================
// FULL WEEKLY SCHEDULE
// ============================================
const WEEKLY_SCHEDULE = {
  Monday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Culture Show", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Health Talk", host: "Dr. Lydia", duration: "45 min" },
    { time: "4:00 PM", show: "Youth Forum", host: "Brian T.", duration: "60 min" },
    { time: "6:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "60 min" },
    { time: "8:00 PM", show: "Evening News", host: "James M.", duration: "30 min" }
  ],
  Tuesday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Cultural Roots", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Health Talk", host: "Dr. Lydia", duration: "45 min" },
    { time: "4:00 PM", show: "Business Update", host: "Richard P.", duration: "60 min" },
    { time: "6:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "60 min" },
    { time: "8:00 PM", show: "Evening News", host: "James M.", duration: "30 min" }
  ],
  Wednesday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Culture Show", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Wellness Warriors", host: "Dr. Lydia", duration: "45 min" },
    { time: "4:00 PM", show: "Youth Forum", host: "Brian T.", duration: "60 min" },
    { time: "6:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "60 min" },
    { time: "8:00 PM", show: "Evening News", host: "James M.", duration: "30 min" }
  ],
  Thursday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Cultural Roots", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Health Talk", host: "Dr. Lydia", duration: "45 min" },
    { time: "4:00 PM", show: "Youth Forum", host: "Brian T.", duration: "60 min" },
    { time: "6:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "60 min" },
    { time: "8:00 PM", show: "Evening News", host: "James M.", duration: "30 min" }
  ],
  Friday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Culture Show", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Health Talk", host: "Dr. Lydia", duration: "45 min" },
    { time: "5:00 PM", show: "Business Update", host: "Richard P.", duration: "60 min" },
    { time: "7:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "90 min" },
    { time: "9:00 PM", show: "Late Night News", host: "James M.", duration: "30 min" }
  ],
  Saturday: [
    { time: "9:00 AM", show: "Weekend News", host: "Sarah K.", duration: "60 min" },
    { time: "11:00 AM", show: "Cultural Roots", host: "Moses A.", duration: "90 min" },
    { time: "1:00 PM", show: "Wellness Warriors", host: "Dr. Lydia", duration: "60 min" },
    { time: "4:00 PM", show: "Youth Voices", host: "Brian T.", duration: "90 min" },
    { time: "6:00 PM", show: "Entertainment Express", host: "Jessica L.", duration: "120 min" },
    { time: "9:00 PM", show: "Weekend Special", host: "Various", duration: "60 min" }
  ],
  Sunday: [
    { time: "10:00 AM", show: "Local News", host: "Sarah K.", duration: "60 min" },
    { time: "12:00 PM", show: "Culture Show", host: "Moses A.", duration: "90 min" },
    { time: "2:00 PM", show: "Wellness Warriors", host: "Dr. Lydia", duration: "60 min" },
    { time: "4:00 PM", show: "Family Hour", host: "Community", duration: "120 min" },
    { time: "6:00 PM", show: "Entertainment Hour", host: "Jessica L.", duration: "60 min" },
    { time: "8:00 PM", show: "Sunday Special", host: "Various", duration: "90 min" }
  ]
};

// ============================================
// FEATURED/TRENDING SHOWS
// ============================================
const FEATURED_SHOWS = [
  {
    id: 1,
    title: "Morning Rise",
    category: "News",
    featured: true,
    reason: "Most Watched"
  },
  {
    id: 3,
    title: "Wellness Warriors",
    category: "Health",
    featured: true,
    reason: "Trending This Week"
  },
  {
    id: 5,
    title: "Entertainment Express",
    category: "Entertainment",
    featured: true,
    reason: "New Episodes Daily"
  }
];

// ============================================
// LIVE STREAMING CONFIGURATION
// ============================================
const STREAM_CONFIG = {
  primary: {
    url: "http://yourserverip:8080/live/streamkey.m3u8",
    type: "application/x-mpegURL",
    qualities: ["720p", "480p", "360p", "240p"]
  },
  backup: {
    url: "video.mp4",
    type: "video/mp4"
  },
  currentShow: PROGRAMS[0],
  isLive: true,
  viewerCount: Math.floor(Math.random() * 5000) + 1000
};

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCg9fxgrXlEuKW_m5MvDnG26Uf6lLdiYik",
  authDomain: "bwetv-ug.firebaseapp.com",
  projectId: "bwetv-ug",
  storageBucket: "bwetv-ug.firebasestorage.app",
  messagingSenderId: "481870926362",
  appId: "1:481870926362:web:f406a0f135449ccfaa77a3",
  measurementId: "G-SJ5YJH2G7C",
  databaseURL: "https://bwetv-ug-default-rtdb.firebaseio.com/"
};

const CHAT_MAX_LENGTH = 300;
const CHAT_NEAR_BOTTOM_THRESHOLD = 80;
const DEFAULT_CHAT_PATH = "chat";
const scheduleState = {
  selectedDay: "Today"
};
const showsState = {
  selectedCategory: "All"
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get today's schedule
 */
function getTodaySchedule() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return WEEKLY_SCHEDULE[days[today]] || [];
}

/**
 * Get a specific show by ID
 */
function getShowById(id) {
  return SHOWS.find((show) => show.id === id);
}

/**
 * Get shows by category
 */
function getShowsByCategory(category) {
  return SHOWS.filter((show) => show.category === category);
}

/**
 * Search shows
 */
function searchShows(query) {
  const lower = query.toLowerCase();
  return SHOWS.filter(
    (show) =>
      show.title.toLowerCase().includes(lower) ||
      show.description.toLowerCase().includes(lower) ||
      show.host.toLowerCase().includes(lower)
  );
}

/**
 * Get upcoming programs (next N hours)
 */
function getUpcomingPrograms(hours = 4) {
  const schedule = getTodaySchedule();
  const now = new Date();
  const upcoming = [];

  schedule.forEach((program) => {
    const programTime = parseProgramTime(program.time, now);
    if (programTime > now && (programTime - now) / (1000 * 60 * 60) <= hours) {
      upcoming.push(program);
    }
  });

  return upcoming;
}

/**
 * Get current/now playing show
 */
function getCurrentShow() {
  const schedule = getTodaySchedule();
  const now = new Date();

  for (const program of schedule) {
    const startTime = parseProgramTime(program.time, now);
    const duration = parseInt(program.duration, 10) || 0;
    const endTime = new Date(startTime.getTime() + duration * 60000);

    if (now >= startTime && now < endTime) {
      return program;
    }
  }

  return null;
}

/**
 * Format time for display
 */
function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function parseProgramTime(timeString, baseDate = new Date()) {
  const [time, meridiem] = timeString.split(" ");
  const [hourString, minuteString] = time.split(":");
  let hour = parseInt(hourString, 10);
  const minute = parseInt(minuteString, 10);

  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;

  return new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), hour, minute);
}

function getSelectedSchedule() {
  return scheduleState.selectedDay === "Today"
    ? getTodaySchedule()
    : WEEKLY_SCHEDULE[scheduleState.selectedDay] || [];
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (typeof text === "string") element.textContent = text;
  return element;
}

function updateShareStatus(message) {
  if (typeof window !== "undefined") {
    window.setTimeout(() => window.alert(message), 0);
  }
}

async function copyText(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  return false;
}

async function sharePage({ title, text, url }) {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return true;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return false;
      }
    }
  }

  const copied = await copyText(`${title}\n${text}\n${url}`);
  updateShareStatus(copied ? "Share details copied to your clipboard." : `Share this link: ${url}`);
  return copied;
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function formatProgramSummary(program) {
  if (!program) {
    return "BWE TV programming updates";
  }
  return `${program.show || program.name} at ${program.time} with ${program.host}`;
}

let cachedFirebaseServices = null;

function getFirebaseServices() {
  if (cachedFirebaseServices) {
    return cachedFirebaseServices;
  }

  if (typeof window === "undefined" || typeof window.firebase === "undefined") {
    return null;
  }

  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(FIREBASE_CONFIG);
  }

  cachedFirebaseServices = {
    app: window.firebase.app(),
    auth: typeof window.firebase.auth === "function" ? window.firebase.auth() : null,
    rtdb: typeof window.firebase.database === "function" ? window.firebase.database() : null,
    db: typeof window.firebase.firestore === "function" ? window.firebase.firestore() : null
  };

  return cachedFirebaseServices;
}

function getDisplayName(user) {
  if (!user) {
    return "Guest";
  }

  if (user.email) {
    return user.email;
  }

  const storageKey = "bwetvGuestName";
  const fallback = `Guest-${String(user.uid || "viewer").slice(0, 6)}`;

  try {
    const existing = window.localStorage.getItem(storageKey);
    if (existing) {
      return existing;
    }
    window.localStorage.setItem(storageKey, fallback);
  } catch (error) {
    // Ignore storage failures.
  }

  return fallback;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setDisabled(element, disabled) {
  if (element) {
    element.disabled = disabled;
  }
}

function setAuthStatus(message, tone = "default") {
  const status = document.getElementById("authStatus");
  if (!status) return;

  status.textContent = message;
  status.className = `text-sm mt-3 ${tone === "error" ? "text-red-700" : tone === "success" ? "text-green-700" : "text-gray-700"}`;
}

function isNearBottom(element) {
  if (!element) return true;
  return element.scrollHeight - element.scrollTop - element.clientHeight < CHAT_NEAR_BOTTOM_THRESHOLD;
}

function scrollChatToBottom(chatContainer, newMessageButton) {
  if (!chatContainer) return;
  chatContainer.scrollTop = chatContainer.scrollHeight;
  if (newMessageButton) {
    newMessageButton.classList.add("hidden");
  }
}

function setChatStatus(statusElement, message, tone = "neutral") {
  if (!statusElement) return;
  statusElement.textContent = message;
  statusElement.className = `text-xs ${tone === "error" ? "text-red-300" : tone === "success" ? "text-green-300" : "text-gray-400"}`;
}

function validateChatInput(chatInput, chatButton, charCount) {
  if (!chatInput) return;
  const message = chatInput.value.trim();
  if (charCount) {
    charCount.textContent = `${chatInput.value.length}/${CHAT_MAX_LENGTH}`;
  }
  setDisabled(chatButton, !message || message.length > CHAT_MAX_LENGTH);
}

function renderChatMessage({ chatContainer, newMessageButton, auth }, message) {
  if (!chatContainer || !message) return;

  const nearBottom = isNearBottom(chatContainer);
  const currentUser = auth && auth.currentUser;
  const isCurrentUser = currentUser && message.userId && currentUser.uid === message.userId;

  const row = createElement("div", `mb-2 flex ${isCurrentUser ? "justify-end" : "justify-start"}`);
  const bubble = createElement(
    "article",
    `max-w-[85%] rounded-lg border p-3 shadow-sm ${
      isCurrentUser ? "border-blue-700 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-900"
    }`
  );
  const meta = createElement(
    "p",
    `mb-1 text-[11px] ${isCurrentUser ? "text-blue-100" : "text-gray-500"}`,
    `${message.user || "Guest"} • ${formatTime(new Date(message.timestamp || Date.now()))}`
  );
  const body = createElement("p", "text-sm whitespace-pre-wrap break-words", message.text || "");

  bubble.appendChild(meta);
  bubble.appendChild(body);
  row.appendChild(bubble);
  chatContainer.appendChild(row);

  if (nearBottom) {
    scrollChatToBottom(chatContainer, newMessageButton);
  } else if (newMessageButton) {
    newMessageButton.classList.remove("hidden");
  }
}

function setupSharedChat(services, options = {}) {
  const { auth, rtdb } = services || {};
  const chatContainer = document.getElementById(options.containerId || "chatContainer");
  const chatInput = document.getElementById(options.inputId || "chatInput");
  const chatButton = document.getElementById(options.buttonId || "chatBtn");
  const chatStatus = document.getElementById(options.statusId || "chatStatus");
  const charCount = document.getElementById(options.charCountId || "charCount");
  const newMessageButton = document.getElementById(options.newMessageButtonId || "newMsgBtn");
  const emptyState = document.getElementById(options.emptyStateId || "chatEmptyState");

  if (!chatContainer || !chatInput || !chatButton) {
    return;
  }

  if (!auth || !rtdb) {
    setDisabled(chatInput, true);
    setDisabled(chatButton, true);
    setChatStatus(chatStatus, "Chat unavailable", "error");
    return;
  }

  const messagesRef = rtdb.ref(options.path || DEFAULT_CHAT_PATH).limitToLast(options.limit || 100);
  const connectedRef = rtdb.ref(".info/connected");
  const state = { hasMessages: false, initialized: false };

  const maybeSignInGuest = async () => {
    if (options.autoSignIn === false) {
      return;
    }
    if (!auth.currentUser) {
      try {
        await auth.signInAnonymously();
      } catch (error) {
        setChatStatus(chatStatus, "Sign-in required", "error");
      }
    }
  };

  const sendMessage = async () => {
    const text = chatInput.value.trim();
    if (!text || text.length > CHAT_MAX_LENGTH) return;

    if (!auth.currentUser) {
      await maybeSignInGuest();
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setChatStatus(chatStatus, "Unable to send", "error");
      return;
    }

    const payload = {
      text,
      user: getDisplayName(currentUser),
      userId: currentUser.uid,
      timestamp: Date.now()
    };

    setDisabled(chatButton, true);
    setChatStatus(chatStatus, "Sending…");

    try {
      await rtdb.ref(options.path || DEFAULT_CHAT_PATH).push(payload);
      chatInput.value = "";
      validateChatInput(chatInput, chatButton, charCount);
      setChatStatus(chatStatus, "Connected", "success");
    } catch (error) {
      setChatStatus(chatStatus, "Send failed", "error");
      updateShareStatus("Message failed to send. Please try again.");
    }
  };

  if (!state.initialized) {
    chatContainer.innerHTML = "";

    chatInput.addEventListener("input", () => validateChatInput(chatInput, chatButton, charCount));
    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        if (!chatButton.disabled) {
          sendMessage();
        }
      }
    });
    chatButton.addEventListener("click", sendMessage);

    if (newMessageButton) {
      newMessageButton.addEventListener("click", () => scrollChatToBottom(chatContainer, newMessageButton));
    }

    connectedRef.on("value", (snapshot) => {
      setChatStatus(chatStatus, snapshot.val() ? "Connected" : "Reconnecting…", snapshot.val() ? "success" : "neutral");
    });

    messagesRef.on("child_added", (snapshot) => {
      state.hasMessages = true;
      if (emptyState) {
        emptyState.classList.add("hidden");
      }
      renderChatMessage({ chatContainer, newMessageButton, auth }, snapshot.val() || {});
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        setChatStatus(chatStatus, `Connected as ${getDisplayName(user)}`, "success");
      }
    });

    state.initialized = true;
  }

  validateChatInput(chatInput, chatButton, charCount);
  maybeSignInGuest();
}

function setupHomeAuth(services) {
  const { auth } = services || {};
  if (!auth) return;

  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const logoutButton = document.getElementById("logoutBtn");

  const handleAuthError = (error) => {
    setAuthStatus(error && error.message ? error.message : "Something went wrong.", "error");
  };

  if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("signupEmail")?.value.trim();
      const password = document.getElementById("signupPassword")?.value || "";
      if (!email || !password) return;

      try {
        await auth.createUserWithEmailAndPassword(email, password);
        signupForm.reset();
        setAuthStatus("Account created successfully.", "success");
      } catch (error) {
        handleAuthError(error);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("loginEmail")?.value.trim();
      const password = document.getElementById("loginPassword")?.value || "";
      if (!email || !password) return;

      try {
        await auth.signInWithEmailAndPassword(email, password);
        loginForm.reset();
        setAuthStatus("Welcome back.", "success");
      } catch (error) {
        handleAuthError(error);
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try {
        await auth.signOut();
        await auth.signInAnonymously();
        setAuthStatus("You are now browsing as a guest.");
      } catch (error) {
        handleAuthError(error);
      }
    });
  }

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      try {
        await auth.signInAnonymously();
        return;
      } catch (error) {
        setAuthStatus("Guest sign-in is unavailable right now.", "error");
        return;
      }
    }

    setAuthStatus(user.isAnonymous ? `Chatting as ${getDisplayName(user)}` : `Signed in as ${getDisplayName(user)}`);
  });
}

function setupCommunityAuth(services) {
  const { auth } = services || {};
  const loginSection = document.getElementById("loginSection");
  const communitySection = document.getElementById("communitySection");
  if (!auth || !loginSection || !communitySection) return;

  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const loginButton = document.getElementById("loginBtn");
  const signupButton = document.getElementById("signupBtn");
  const anonymousButton = document.getElementById("anonBtn");
  const communityStatus = document.getElementById("communityStatus");
  const currentViewer = document.getElementById("currentViewer");
  const signOutButton = document.getElementById("signOutBtn");

  const updateCommunityStatus = (message, tone = "default") => {
    if (!communityStatus) return;
    communityStatus.textContent = message;
    communityStatus.className = `mt-4 text-sm ${tone === "error" ? "text-red-700" : tone === "success" ? "text-green-700" : "text-gray-600"}`;
  };

  const withAuth = async (callback) => {
    try {
      await callback();
    } catch (error) {
      updateCommunityStatus(error && error.message ? error.message : "Something went wrong.", "error");
    }
  };

  if (loginButton) {
    loginButton.addEventListener("click", () =>
      withAuth(() => auth.signInWithEmailAndPassword(emailInput?.value.trim() || "", passwordInput?.value || ""))
    );
  }

  if (signupButton) {
    signupButton.addEventListener("click", () =>
      withAuth(() => auth.createUserWithEmailAndPassword(emailInput?.value.trim() || "", passwordInput?.value || ""))
    );
  }

  if (anonymousButton) {
    anonymousButton.addEventListener("click", () => withAuth(() => auth.signInAnonymously()));
  }

  if (signOutButton) {
    signOutButton.addEventListener("click", () => withAuth(async () => {
      await auth.signOut();
      updateCommunityStatus("Signed out. Continue as guest or sign in again.");
    }));
  }

  auth.onAuthStateChanged((user) => {
    const isSignedIn = Boolean(user);
    loginSection.classList.toggle("hidden", isSignedIn);
    communitySection.classList.toggle("hidden", !isSignedIn);

    if (isSignedIn) {
      const name = getDisplayName(user);
      if (currentViewer) {
        currentViewer.textContent = name;
      }
      updateCommunityStatus(user.isAnonymous ? `You are participating as ${name}.` : `Welcome back, ${name}.`, "success");
    }
  });
}

function setupCommunityPosts(services) {
  const { auth, db } = services || {};
  const postInput = document.getElementById("postInput");
  const postButton = document.getElementById("postBtn");
  const postsContainer = document.getElementById("postsContainer");
  const postStatus = document.getElementById("postStatus");

  if (!auth || !db || !postInput || !postButton || !postsContainer) {
    return;
  }

  postButton.addEventListener("click", async () => {
    const text = postInput.value.trim();
    if (!text) return;

    try {
      await db.collection("posts").add({
        text,
        user: getDisplayName(auth.currentUser),
        timestamp: window.firebase.firestore.FieldValue.serverTimestamp()
      });
      postInput.value = "";
      if (postStatus) {
        postStatus.textContent = "Discussion shared.";
      }
    } catch (error) {
      if (postStatus) {
        postStatus.textContent = "Unable to publish right now.";
      }
    }
  });

  db.collection("posts")
    .orderBy("timestamp", "desc")
    .limit(10)
    .onSnapshot(
      (snapshot) => {
        postsContainer.innerHTML = "";
        snapshot.forEach((doc) => {
          const post = doc.data() || {};
          const card = createElement("article", "rounded-lg border border-gray-200 bg-white p-3 shadow-sm");
          const meta = createElement("p", "mb-1 text-sm font-semibold text-gray-800", post.user || "Community member");
          const body = createElement("p", "text-sm text-gray-600 whitespace-pre-wrap", post.text || "");
          card.appendChild(meta);
          card.appendChild(body);
          postsContainer.appendChild(card);
        });
      },
      () => {
        if (postStatus) {
          postStatus.textContent = "Discussions are temporarily unavailable.";
        }
      }
    );
}

function setupCommunityActions() {
  const donatePaypalButton = document.getElementById("donatePaypalBtn");
  const donateMtnButton = document.getElementById("donateMtnBtn");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterStatus = document.getElementById("newsletterStatus");

  if (donatePaypalButton) {
    donatePaypalButton.addEventListener("click", () => {
      window.location.href = "https://www.paypal.me/oyoovincentoyoo1725";
    });
  }

  if (donateMtnButton) {
    donateMtnButton.addEventListener("click", () => {
      updateShareStatus("Donate via MTN Mobile Money: +256774231123");
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]')?.value.trim();
      if (newsletterStatus) {
        newsletterStatus.textContent = email
          ? `Thanks! We will follow up at ${email}.`
          : "Thanks for subscribing.";
      }
      newsletterForm.reset();
    });
  }
}

function renderPrograms() {
  const container = document.getElementById("programsContainer");
  if (!container) return;

  container.innerHTML = "";
  getTodaySchedule().forEach((program) => {
    const card = createElement("article", "rounded-lg bg-white p-5 shadow-sm program-card border border-gray-100");
    card.appendChild(createElement("p", "mb-2 text-sm font-semibold text-red-600", program.time));
    card.appendChild(createElement("h3", "mb-2 text-xl font-bold text-gray-900", program.show));
    card.appendChild(createElement("p", "mb-2 text-sm text-gray-600", `Hosted by ${program.host}`));
    card.appendChild(createElement("p", "text-sm text-gray-500", `${program.duration} • ${program.category || "Featured"}`));
    container.appendChild(card);
  });
}

function renderCurrentShow() {
  const currentShowInfo = document.getElementById("currentShowInfo");
  if (!currentShowInfo) return;

  const currentShow = getCurrentShow();
  if (!currentShow) {
    currentShowInfo.innerHTML = '<p class="text-lg font-semibold">On-demand playback is available while the next live program is queued.</p>';
    return;
  }

  currentShowInfo.innerHTML = `
    <div class="inline-flex flex-col items-center rounded-lg bg-white/10 px-5 py-4 text-white backdrop-blur-sm">
      <p class="mb-1 text-sm uppercase tracking-wide opacity-80">Now playing</p>
      <p class="text-2xl font-bold">${currentShow.show}</p>
      <p class="mt-1 text-sm opacity-90">${currentShow.time} • ${currentShow.duration} • Hosted by ${currentShow.host}</p>
    </div>
  `;
}

function renderSchedule(day = scheduleState.selectedDay) {
  const title = document.getElementById("scheduleTitle");
  const container = document.getElementById("scheduleContainer");
  if (!container || !title) return;

  scheduleState.selectedDay = day;
  const schedule = getSelectedSchedule();
  title.textContent = day === "Today" ? "Today's Schedule" : `${day}'s Schedule`;
  container.innerHTML = "";

  if (!schedule.length) {
    container.appendChild(createElement("p", "rounded-lg bg-gray-50 p-4 text-gray-600", "No schedule available right now."));
    return;
  }

  schedule.forEach((program) => {
    const item = createElement("article", "schedule-item rounded-lg bg-gray-50 p-4 shadow-sm");
    const topRow = createElement("div", "flex flex-col gap-3 md:flex-row md:items-center md:justify-between");
    const details = createElement("div");
    details.appendChild(createElement("p", "text-sm font-semibold uppercase tracking-wide text-red-600", program.time));
    details.appendChild(createElement("h3", "text-xl font-bold text-gray-900", program.show));
    details.appendChild(createElement("p", "text-sm text-gray-600", `Hosted by ${program.host}`));
    const duration = createElement("span", "inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-600", program.duration);

    topRow.appendChild(details);
    topRow.appendChild(duration);
    item.appendChild(topRow);
    container.appendChild(item);
  });
}

function getFilteredShows() {
  const searchQuery = document.getElementById("searchInput")?.value.trim().toLowerCase() || "";
  const sortValue = document.getElementById("sortSelect")?.value || "rating";

  let filtered = SHOWS.filter((show) =>
    (showsState.selectedCategory === "All" || show.category === showsState.selectedCategory) &&
    (!searchQuery || `${show.title} ${show.host} ${show.description}`.toLowerCase().includes(searchQuery))
  );

  filtered = filtered.sort((a, b) => {
    if (sortValue === "episodes") return b.episodes - a.episodes;
    if (sortValue === "name") return a.title.localeCompare(b.title);
    return b.rating - a.rating;
  });

  return filtered;
}

function renderShows() {
  const container = document.getElementById("showsContainer");
  const resultsInfo = document.getElementById("resultsInfo");
  const noResults = document.getElementById("noResults");
  if (!container || !resultsInfo || !noResults) return;

  const shows = getFilteredShows();
  container.innerHTML = "";

  if (!shows.length) {
    resultsInfo.textContent = "No shows match your current filters.";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");
  resultsInfo.textContent = `${shows.length} show${shows.length === 1 ? "" : "s"} available`;

  shows.forEach((show) => {
    const card = createElement("article", "show-card relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm");
    const badge = createElement("span", "mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600", show.category);
    const emoji = createElement("div", "mb-4 text-4xl", show.thumbnail);
    emoji.setAttribute("aria-hidden", "true");
    const title = createElement("h3", "mb-2 text-2xl font-bold text-gray-900", show.title);
    const description = createElement("p", "mb-4 text-sm text-gray-600", show.description);
    const host = createElement("p", "mb-1 text-sm font-semibold text-gray-700", `Host: ${show.host}`);
    const airtime = createElement("p", "mb-4 text-sm text-gray-500", show.airTime);
    const stats = createElement("div", "flex items-center justify-between text-sm font-semibold text-gray-600");
    stats.appendChild(createElement("span", "", `${show.episodes} episodes`));
    stats.appendChild(createElement("span", "", `${show.rating.toFixed(1)} ★`));

    card.appendChild(badge);
    card.appendChild(emoji);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(host);
    card.appendChild(airtime);
    card.appendChild(stats);
    container.appendChild(card);
  });
}

function highlightActiveFilter(buttons, activeButton) {
  buttons.forEach((button) => {
    button.classList.remove("active", "btn-primary");
    button.classList.add("btn-secondary");
  });
  activeButton.classList.add("active", "btn-primary");
  activeButton.classList.remove("btn-secondary");
}

function toggleMobileMenu() {
  const button = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!button || !menu) return;

  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("hidden", isOpen);
  menu.classList.toggle("visible", !isOpen);
}

function initializeMobileMenu() {
  const button = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!button || !menu) return;

  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", toggleMobileMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      menu.classList.add("hidden");
      menu.classList.remove("visible");
    });
  });
}

function highlightCurrentNav() {
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    const isActive = href === path || (path === "" && href === "index.html");
    link.classList.toggle("nav-link-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    }
  });
}

async function shareVideo() {
  const currentShow = getCurrentShow() || STREAM_CONFIG.currentShow;
  await sharePage({
    title: "Watch BWE TV Live",
    text: `Tune in now: ${formatProgramSummary(currentShow)}`,
    url: window.location.href
  });
}

async function shareSchedule() {
  await sharePage({
    title: "BWE TV Schedule",
    text: `Today's highlight: ${formatProgramSummary(getSelectedSchedule()[0])}`,
    url: `${window.location.origin}${window.location.pathname}`
  });
}

function downloadSchedule() {
  const schedule = getSelectedSchedule();
  const lines = schedule.map((program) => `${program.time} — ${program.show} (${program.duration}) with ${program.host}`);
  downloadTextFile(`bwe-tv-${scheduleState.selectedDay.toLowerCase()}-schedule.txt`, lines.join("\n"));
}

function setReminder() {
  const nextProgram = getSelectedSchedule()[0] || getCurrentShow();
  if (!nextProgram) {
    updateShareStatus("No upcoming program is available for a reminder.");
    return;
  }

  const reminderTime = parseProgramTime(nextProgram.time);
  const reminderText = `${nextProgram.show} starts at ${nextProgram.time}. Host: ${nextProgram.host}.`;
  copyText(reminderText)
    .then((copied) => {
      updateShareStatus(
        copied
          ? `Reminder copied for ${nextProgram.show}. Add it to your calendar.`
          : `Set a reminder for ${nextProgram.show} at ${formatTime(reminderTime)}.`
      );
    })
    .catch(() => updateShareStatus(`Set a reminder for ${nextProgram.show} at ${formatTime(reminderTime)}.`));
}

function selectDay(event, day) {
  scheduleState.selectedDay = day;
  document.querySelectorAll(".day-btn").forEach((button) => {
    button.classList.remove("btn-primary");
    button.classList.add("btn-secondary");
  });
  if (event?.currentTarget) {
    event.currentTarget.classList.add("btn-primary");
    event.currentTarget.classList.remove("btn-secondary");
  }
  renderSchedule(day);
}

function filterShows() {
  renderShows();
}

function filterByCategory(event, category) {
  showsState.selectedCategory = category;
  highlightActiveFilter(Array.from(document.querySelectorAll(".category-filter")), event.currentTarget);
  renderShows();
}

function sortShows() {
  renderShows();
}

function initializePageEnhancements() {
  initializeMobileMenu();
  highlightCurrentNav();
  renderPrograms();
  renderCurrentShow();
  renderSchedule(scheduleState.selectedDay);
  renderShows();

  const services = getFirebaseServices();
  if (services) {
    setupHomeAuth(services);
    setupCommunityAuth(services);
    setupSharedChat(services, {
      autoSignIn: !document.getElementById("loginSection")
    });
    setupCommunityPosts(services);
    setupCommunityActions();
  } else {
    setupCommunityActions();
  }
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.shareVideo = shareVideo;
  window.shareSchedule = shareSchedule;
  window.downloadSchedule = downloadSchedule;
  window.setReminder = setReminder;
  window.selectDay = selectDay;
  window.filterShows = filterShows;
  window.filterByCategory = filterByCategory;
  window.sortShows = sortShows;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePageEnhancements);
  } else {
    initializePageEnhancements();
  }
}

/**
 * Export for use in HTML files
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PROGRAMS,
    SHOWS,
    WEEKLY_SCHEDULE,
    FEATURED_SHOWS,
    STREAM_CONFIG,
    FIREBASE_CONFIG,
    getTodaySchedule,
    getShowById,
    getShowsByCategory,
    searchShows,
    getUpcomingPrograms,
    getCurrentShow,
    formatTime,
    parseProgramTime,
    getSelectedSchedule
  };
}
