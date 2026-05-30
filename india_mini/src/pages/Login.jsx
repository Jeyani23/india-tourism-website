import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import "../components/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.text();

      if (data === "Success") {
        alert("Login Successful ✅");
        navigate("/home");  // go to Home page
      } else {
        alert("Invalid Credentials ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <>
      <AnimatedBackground />

      <div className="auth-container">
        <div className="card">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          <p 
            style={{ marginTop: "10px", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;