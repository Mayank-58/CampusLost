import React from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminDashboard() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Dashboard</h1>
            <p style={styles.subtitle}>
              Welcome back, Administrator.
            </p>
          </div>

          <button style={styles.notificationButton}>
            Notifications
          </button>
        </div>

        <div style={styles.statsGrid}>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Total Users</p>
            <h2 style={styles.statNumber}>250</h2>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Lost Items</p>
            <h2 style={styles.statNumber}>82</h2>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Found Items</p>
            <h2 style={styles.statNumber}>64</h2>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Returned Items</p>
            <h2 style={styles.statNumber}>41</h2>
          </div>

        </div>

        <div style={styles.contentGrid}>

          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2>Pending Reports</h2>
              <span style={styles.countBadge}>12</span>
            </div>

            <div style={styles.row}>
              <div>
                <strong>Black Wallet</strong>
                <p>Found near Library</p>
              </div>

              <span style={styles.pendingBadge}>Pending</span>
            </div>

            <div style={styles.row}>
              <div>
                <strong>Wireless Earbuds</strong>
                <p>Found near Canteen</p>
              </div>

              <span style={styles.pendingBadge}>Pending</span>
            </div>

            <div style={styles.row}>
              <div>
                <strong>College ID Card</strong>
                <p>Found near Classroom</p>
              </div>

              <span style={styles.pendingBadge}>Pending</span>
            </div>
          </div>

          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2>Pending Claims</h2>
              <span style={styles.countBadge}>7</span>
            </div>

            <div style={styles.claimBox}>
              <p style={styles.claimId}>Claim CLM-1001</p>
              <strong>Black Wallet</strong>
              <p style={styles.claimUser}>Claimed by Rahul</p>

              <button style={styles.reviewButton}>
                Review Claim
              </button>
            </div>

            <div style={styles.claimBox}>
              <p style={styles.claimId}>Claim CLM-1002</p>
              <strong>Wireless Earbuds</strong>
              <p style={styles.claimUser}>Claimed by Priya</p>

              <button style={styles.reviewButton}>
                Review Claim
              </button>
            </div>
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
  },

  main: {
    marginLeft: "250px",
    padding: "30px",
    minHeight: "100vh",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  title: {
    margin: 0,
    fontSize: "30px",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: "6px",
    color: "#64748b",
  },

  notificationButton: {
    border: "1px solid #e2e8f0",
    backgroundColor: "#ffffff",
    padding: "10px 16px",
    borderRadius: "7px",
    color: "#334155",
    cursor: "pointer",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  statLabel: {
    margin: 0,
    color: "#64748b",
    fontSize: "14px",
  },

  statNumber: {
    margin: "10px 0 0",
    fontSize: "28px",
    color: "#0f172a",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
  },

  panel: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  panelHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },

  countBadge: {
    padding: "4px 10px",
    borderRadius: "20px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: "600",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #e2e8f0",
  },

  pendingBadge: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  claimBox: {
    padding: "15px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    marginBottom: "12px",
  },

  claimId: {
    margin: "0 0 7px",
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "600",
  },

  claimUser: {
    color: "#64748b",
    fontSize: "13px",
  },

  reviewButton: {
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 13px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AdminDashboard;