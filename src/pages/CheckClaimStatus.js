import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CheckClaimStatus() {
  const [claimId, setClaimId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (claimId === "" || email === "") {
    setMessage("Please enter Claim ID and registered email.");
    return;
  }

  try {
    setIsChecking(true);
    setMessage("");

    const response = await fetch(
      `http://localhost:5000/api/claims/${encodeURIComponent(
        claimId.trim()
      )}?email=${encodeURIComponent(
        email.trim().toLowerCase()
      )}`
    );

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem(
        "claimEmail",
        email.trim().toLowerCase()
      );

      navigate(
        `/claim-status/${encodeURIComponent(data.claimId)}`
      );
    } else {
      setMessage(
        data.message ||
          "Claim not found. Please check your Claim ID and email."
      );
    }
  } catch (error) {
    setMessage("Server connection failed. Please try again.");
  } finally {
    setIsChecking(false);
  }
};

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <div style={styles.headerLinks}>
          <Link to="/find-item" style={styles.headerLink}>
            Find Items
          </Link>

          <Link to="/report-lost" style={styles.headerLink}>
            Report Lost
          </Link>

          <Link to="/" style={styles.headerLink}>
            Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>

        <div style={styles.headingSection}>
          <h1 style={styles.title}>
            Check Claim Status
          </h1>

          <p style={styles.subtitle}>
            Enter your Claim ID and registered email to check the
            current status of your claim.
          </p>
        </div>

        <div style={styles.card}>

          <form onSubmit={handleSubmit}>

            <div style={styles.infoBox}>
              <h3>Where can I find my Claim ID?</h3>

              <p>
                Your Claim ID is provided after successfully submitting
                an ownership claim.
              </p>

              <p>
                Example: <strong>CLM-1001</strong>
              </p>
            </div>

            {/* Claim ID */}
            <div style={styles.field}>
              <label style={styles.label}>
                Claim ID
              </label>

              <input
                type="text"
                placeholder="Example: CLM-1001"
                value={claimId}
                onChange={(e) => setClaimId(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Email */}
            <div style={styles.field}>
              <label style={styles.label}>
                Registered Email
              </label>

              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <button
              type="submit"
              style={styles.button}
              disabled={isChecking}
            >
              {isChecking ? "Checking..." : "Check Status"}
            </button>

            {message !== "" && (
              <div style={styles.errorMessage}>
                {message}
              </div>
            )}

          </form>

          <div style={styles.bottomText}>
            <span>Looking for a lost item?</span>

            <Link
              to="/find-item"
              style={styles.findLink}
            >
              Search Found Items
            </Link>
          </div>

        </div>

      </main>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
  },

  header: {
    height: "70px",
    padding: "0 8%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#1e40af",
    fontSize: "20px",
    fontWeight: "bold",
  },

  logoBox: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },

  headerLinks: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  headerLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  main: {
    maxWidth: "650px",
    margin: "0 auto",
    padding: "65px 20px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    margin: 0,
    fontSize: "34px",
    color: "#0f172a",
  },

  subtitle: {
    maxWidth: "550px",
    margin: "10px auto 0",
    color: "#64748b",
    lineHeight: "1.6",
    fontSize: "14px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },

  infoBox: {
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
    padding: "18px",
    borderRadius: "8px",
    marginBottom: "25px",
  },

  field: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },

  input: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
  },

  button: {
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },

  errorMessage: {
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    borderRadius: "7px",
    fontSize: "13px",
    textAlign: "center",
  },

  bottomText: {
    marginTop: "25px",
    paddingTop: "20px",
    borderTop: "1px solid #e2e8f0",
    textAlign: "center",
    fontSize: "13px",
    color: "#64748b",
  },

  findLink: {
    marginLeft: "5px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default CheckClaimStatus;