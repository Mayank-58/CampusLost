import React, { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please enter admin email and password.");
      return;
    }

    setMessage("Admin login successful! Authentication will be added later.");
  };

  return (
    <div style={styles.page}>

      {/* Admin Header */}
      <div style={styles.logoSection}>
        <div style={styles.logoBox}>CL</div>

        <div>
          <h2 style={styles.logoText}>CampusLost</h2>
          <p style={styles.adminText}>Administrator Portal</p>
        </div>
      </div>

      {/* Login Card */}
      <div style={styles.card}>

        <div style={styles.iconCircle}>
          
        </div>

        <h1 style={styles.title}>Admin Login</h1>

        <p style={styles.subtitle}>
          Login to access the CampusLost administration panel
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <label style={styles.label}>
            Admin Email
          </label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          {/* Password */}
          <label style={styles.label}>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {/* Login */}
          <button type="submit" style={styles.button}>
            Login as Admin
          </button>

        </form>

        {message !== "" && (
          <p style={styles.message}>
            {message}
          </p>
        )}

        <p style={styles.note}>
          Authorized personnel only.
        </p>

        <a href="/" style={styles.backLink}>
          ← Back
        </a>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "25px",
  },

  logoBox: {
    width: "42px",
    height: "42px",
    borderRadius: "9px",
    backgroundColor: "#111827",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  logoText: {
    margin: 0,
    color: "#111827",
    fontSize: "21px",
  },

  adminText: {
    margin: "3px 0 0",
    color: "#64748b",
    fontSize: "11px",
  },

  card: {
    width: "400px",
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },

  iconCircle: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#e0e7ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    fontSize: "24px",
  },

  title: {
    textAlign: "center",
    margin: 0,
    fontSize: "28px",
    color: "#111827",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.5",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "7px",
    fontWeight: "600",
    fontSize: "14px",
    color: "#374151",
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
    backgroundColor: "#111827",
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

  note: {
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "11px",
    marginTop: "20px",
  },

  backLink: {
    display: "block",
    textAlign: "center",
    marginTop: "15px",
    color: "#475569",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default AdminLogin;