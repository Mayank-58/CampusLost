import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (email === "" || password === "") {
    setMessage("Please enter email and password.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Save login status
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email.trim().toLowerCase());

      // Go to Home page
      navigate("/");
    } else {
      setMessage(data.message || "Invalid email or password.");
    }
  } catch (error) {
    setMessage("Server connection failed. Please try again.");
  }
};

  return (
    <div style={styles.page}>
      
      {/* Logo */}
      <div style={styles.logoSection}>
        <div style={styles.logoBox}>CL</div>
        <h2 style={styles.logoText}>CampusLost</h2>
      </div>

      {/* Login Box */}
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>

        <p style={styles.subtitle}>
          Login to continue to CampusLost
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <label style={styles.label}>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          {/* Password */}
          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {/* Login Button */}
          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

        {/* Message */}
        {message !== "" && (
          <p style={styles.message}>
            {message}
          </p>
        )}

        {/* Register */}
        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>

        {/* Back Home */}
        <Link to="/" style={styles.homeLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "25px",
  },

  logoBox: {
    width: "42px",
    height: "42px",
    borderRadius: "9px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  logoText: {
    margin: 0,
    color: "#1e40af",
  },

  card: {
    width: "380px",
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },

  title: {
    margin: 0,
    textAlign: "center",
    fontSize: "28px",
    color: "#0f172a",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    marginTop: "15px",
    fontWeight: "600",
    fontSize: "14px",
    color: "#334155",
  },

  input: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    width: "100%",
    marginTop: "25px",
    padding: "12px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  message: {
    textAlign: "center",
    marginTop: "15px",
    color: "#ff0004",
    fontSize: "13px",
  },

  registerText: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "13px",
    color: "#64748b",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
  },

  homeLink: {
    display: "block",
    textAlign: "center",
    marginTop: "15px",
    color: "#475569",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default Login;