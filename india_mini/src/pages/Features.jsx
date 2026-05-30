import React from "react";
import { useNavigate } from "react-router-dom";
import currency from "../assets/currency.jpg";

const Features = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Visitor Support Features</h2>

      <img
        src={currency}
        alt="Currency Converter"
        onClick={() => navigate("/visitor-support")}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
          border: "5px solid #138808",
          marginTop: "30px",
          transition: "0.3s"
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Click to Open Visitor Support Module
      </p>
    </div>
  );
};

export default Features;