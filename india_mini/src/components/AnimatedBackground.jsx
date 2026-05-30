import { useEffect, useState } from "react";
import "./AnimatedBackground.css";

import m1 from "../assets/tajmahal.jpg";
import m2 from "../assets/meenakshi.jpg";
import m3 from "../assets/ram.jpg";

function AnimatedBackground() {
  const images = [m1, m2, m3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-container">
      {images.map((img, i) => (
        <div
          key={i}
          className={`bg-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
}

export default AnimatedBackground;