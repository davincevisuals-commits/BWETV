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

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get today's schedule
 */
function getTodaySchedule() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return WEEKLY_SCHEDULE[days[today]] || [];
}

/**
 * Get a specific show by ID
 */
function getShowById(id) {
  return SHOWS.find(show => show.id === id);
}

/**
 * Get shows by category
 */
function getShowsByCategory(category) {
  return SHOWS.filter(show => show.category === category);
}

/**
 * Search shows
 */
function searchShows(query) {
  const lower = query.toLowerCase();
  return SHOWS.filter(show => 
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
  
  schedule.forEach(program => {
    const [time] = program.time.split(' ');
    const [hours_str, mins] = time.split(':');
    const isPM = program.time.includes('PM');
    let hour = parseInt(hours_str);
    
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
    
    const programTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, parseInt(mins));
    
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
  
  for (let program of schedule) {
    const [time] = program.time.split(' ');
    const [hours_str, mins] = time.split(':');
    const isPM = program.time.includes('PM');
    let hour = parseInt(hours_str);
    
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
    
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, parseInt(mins));
    const duration = parseInt(program.duration);
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
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

/**
 * Export for use in HTML files
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROGRAMS,
    SHOWS,
    WEEKLY_SCHEDULE,
    FEATURED_SHOWS,
    STREAM_CONFIG,
    getTodaySchedule,
    getShowById,
    getShowsByCategory,
    searchShows,
    getUpcomingPrograms,
    getCurrentShow,
    formatTime
  };
}
