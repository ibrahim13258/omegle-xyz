import React from 'react';
import { Link } from 'react-router-dom';
import '../style/GlobalConnectionPlatform.css';

function GlobalConnectionPlatform() {
  return (
    <div className="global-platform-container">
      <header className="global-platform-header">
        <Link to="/" className="logo">
          <span className="logo-icon">🌐</span>
          <span className="logo-text">omegle.com</span>
        </Link>
        <p className="tagline">Talk to strangers!</p>
      </header>

      <main className="global-platform-content">
        <section className="hero-section">
          <h1>🌍 The Global Connection Platform — Where the World Meets You! 🌐💬</h1>
          <p className="hero-description">
            In a time when the internet often feels divided, Omegle Web stands for something simple yet powerful — connection. It brings together strangers from every corner of the planet, creating a shared space where conversation crosses all borders, languages, and cultures. 🌏✨
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">1</div>
          <h2>🌎 One World, One Chat</h2>
          <p>
            Imagine talking to someone in Japan, Brazil, or Kenya — all from your phone or laptop. Omegle Web breaks distance and difference with a single click. No passport, no travel costs, just instant communication with real people from across the world. 🌐💬
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">2</div>
          <h2>🤝 Strangers Today, Friends Tomorrow</h2>
          <p>
            Every chat begins as a mystery — you never know who's on the other side. But that's the beauty of it. Some of the best friendships, ideas, and collaborations start from unexpected conversations. Omegle Web makes that possible again. 💚
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">3</div>
          <h2>🗣️ Real Conversations, Real People</h2>
          <p>
            Unlike typical social platforms full of filters and algorithms, Omegle Web is raw and human. No likes, no followers, no status — just two people talking, sharing, learning, and laughing. That simplicity makes every interaction genuine. 🎙️💭
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">4</div>
          <h2>🌏 A Truly Global Network</h2>
          <p>
            People from over 150+ countries use platforms like this every day. From students practicing English to travelers sharing experiences, Omegle Web becomes a microcosm of the real world — full of voices, ideas, and perspectives. 🌈
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">5</div>
          <h2>💡 Discover, Don't Scroll</h2>
          <p>
            Social media often traps users in repetition. Omegle Web frees you from that. Every click connects you to someone new, someone unpredictable — and that unpredictability keeps it exciting. 🚀
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">6</div>
          <h2>🛡️ Safe, Modern, and Respectful</h2>
          <p>
            The original Omegle opened the door to global chat — but the new version builds it stronger. With AI moderation, community rules, and privacy-first design, Omegle Web ensures your experience is smooth, secure, and positive. 🧠🔒
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">7</div>
          <h2>📱 No Barriers, No Apps</h2>
          <p>
            You don't need to install anything or sign up. It runs directly in your browser, optimized for both mobile and desktop. Just open, allow camera and mic, and the world is at your fingertips. 💻📱
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">8</div>
          <h2>🎯 Perfect for Everyone</h2>
          <p>
            Students learning languages, creators finding inspiration, or anyone just looking for a fun talk — Omegle Web fits all. Whether it's a deep conversation or a quick hello, there's always something new to experience. 💬🌍
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">9</div>
          <h2>💬 Beyond Small Talk</h2>
          <p>
            This isn't just chatting — it's discovering global stories. Learn how others live, think, and dream. Each stranger represents a world you've never seen before. That's the real power of global connection. 🌌
          </p>
        </section>

        <section className="feature-section">
          <div className="feature-number">10</div>
          <h2>🔮 The Evolution of Omegle</h2>
          <p>
            Omegle started a revolution in online communication. Omegle Web continues it — with smarter tech, safer systems, and stronger values. It's not about nostalgia; it's about building a better, more connected world for the future. ⚙️🌟
          </p>
        </section>

        <section className="summary-section">
          <h2>In short:</h2>
          <p className="summary-text">
            Omegle Web is not just another chat site — it's the Global Connection Platform for the new generation. Fast, secure, and human at its core, it lets you meet the world in real time.
          </p>
          <p className="summary-cta">
            Start chatting. Start connecting. Start exploring. 🌐💬❤️
          </p>
          <Link to="/" className="cta-button">Start Connecting Now</Link>
        </section>
      </main>

      <footer className="global-platform-footer">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>&copy; 2024 Omegle Web. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default GlobalConnectionPlatform;
