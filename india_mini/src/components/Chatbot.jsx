import { useState, useEffect, useRef } from "react";
import { KB, FAQ_SUGGESTIONS } from "../data/chatbotData";

// ── helpers ──────────────────────────────────────────────────

// Category colour mapping
const CAT_COLORS = {
  Language: "#3b82f6",
  Culture:  "#8b5cf6",
  Food:     "#f97316",
  History:  "#ef4444",
  Travel:   "#10b981",
};

/**
 * findAnswer: scan KB for first entry whose keywords[] all contain
 * at least one word from the user's input (case-insensitive).
 * Falls back to partial keyword matching for single-keyword entries.
 */
function findAnswer(input) {
  const lower = input.toLowerCase().trim();

  // Try exact keyword-phrase match first
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) {
        return { answer: entry.answer, category: entry.category };
      }
    }
  }

  // Broader single-word match
  const words = lower.split(/\s+/).filter(w => w.length > 2);
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      const kwWords = kw.split(/\s+/);
      if (kwWords.some(kww => words.some(w => w.includes(kww) || kww.includes(w)))) {
        return { answer: entry.answer, category: entry.category };
      }
    }
  }

  return null;
}

const FALLBACK_MESSAGES = [
  "Hmm, I'm not sure about that! Try asking about India's food, culture, history, travel tips, or languages. 😊",
  "I didn't quite catch that. You can ask things like 'Best time to visit India?' or 'Famous Indian dishes?' 🇮🇳",
  "That's outside my knowledge for now. Try the FAQ suggestions below for popular questions about India!",
];

let fallbackIdx = 0;

// ── Component ─────────────────────────────────────────────────

export default function Chatbot({ isDark }) {
  const [messages, setMessages]     = useState([
    {
      id: 1,
      from: "bot",
      text: "Namaste! 🙏 I'm your India Tourism assistant. Ask me anything about India — food, culture, history, travel tips, and more!",
      category: null,
      ts: new Date(),
    },
  ]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef(null);
  const inputRef              = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;

    // Add user message
    const userMsg = { id: Date.now(), from: "user", text: trimmed, ts: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const result = findAnswer(trimmed);
      const botText  = result
        ? result.answer
        : FALLBACK_MESSAGES[fallbackIdx++ % FALLBACK_MESSAGES.length];
      const botMsg = {
        id: Date.now() + 1,
        from: "bot",
        text: botText,
        category: result?.category ?? null,
        ts: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  const clearChat = () => {
    setMessages([{
      id: Date.now(),
      from: "bot",
      text: "Chat cleared! Ask me anything about India. 🇮🇳",
      category: null,
      ts: new Date(),
    }]);
  };

  const fmtTime = (d) =>
    d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="cb-wrapper">
      {/* Header */}
      <div className="section-header">
        <span className="section-icon">💬</span>
        <div>
          <h2 className="section-title">Ask About India</h2>
          <p className="section-sub">Rule-based chatbot — 55+ questions answered</p>
        </div>
        <button className="cb-clear-btn" onClick={clearChat} title="Clear chat">
          🗑 Clear
        </button>
      </div>

      <div className="cb-card">
        {/* FAQ suggestion chips */}
        <div className="cb-suggestions">
          <span className="cb-sug-label">Try asking:</span>
          {FAQ_SUGGESTIONS.map((q) => (
            <button
              key={q}
              className="cb-chip"
              onClick={() => sendMessage(q)}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message area */}
        <div className="cb-messages" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`cb-msg-row ${msg.from === "user" ? "cb-row-user" : "cb-row-bot"}`}
            >
              {msg.from === "bot" && (
                <div className="cb-avatar">🇮🇳</div>
              )}
              <div className={`cb-bubble ${msg.from === "user" ? "cb-bubble-user" : "cb-bubble-bot"}`}>
                {msg.category && (
                  <span
                    className="cb-category"
                    style={{ background: CAT_COLORS[msg.category] + "22", color: CAT_COLORS[msg.category] }}
                  >
                    {msg.category}
                  </span>
                )}
                <p className="cb-text">{msg.text}</p>
                <span className="cb-time">{fmtTime(msg.ts)}</span>
              </div>
              {msg.from === "user" && (
                <div className="cb-avatar cb-avatar-user">👤</div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="cb-msg-row cb-row-bot">
              <div className="cb-avatar">🇮🇳</div>
              <div className="cb-bubble cb-bubble-bot cb-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input row */}
        <form
          className="cb-input-row"
          onSubmit={e => { e.preventDefault(); sendMessage(); }}
        >
          <input
            ref={inputRef}
            type="text"
            className="cb-input"
            placeholder="Ask about India's food, history, travel…"
            value={input}
            onChange={e => setInput(e.target.value)}
            aria-label="Chat input"
            maxLength={200}
          />
          <button
            type="submit"
            className="cb-send"
            disabled={!input.trim() || typing}
            aria-label="Send message"
          >
            ➤
          </button>
        </form>
      </div>
    </section>
  );
}
