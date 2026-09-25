import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside style={styles.sidebar}>

      {/* Logo */}
      <div>

        <Link to="/admin/dashboard" style={styles.logoLink}>

          <div style={styles.logoBox}>
            CL
          </div>

          <div>
            <h2 style={styles.logoTitle}>
              CampusLost
            </h2>

            <p style={styles.logoSubtitle}>
              Administration
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <nav style={styles.navigation}>

          <p style={styles.menuLabel}>
            MAIN MENU
          </p>

          <Link
            to="/admin/dashboard"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/dashboard")
                ? styles.activeLink
                : {}),
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/admin/found-items"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/found-items")
                ? styles.activeLink
                : {}),
            }}
          >
            Found Items
          </Link>

          <Link
            to="/admin/lost-items"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/lost-items")
                ? styles.activeLink
                : {}),
            }}
          >
            Lost Items
          </Link>

          <Link
            to="/admin/reports"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/reports")
                ? styles.activeLink
                : {}),
            }}
          >
            Reports
          </Link>

          <Link
            to="/admin/claims"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/claims")
                ? styles.activeLink
                : {}),
            }}
          >
            Claims
          </Link>

          <Link
            to="/admin/returned-items"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/returned-items")
                ? styles.activeLink
                : {}),
            }}
          >
            Returned Items
          </Link>

          <Link
            to="/admin/users"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/users")
                ? styles.activeLink
                : {}),
            }}
          >
            Users
          </Link>

          <Link
            to="/admin/feedback"
            style={{
              ...styles.navLink,
              ...(isActive("/admin/feedback")
                ? styles.activeLink
                : {}),
            }}
          >
            Feedback & Enquiries
          </Link>

        </nav>

      </div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>

        <div style={styles.profile}>

          <div style={styles.avatar}>
            A
          </div>

          <div style={styles.profileText}>

            <p style={styles.adminName}>
              Administrator
            </p>

            <p style={styles.adminRole}>
              System Administrator
            </p>

          </div>

        </div>

        <Link
          to="/admin/login"
          style={styles.logoutButton}
        >
          Logout
        </Link>

      </div>

    </aside>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1000,
    boxSizing: "border-box",
    padding: "22px 16px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #1e293b",
    fontFamily: "Arial, sans-serif",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "5px 8px 22px",
    borderBottom: "1px solid #1e293b",
    textDecoration: "none",
    color: "#ffffff",
  },

  logoBox: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
    flexShrink: 0,
  },

  logoTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
  },

  logoSubtitle: {
    margin: "3px 0 0",
    color: "#64748b",
    fontSize: "11px",
  },

  navigation: {
    marginTop: "25px",
  },

  menuLabel: {
    margin: "0 0 10px 10px",
    color: "#64748b",
    fontSize: "10px",
    letterSpacing: "1.5px",
    fontWeight: "700",
  },

  navLink: {
    display: "block",
    textDecoration: "none",
    color: "#cbd5e1",
    padding: "11px 13px",
    marginBottom: "5px",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: "500",
    transition: "0.2s",
  },

  activeLink: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
  },

  bottomSection: {
    borderTop: "1px solid #1e293b",
    paddingTop: "16px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "4px 7px 13px",
  },

  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "700",
    flexShrink: 0,
  },

  profileText: {
    minWidth: 0,
  },

  adminName: {
    margin: 0,
    color: "#f8fafc",
    fontSize: "12px",
    fontWeight: "600",
  },

  adminRole: {
    margin: "3px 0 0",
    color: "#64748b",
    fontSize: "10px",
  },

  logoutButton: {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "#1e293b",
    color: "#cbd5e1",
    padding: "10px",
    borderRadius: "7px",
    fontSize: "12px",
    fontWeight: "600",
  },
};

export default AdminSidebar;