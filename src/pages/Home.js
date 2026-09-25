import { Link } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.page}>

      {/* Navbar */}
      <header style={styles.header}>
        <div style={styles.navbar}>

          <Link to="/" style={styles.logoLink}>
            <div style={styles.logoBox}>CL</div>

            <div>
              <h2 style={styles.logoTitle}>CampusLost</h2>
              <p style={styles.logoSubtitle}>
                Campus Lost & Found Management System
              </p>
            </div>
          </Link>

          <nav style={styles.navLinks}>

            <Link to="/" style={styles.navLink}>
              Home
            </Link>

            <Link to="/find-item" style={styles.navLink}>
              Find Item
            </Link>

            <Link to="/report-lost" style={styles.navLink}>
              Report Lost
            </Link>

            <Link to="/report-found" style={styles.navLink}>
              Report Found
            </Link>

            <Link to="/check-claim-status" style={styles.navLink}>
              Claim Status
            </Link>

            <Link to="/contact" style={styles.navLink}>
              Contact
            </Link>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                style={styles.logoutButton}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" style={styles.loginButton}>
                Login
              </Link>
            )}

          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>

        <div style={styles.heroContainer}>

          <div style={styles.heroContent}>

            <p style={styles.heroLabel}>
              CAMPUS LOST & FOUND
            </p>

            <h1 style={styles.heroTitle}>
              Lost something on campus?
              <br />
              <span style={styles.highlight}>
                We can help you find it.
              </span>
            </h1>

            <p style={styles.heroDescription}>
              CampusLost makes it easier for students to report lost and
              found belongings, search for matching items, and securely
              verify ownership before an item is returned.
            </p>

            <div style={styles.heroButtons}>

              <Link
                to="/find-item"
                style={styles.primaryButton}
              >
                Find My Item
              </Link>

              <Link
                to="/report-lost"
                style={styles.secondaryButton}
              >
                Report Lost Item
              </Link>

              <Link
                to="/report-found"
                style={styles.outlineButton}
              >
                Report Found Item
              </Link>

            </div>

            <div style={styles.statusLinkArea}>
              <span style={styles.statusText}>
                Already submitted a claim?
              </span>

              <Link
                to="/check-claim-status"
                style={styles.statusLink}
              >
                Check Claim Status
              </Link>
            </div>

          </div>

          {/* Hero Card */}
          <div style={styles.heroCard}>

            <div style={styles.cardHeader}>
              <p style={styles.cardSmallTitle}>
                HOW IT WORKS
              </p>

              <h2 style={styles.cardTitle}>
                Find. Verify. Return.
              </h2>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>01</div>

              <div>
                <h3 style={styles.stepTitle}>
                  Report
                </h3>

                <p style={styles.stepText}>
                  Report a lost or found item with its details and photo.
                </p>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>02</div>

              <div>
                <h3 style={styles.stepTitle}>
                  Search
                </h3>

                <p style={styles.stepText}>
                  Search reported found items using categories and locations.
                </p>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>03</div>

              <div>
                <h3 style={styles.stepTitle}>
                  Verify
                </h3>

                <p style={styles.stepText}>
                  Submit ownership information and proof for verification.
                </p>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>04</div>

              <div>
                <h3 style={styles.stepTitle}>
                  Return
                </h3>

                <p style={styles.stepText}>
                  Once approved, collect your item from the designated desk.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>

        <div style={styles.sectionHeading}>
          <p style={styles.sectionLabel}>
            PLATFORM FEATURES
          </p>

          <h2 style={styles.sectionTitle}>
            Everything you need to recover lost belongings
          </h2>

          <p style={styles.sectionDescription}>
            CampusLost provides a simple and secure workflow for the entire
            lost and found process.
          </p>
        </div>

        <div style={styles.featureGrid}>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Easy Item Reporting
            </h3>

            <p style={styles.featureText}>
              Report lost or found belongings with category, location,
              date, description and supporting photos.
            </p>

            <Link
              to="/report-found"
              style={styles.featureLink}
            >
              Report Found Item
            </Link>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Smart Search
            </h3>

            <p style={styles.featureText}>
              Search reported found items using item name, category and
              campus location.
            </p>

            <Link
              to="/find-item"
              style={styles.featureLink}
            >
              Search Items
            </Link>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Ownership Verification
            </h3>

            <p style={styles.featureText}>
              Submit identifying details and ownership proof before
              requesting an item.
            </p>

            <Link
              to="/check-claim-status"
              style={styles.featureLink}
            >
              Check Claim
            </Link>
          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>

        <div style={styles.ctaContainer}>

          <div>
            <p style={styles.ctaLabel}>
              LOST SOMETHING?
            </p>

            <h2 style={styles.ctaTitle}>
              Start searching for your item today.
            </h2>

            <p style={styles.ctaText}>
              Search through items reported by students across campus.
            </p>
          </div>

          <Link
            to="/find-item"
            style={styles.ctaButton}
          >
            Find My Item
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer style={styles.footer}>

        <div style={styles.footerContainer}>

          <div>
            <div style={styles.footerLogo}>
              <div style={styles.footerLogoBox}>CL</div>

              <span>CampusLost</span>
            </div>

            <p style={styles.footerDescription}>
              Campus Lost & Found Management System
            </p>
          </div>

          <div style={styles.footerLinks}>

            <Link to="/" style={styles.footerLink}>
              Home
            </Link>

            <Link to="/find-item" style={styles.footerLink}>
              Find Item
            </Link>

            <Link to="/report-lost" style={styles.footerLink}>
              Report Lost
            </Link>

            <Link to="/report-found" style={styles.footerLink}>
              Report Found
            </Link>

            <Link to="/contact" style={styles.footerLink}>
              Contact
            </Link>

          </div>

        </div>

        <div style={styles.footerBottom}>
          © 2026 CampusLost. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    color: "#1e293b",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  navbar: {
    maxWidth: "1250px",
    margin: "0 auto",
    minHeight: "72px",
    padding: "0 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    textDecoration: "none",
    color: "#1e40af",
  },

  logoBox: {
    width: "42px",
    height: "42px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderRadius: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },

  logoTitle: {
    margin: 0,
    fontSize: "19px",
  },

  logoSubtitle: {
    margin: "3px 0 0",
    color: "#94a3b8",
    fontSize: "10px",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  navLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "13px",
  },

  loginButton: {
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    padding: "10px 18px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "600",
  },

  logoutButton: {
    color: "#ffffff",
    backgroundColor: "#2563eb",
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    fontFamily: "Arial, sans-serif",
  },

  heroSection: {
    background:
      "linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #ffffff 100%)",
    borderBottom: "1px solid #e2e8f0",
  },

  heroContainer: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "85px 25px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    alignItems: "center",
    gap: "70px",
  },

  heroContent: {
    maxWidth: "700px",
  },

  heroLabel: {
    margin: 0,
    color: "#2563eb",
    fontSize: "12px",
    letterSpacing: "2px",
    fontWeight: "700",
  },

  heroTitle: {
    margin: "15px 0 20px",
    fontSize: "52px",
    lineHeight: "1.12",
    color: "#0f172a",
  },

  highlight: {
    color: "#2563eb",
  },

  heroDescription: {
    margin: 0,
    maxWidth: "650px",
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  heroButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  primaryButton: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "13px 20px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },

  secondaryButton: {
    textDecoration: "none",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "13px 20px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },

  outlineButton: {
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#2563eb",
    border: "1px solid #2563eb",
    padding: "13px 20px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },

  statusLinkArea: {
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    flexWrap: "wrap",
  },

  statusText: {
    color: "#64748b",
    fontSize: "13px",
  },

  statusLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "13px",
  },

  heroCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
    border: "1px solid #e2e8f0",
  },

  cardHeader: {
    paddingBottom: "20px",
    borderBottom: "1px solid #e2e8f0",
    marginBottom: "5px",
  },

  cardSmallTitle: {
    margin: 0,
    color: "#2563eb",
    fontSize: "11px",
    letterSpacing: "1.5px",
    fontWeight: "700",
  },

  cardTitle: {
    margin: "8px 0 0",
    fontSize: "26px",
    color: "#0f172a",
  },

  step: {
    display: "flex",
    gap: "15px",
    padding: "18px 0",
    borderBottom: "1px solid #f1f5f9",
  },

  stepNumber: {
    width: "38px",
    minWidth: "38px",
    height: "38px",
    borderRadius: "8px",
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "700",
  },

  stepTitle: {
    margin: "0 0 5px",
    fontSize: "15px",
    color: "#0f172a",
  },

  stepText: {
    margin: 0,
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.5",
  },

  featuresSection: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "85px 25px",
  },

  sectionHeading: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 45px",
  },

  sectionLabel: {
    margin: 0,
    color: "#2563eb",
    fontSize: "11px",
    letterSpacing: "2px",
    fontWeight: "700",
  },

  sectionTitle: {
    margin: "10px 0",
    fontSize: "34px",
    color: "#0f172a",
  },

  sectionDescription: {
    margin: 0,
    color: "#64748b",
    lineHeight: "1.7",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },

  featureCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 5px 20px rgba(15,23,42,0.04)",
  },

  featureTitle: {
    margin: "0 0 10px",
    fontSize: "20px",
    color: "#0f172a",
  },

  featureText: {
    margin: 0,
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  featureLink: {
    display: "inline-block",
    marginTop: "20px",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
  },

  ctaSection: {
    backgroundColor: "#0f172a",
  },

  ctaContainer: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "55px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },

  ctaLabel: {
    margin: 0,
    color: "#93c5fd",
    fontSize: "11px",
    letterSpacing: "2px",
    fontWeight: "700",
  },

  ctaTitle: {
    margin: "10px 0",
    color: "#ffffff",
    fontSize: "30px",
  },

  ctaText: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "14px",
  },

  ctaButton: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "13px 22px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },

  footer: {
    backgroundColor: "#020617",
    color: "#cbd5e1",
  },

  footerContainer: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "35px 25px",
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
  },

  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    color: "#ffffff",
    fontWeight: "600",
  },

  footerLogoBox: {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
  },

  footerDescription: {
    marginTop: "8px",
    color: "#64748b",
    fontSize: "12px",
  },

  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "18px",
  },

  footerLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "12px",
  },

  footerBottom: {
    borderTop: "1px solid #1e293b",
    padding: "18px 25px",
    textAlign: "center",
    color: "#64748b",
    fontSize: "11px",
  },
};

export default Home;