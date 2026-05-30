import { useState } from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import Chatbot from "../components/Chatbot";
import "../styles.css";

export default function VisitorSupportModule() {
  const [isDark, setIsDark] = useState(true);
  const [tab, setTab] = useState("both");

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      {/* Background */}
      <div className="bg-decor">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="pattern-grid" />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="nav-flag">🇮🇳</span>
          <div>
            <span className="nav-brand">India Tourism</span>
            <span className="nav-tagline">Your Travel Companion</span>
          </div>
        </div>

        <div className="nav-tabs">
          {[
            { key: "currency", label: "💱 Currency" },
            { key: "both", label: "⬛ Both" },
            { key: "chat", label: "💬 Chatbot" },
          ].map((t) => (
            <button
              key={t.key}
              className={`nav-tab ${tab === t.key ? "nav-tab-active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero */}
      <header className="hero">
        <p className="hero-namaste"></p>
        <h1 className="hero-title">
          Explore <span className="hero-accent">Echos of Times</span>
        </h1>
        <p className="hero-sub">
          Real-time currency conversion + your personal India tourism chatbot
        </p>
      </header>

      {/* Main */}
      <main className={`main-grid layout-${tab}`}>
        {(tab === "both" || tab === "currency") && (
          <CurrencyConverter isDark={isDark} />
        )}
        {(tab === "both" || tab === "chat") && (
          <Chatbot isDark={isDark} />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>🇮🇳 India Tourism Companion · Built with React</p>
        <p className="footer-note">
          Currency data: open.er-api.com · Chatbot: rule-based
        </p>
        <p>Copyright (c) 2026 International Research Journal on Advanced Engineering and Management (IRJAEM)

Creative Commons License
This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.</p>
      </footer>
    </div>
  );
}