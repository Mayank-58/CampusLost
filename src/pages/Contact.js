import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      setSuccessMessage("Please fill all the required fields.");
      return;
    }

    setSuccessMessage(
      "Your message has been submitted successfully. The help desk will review it."
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
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
          <Link to="/" style={styles.headerLink}>
            Home
          </Link>

          <Link to="/find-item" style={styles.headerLink}>
            Find Items
          </Link>

          <Link to="/check-claim-status" style={styles.headerLink}>
            Claim Status
          </Link>

          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>

        <div style={styles.headingSection}>
          <h1 style={styles.title}>Contact & Help Desk</h1>

          <p style={styles.subtitle}>
            Need help with a lost item, found item, claim or verification?
            Send us a message and our team will review it.
          </p>
        </div>

        <div style={styles.grid}>

          {/* Contact Information */}
          <div style={styles.infoCard}>

            <h2 style={styles.cardTitle}>CampusLost Help Desk</h2>

            <p style={styles.cardText}>
              For any issue related to lost and found items, claim
              verification or item collection, contact the campus
              help desk.
            </p>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Email</p>
              <p style={styles.infoValue}>
                campuslost@college.edu
              </p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Contact</p>
              <p style={styles.infoValue}>
                +91 98765 43210
              </p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Help Desk Location</p>
              <p style={styles.infoValue}>
                College Administrative Office
              </p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Working Hours</p>
              <p style={styles.infoValue}>
                Monday - Friday, 10:00 AM - 4:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div style={styles.formCard}>

            <h2 style={styles.cardTitle}>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Email Address *
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Subject *
                </label>

                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={styles.input}
                >
                  <option value="">Select Subject</option>
                  <option value="Lost Item">
                    Lost Item
                  </option>
                  <option value="Found Item">
                    Found Item
                  </option>
                  <option value="Claim Verification">
                    Claim Verification
                  </option>
                  <option value="Item Collection">
                    Item Collection
                  </option>
                  <option value="Technical Issue">
                    Technical Issue
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Message *
                </label>

                <textarea
                  rows="6"
                  placeholder="Describe your issue or enquiry"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={styles.textarea}
                ></textarea>
              </div>

              <button
                type="submit"
                style={styles.button}
              >
                Submit Message
              </button>

              {successMessage !== "" && (
                <div style={styles.message}>
                  {successMessage}
                </div>
              )}

            </form>

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
    gap: "20px",
  },

  headerLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  loginButton: {
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
  },

  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "55px 20px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    margin: 0,
    fontSize: "36px",
    color: "#0f172a",
  },

  subtitle: {
    maxWidth: "700px",
    margin: "12px auto 0",
    color: "#64748b",
    lineHeight: "1.6",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "25px",
  },

  infoCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.05)",
    height: "fit-content",
  },

  formCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    marginTop: 0,
    fontSize: "21px",
    color: "#0f172a",
  },

  cardText: {
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  infoBlock: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },

  infoLabel: {
    margin: 0,
    fontSize: "12px",
    color: "#64748b",
  },

  infoValue: {
    margin: "5px 0 0",
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
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
    backgroundColor: "#ffffff",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
  },

  button: {
    width: "100%",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "13px",
    borderRadius: "7px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },

  message: {
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
    color: "#1d4ed8",
    borderRadius: "7px",
    fontSize: "13px",
    textAlign: "center",
  },
};

export default Contact;