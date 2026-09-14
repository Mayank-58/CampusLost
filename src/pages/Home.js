import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.logoBox}>CL</span>
          <span>CampusLost</span>
        </div>

        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>

          <Link to="/find-item" style={styles.navLink}>
            Find Item
          </Link>

          <Link to="/report-found" style={styles.navLink}>
            Report Found
          </Link>

          <Link to="/report-lost" style={styles.navLink}>
            Report Lost
          </Link>

          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.smallTitle}>CAMPUS LOST & FOUND</p>

          <h1 style={styles.heading}>
            Find What You Lost.
            <br />
            Return What You Found.
          </h1>

          <p style={styles.description}>
            CampusLost helps students report found items, search for lost
            belongings and securely verify ownership before returning them.
          </p>

          <div style={styles.buttonContainer}>
            <Link to="/find-item" style={styles.primaryButton}>
              🔍 Find My Item
            </Link>

            <Link to="/report-found" style={styles.secondaryButton}>
              📦 Report Found Item
            </Link>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.cardIcon}>🔎</div>

          <h3 style={styles.cardTitle}>Lost Something?</h3>

          <p style={styles.cardText}>
            Search reported items around your campus and submit a claim when
            you find a matching item.
          </p>

          <Link to="/find-item" style={styles.cardButton}>
            Search Items →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.howSection}>
        <h2 style={styles.sectionTitle}>How CampusLost Works</h2>

        <p style={styles.sectionText}>
          A simple and secure way to find and return lost belongings.
        </p>

        <div style={styles.steps}>

          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>1</div>
            <h3>Report</h3>
            <p>
              Report a lost or found item with its details and photo.
            </p>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>2</div>
            <h3>Search</h3>
            <p>
              Search the campus database for your lost item.
            </p>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>3</div>
            <h3>Verify</h3>
            <p>
              Submit ownership proof to verify that the item belongs to you.
            </p>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>4</div>
            <h3>Return</h3>
            <p>
              Once verified, safely collect your item.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 CampusLost. Campus Lost & Found Management System.</p>
      </footer>

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

  navbar: {
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 7%",
    borderBottom: "1px solid #e2e8f0",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1e40af",
  },

  logoBox: {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  navLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  loginButton: {
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    padding: "10px 20px",
    borderRadius: "7px",
    fontSize: "14px",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 8%",
    gap: "50px",
  },

  heroContent: {
    maxWidth: "650px",
  },

  smallTitle: {
    color: "#2563eb",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },

  heading: {
    fontSize: "48px",
    lineHeight: "1.15",
    margin: "15px 0",
    color: "#0f172a",
  },

  description: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#64748b",
    maxWidth: "600px",
  },

  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },

  primaryButton: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "13px 22px",
    borderRadius: "7px",
    fontWeight: "bold",
  },

  secondaryButton: {
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#2563eb",
    padding: "13px 22px",
    borderRadius: "7px",
    border: "1px solid #2563eb",
    fontWeight: "bold",
  },

  heroCard: {
    width: "310px",
    padding: "35px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  cardIcon: {
    fontSize: "45px",
    marginBottom: "10px",
  },

  cardTitle: {
    fontSize: "23px",
    marginBottom: "10px",
  },

  cardText: {
    color: "#64748b",
    lineHeight: "1.6",
    fontSize: "14px",
  },

  cardButton: {
    display: "inline-block",
    marginTop: "15px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  },

  howSection: {
    padding: "70px 8%",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  sectionText: {
    color: "#64748b",
    marginBottom: "40px",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },

  stepCard: {
    padding: "25px",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
  },

  stepNumber: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    padding: "25px",
    backgroundColor: "#0f172a",
    color: "#cbd5e1",
    fontSize: "13px",
  },
};

export default Home;