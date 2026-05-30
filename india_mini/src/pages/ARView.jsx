import React from "react";
import { useNavigate } from "react-router-dom";
import tajImg from "../assets/tajmahal.jpg";
import ramImg from "../assets/ram.jpg";
import lotusImg from "../assets/lotus.jpg";
import charmiImg from "../assets/charmi.jpg";
import ingateImg from "../assets/ingate.jpg";
import gateinImg from "../assets/gatein.jpg";
import suntempImg from "../assets/suntemp.jpg";

function ARView() {
  const navigate = useNavigate();

  // Reusable style for the images
  const imageStyle = {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
  };

  const monuments = [
    { name: "Taj Mahal", img: tajImg, path: "/ar/tajmahal" },
    { name: "Ram Mandir", img: ramImg, path: "/ar/ram" },
    { name: "India Gate", img: ingateImg, path: "/ar/ingate" },
    { name: "Gateway of India", img: gateinImg, path: "/ar/gatein" },
    { name: "Charminar", img: charmiImg, path: "/ar/charmi" },
    { name: "Lotus Temple", img: lotusImg, path: "/ar/lotus" },
    { name: "Sun Temple", img: suntempImg, path: "/ar/suntemp" },
  ];

  return (
    <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "40px" }}>Select Monument for AR View</h1>

      {/* Grid container to organize images neatly */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        justifyItems: "center"
      }}>
        {monuments.map((m, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={m.img}
              alt={m.name}
              style={imageStyle}
              onClick={() => navigate(m.path)}
              // Simple hover effect
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "1.2rem" }}>
              {m.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ARView;