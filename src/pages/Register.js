import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      studentId === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setMessage("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            collegeId: studentId,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Registration successful!");

        setName("");
        setEmail("");
        setStudentId("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage(data.message || "Registration failed.");
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

      {/* Registration Card */}
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>

        <p style={styles.subtitle}>
          Register as a CampusLost student
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <label style={styles.label}>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          {/* Email */}
          <label style={styles.label}>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          {/* Student ID */}
          <label style={styles.label}>Student ID</label>

          <input
            type="text"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={styles.input}
          />

          {/* Password */}
          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {/* Confirm Password */}
          <label style={styles.label}>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />

          {/* Submit */}
          <button type="submit" style={styles.button}>
            Create Account
          </button>

        </form>

        {/* Message */}
        {message !== "" && (
          <p style={styles.message}>
            {message}
          </p>
        )}

        {/* Login */}
        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>

        {/* Home */}
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
    padding: "30px 0",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
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
    width: "400px",
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
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginTop: "13px",
    marginBottom: "7px",
    fontWeight: "600",
    fontSize: "14px",
    color: "#334155",
  },

  input: {
    width: "100%",
    padding: "11px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
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
    color: "#2563eb",
    fontSize: "13px",
  },

  loginText: {
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
    marginTop: "12px",
    color: "#475569",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default Register;