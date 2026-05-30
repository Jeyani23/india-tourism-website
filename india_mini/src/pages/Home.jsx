import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

import tajmahal from "../assets/tajmahal.jpg";
import meenakshi from "../assets/meenakshi.jpg";
import thanjavur from "../assets/thanjavur.jpg";
import aiIcon from "../assets/ai.png";
import vrIcon from "../assets/vr.png";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Echoes of Time</div>

        {/* HAMBURGER */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li onClick={() => { navigate("/home"); setMenuOpen(false); }}>Home</li>
          <li onClick={() => { navigate("/explore"); setMenuOpen(false); }}>Explore</li>
          <li onClick={() => { navigate("/ar"); setMenuOpen(false); }}>AR View</li>
          <li onClick={() => { navigate("/map"); setMenuOpen(false); }}>Map</li>
          <li onClick={() => { navigate("/features"); setMenuOpen(false); }}>Features</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Explore India Like Never Before</h1>
          <p>Experience history with AI, AR & smart tourism</p>
          <button onClick={() => navigate("/explore")}>
            Start Your Journey
          </button>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section">
        <h2>Top Destinations</h2>

        <div className="card-container">
          <div className="card">
            <img src={tajmahal} alt="Taj Mahal" />
            <h3>Taj Mahal</h3>
          </div>

          <div className="card">
            <img src={meenakshi} alt="Meenakshi Temple" />
            <h3>Meenakshi Temple</h3>
          </div>

          <div className="card">
            <img src={thanjavur} alt="Thanjavur Temple" />
            <h3>Brihadeeswara Temple</h3>
          </div>
        </div>
      </section>

      {/* PARALLAX */}
      <section className="parallax">
        <h2>Discover the Story Behind Every Monument</h2>
      </section>

      {/* FEATURES */}
      <section className="section features">
        <h2>Smart Features</h2>

        <div className="features-grid">
          <div className="feature-box">
            <h3>AR View</h3>
            <p>Experience monuments in 3D using Augmented Reality</p>
          </div>

          <div className="feature-box">
            <h3>AI Guide</h3>
            <p>Upload photos and get instant historical insights</p>
          </div>

          <div className="feature-box">
            <h3>Interactive Map</h3>
            <p>Explore locations across India easily</p>
          </div>
        </div>
      </section>
<button>

<img
  src={vrIcon} // Change this to your VR icon
  alt="VR Icon"
  onClick={() => navigate("/vrview")} // This matches the route in Step 3
  style={{
    position: "fixed",
    bottom: "100px", // Put it above your AI icon so they don't overlap
    right: "25px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    zIndex: 9999
  }}
/>

  <img
  src={aiIcon}
  alt="AI Icon"
  onClick={() => navigate("/aiguide")}
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    zIndex: 9999
  }}
/>
</button>
      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Echoes of Time | Digital Tourism Platform</p>
        <p>Copyright (c) 2026 International Research Journal on Advanced Engineering and Management (IRJAEM)
Creative Commons License
This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.</p>
      </footer>

    </div>
  );
}

export default Home;