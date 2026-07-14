# BWE TV

A modern, responsive web platform for BWE TV Live streaming and community engagement.

## Features

- 📺 **Live Streaming** - Watch BWE TV live feeds
- 📅 **Schedule** - View daily programming schedule
- 🎬 **Shows** - Browse all available shows
- 👥 **Community** - Connect with viewers and join discussions
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Built with Tailwind CSS

## Pages

- **index.html** - Home page with live player
- **schedule.html** - Daily TV schedule and programming
- **shows.html** - Show catalog and details
- **community.html** - Community features and engagement
- **live-chat.html** - Dedicated live chat experience
- **about.html / privacy.html / contact.html** - Supporting information pages

## Technologies Used

- HTML5
- Tailwind CSS 2.2.19
- Video.js 7.20.3
- Responsive Design

## Project Structure

```
bwetv/
├── README.md
├── index.html
├── schedule.html
├── shows.html
├── community.html
├── .gitignore
└── video/ (media files)
```

## Getting Started

1. Clone the repository
2. Run `npm start` if you want to launch the Socket.io chat server locally
3. Open any `.html` file in your web browser
4. Navigate using the menu to explore all pages

## Live Streaming Setup

To connect your streaming server:
1. Replace `http://yourserverip:8080/live/streamkey.m3u8` with your actual stream URL
2. Update in `index.html` and `schedule.html`

## Chat & Firebase Notes

- The shared live chat UI expects Firebase Authentication and Realtime Database access.
- Protect production chat data with Firebase Security Rules so only allowed users can write and read the collections/paths you expose.

## License

© 2026 BWE TV - All rights reserved
