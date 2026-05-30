import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import "../components/Auth.css";

function RegisterStep1() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, phone, email, password } = form;

    if (!name || !phone || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.text();

      if (data === "Registered") {
        alert("Registered Successfully ✅");
        navigate("/");
      } else {
        alert("Registration Failed ❌");
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
          <h2>Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button onClick={handleRegister}>Register</button>

          <p 
            style={{ marginTop: "10px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterStep1;