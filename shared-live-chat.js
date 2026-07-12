(function () {
  const DEFAULT_CHAT_PATH = "chat";
  const DEFAULT_MAX_LENGTH = 300;
  const DEFAULT_LIMIT = 100;
  const NEAR_BOTTOM_THRESHOLD = 80;

  function formatTime(ts) {
    const d = new Date(ts || Date.now());
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function getChatUser(auth) {
    if (!auth || !auth.currentUser) return "guest";
    return auth.currentUser.email || "guest";
  }

  function isNearBottom(el) {
    return el.scrollHeight - el.scrollTop - el.clientHeight < NEAR_BOTTOM_THRESHOLD;
  }

  function initLiveChat(options) {
    const chatContainer = document.getElementById(options.chatContainerId || "chatContainer");
    const chatInput = document.getElementById(options.chatInputId || "chatInput");
    const chatBtn = document.getElementById(options.chatBtnId || "chatBtn");
    const chatStatus = document.getElementById(options.chatStatusId || "chatStatus");
    const charCount = options.charCountId ? document.getElementById(options.charCountId) : null;
    const newMsgBtn = options.newMsgBtnId ? document.getElementById(options.newMsgBtnId) : null;
    const rtdb = options.rtdb;
    const auth = options.auth;
    const maxLength = options.maxLength || DEFAULT_MAX_LENGTH;
    const chatPath = options.chatPath || DEFAULT_CHAT_PATH;
    const limit = options.limit || DEFAULT_LIMIT;

    if (!chatContainer || !chatInput || !chatBtn || !rtdb) {
      console.error("Live chat initialization failed: missing required elements or database instance.");
      return null;
    }

    const renderedMessageIds = new Set();
    const connectedRef = rtdb.ref(".info/connected");
    const messagesRef = rtdb.ref(chatPath).limitToLast(limit);

    function setStatus(text) {
      if (chatStatus) chatStatus.textContent = text;
    }

    // Removes most ASCII control characters while keeping tab/newline/carriage return.
    function normalizeMessage(text) {
      return text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
    }

    function scrollToBottom() {
      chatContainer.scrollTop = chatContainer.scrollHeight;
      if (newMsgBtn) newMsgBtn.classList.add("hidden");
    }

    function validateChatInput() {
      const value = chatInput.value;
      const trimmed = value.trim();
      if (charCount) charCount.textContent = `${value.length}/${maxLength}`;
      chatBtn.disabled = !trimmed || trimmed.length > maxLength;
    }

    function renderMessage(message, messageId) {
      if (renderedMessageIds.has(messageId)) return;
      renderedMessageIds.add(messageId);

      const nearBottom = isNearBottom(chatContainer);
      const isMe = getChatUser(auth) === (message.user || "guest");

      const row = document.createElement("div");
      row.className = `mb-2 flex ${isMe ? "justify-end" : "justify-start"}`;

      const bubble = document.createElement("div");
      bubble.className = `max-w-[85%] p-2 rounded shadow-sm border ${
        isMe ? "bg-blue-600 text-white border-blue-700" : "bg-white text-black border-gray-200"
      }`;

      const meta = document.createElement("div");
      meta.className = `text-[11px] mb-1 ${isMe ? "text-blue-100" : "text-gray-500"}`;
      meta.textContent = `${message.user || "guest"} • ${formatTime(message.timestamp)}`;

      const body = document.createElement("div");
      body.className = "text-sm whitespace-pre-wrap break-words";
      body.textContent = message.text || "";

      bubble.appendChild(meta);
      bubble.appendChild(body);
      row.appendChild(bubble);
      chatContainer.appendChild(row);

      if (nearBottom) {
        scrollToBottom();
      } else if (newMsgBtn) {
        newMsgBtn.classList.remove("hidden");
      }
    }

    function sendMessage() {
      const msg = normalizeMessage(chatInput.value);
      if (!msg || msg.length > maxLength) return;

      chatBtn.disabled = true;
      setStatus("Sending...");

      rtdb.ref(chatPath).push({
        text: msg,
        user: getChatUser(auth),
        timestamp: Date.now()
      })
        .then(() => {
          chatInput.value = "";
          validateChatInput();
          setStatus("Connected");
        })
        .catch((err) => {
          console.error("Chat send error:", err);
          setStatus("Send failed. Please try again.");
        })
        .finally(validateChatInput);
    }

    chatInput.addEventListener("input", validateChatInput);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (!chatBtn.disabled) sendMessage();
      }
    });
    chatBtn.addEventListener("click", sendMessage);
    if (newMsgBtn) newMsgBtn.addEventListener("click", scrollToBottom);

    connectedRef.on("value", (snap) => {
      setStatus(snap.val() ? "Connected" : "Reconnecting...");
    });

    messagesRef.on("child_added", (snapshot) => {
      renderMessage(snapshot.val() || {}, snapshot.key);
    });

    validateChatInput();

    const destroy = () => {
      connectedRef.off();
      messagesRef.off();
    };
    window.addEventListener("beforeunload", destroy, { once: true });

    return { destroy, sendMessage };
  }

  window.BWELiveChat = { init: initLiveChat };
})();
