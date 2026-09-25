import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminItemVerification() {
  const { id } = useParams();

  const [status, setStatus] = useState("Pending");
  const [message, setMessage] = useState("");

  const claim = {
    claimId: id || "CLM-1001",
    itemId: "CL-1001",
    itemName: "Black Leather Wallet",
    category: "Wallet",
    foundLocation: "Library",
    foundDate: "14 Sept 2026",
    claimantName: "Rahul Patel",
    email: "rahul@example.com",
    contact: "9876543210",
    ownershipDetails:
      "The wallet belongs to me. I purchased it recently and can identify the mark on the back.",
    itemContents:
      "College ID card and bank card were inside the wallet.",
    identificationMark:
      "There is a small scratch on the back side of the wallet.",
    proofType: "Purchase Bill",
    proofFile: "purchase-bill.pdf",
  };

  const updateStatus = (newStatus) => {
    setStatus(newStatus);

    if (newStatus === "Approved") {
      setMessage(
        "Claim approved successfully. The claimant can now be notified for item collection."
      );
    }

    if (newStatus === "Rejected") {
      setMessage(
        "Claim rejected. The claimant will not be allowed to collect the item."
      );
    }

    if (newStatus === "More Proof Required") {
      setMessage(
        "Additional ownership proof has been requested from the claimant."
      );
    }
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>

          <div>
            <Link
              to="/admin/claims"
              style={styles.backLink}
            >
              Back to Claims
            </Link>

            <h1 style={styles.title}>
              Item Verification
            </h1>

            <p style={styles.subtitle}>
              Review the claimant's information and ownership proof.
            </p>
          </div>

          <span
            style={
              status === "Approved"
                ? styles.approvedStatus
                : status === "Rejected"
                ? styles.rejectedStatus
                : status === "More Proof Required"
                ? styles.proofStatus
                : styles.pendingStatus
            }
          >
            {status}
          </span>

        </div>

        <div style={styles.grid}>

          {/* Item Information */}
          <section style={styles.card}>

            <h2 style={styles.cardTitle}>
              Item Information
            </h2>

            <div style={styles.infoRow}>
              <span>Item ID</span>
              <strong>{claim.itemId}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Item Name</span>
              <strong>{claim.itemName}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Category</span>
              <strong>{claim.category}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Found Location</span>
              <strong>{claim.foundLocation}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Found Date</span>
              <strong>{claim.foundDate}</strong>
            </div>

          </section>

          {/* Claimant Information */}
          <section style={styles.card}>

            <h2 style={styles.cardTitle}>
              Claimant Information
            </h2>

            <div style={styles.infoRow}>
              <span>Claim ID</span>
              <strong>{claim.claimId}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Name</span>
              <strong>{claim.claimantName}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Email</span>
              <strong>{claim.email}</strong>
            </div>

            <div style={styles.infoRow}>
              <span>Contact</span>
              <strong>{claim.contact}</strong>
            </div>

          </section>

          {/* Ownership Information */}
          <section style={styles.fullCard}>

            <h2 style={styles.cardTitle}>
              Ownership Information
            </h2>

            <div style={styles.textBox}>
              <h3>Why does the claimant believe this item belongs to them?</h3>

              <p>
                {claim.ownershipDetails}
              </p>
            </div>

            <div style={styles.textBox}>
              <h3>Item Contents</h3>

              <p>
                {claim.itemContents}
              </p>
            </div>

            <div style={styles.textBox}>
              <h3>Unique Identification Mark</h3>

              <p>
                {claim.identificationMark}
              </p>
            </div>

          </section>

          {/* Proof */}
          <section style={styles.card}>

            <h2 style={styles.cardTitle}>
              Ownership Proof
            </h2>

            <div style={styles.proofInfo}>

              <p style={styles.proofLabel}>
                Proof Type
              </p>

              <strong>{claim.proofType}</strong>

              <p style={styles.fileName}>
                {claim.proofFile}
              </p>

              <button style={styles.viewButton}>
                View Proof
              </button>

            </div>

          </section>

          {/* Verification Result */}
          <section style={styles.card}>

            <h2 style={styles.cardTitle}>
              Verification Decision
            </h2>

            <p style={styles.decisionText}>
              Compare the provided information with the actual item
              details before making a decision.
            </p>

            <div style={styles.actionGroup}>

              <button
                style={styles.approveButton}
                onClick={() => updateStatus("Approved")}
              >
                Approve Claim
              </button>

              <button
                style={styles.proofButton}
                onClick={() =>
                  updateStatus("More Proof Required")
                }
              >
                Request More Proof
              </button>

              <button
                style={styles.rejectButton}
                onClick={() => updateStatus("Rejected")}
              >
                Reject Claim
              </button>

            </div>

            {message !== "" && (
              <div style={styles.message}>
                {message}
              </div>
            )}

          </section>

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

  main: {
    marginLeft: "250px",
    padding: "30px",
    minHeight: "100vh",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "25px",
  },

  backLink: {
    display: "inline-block",
    marginBottom: "10px",
    textDecoration: "none",
    color: "#2563eb",
    fontSize: "13px",
  },

  title: {
    margin: 0,
    fontSize: "30px",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: "7px",
    color: "#64748b",
    fontSize: "14px",
  },

  pendingStatus: {
    padding: "7px 12px",
    borderRadius: "20px",
    backgroundColor: "#fef3c7",
    color: "#92400e",
    fontSize: "12px",
    fontWeight: "600",
  },

  approvedStatus: {
    padding: "7px 12px",
    borderRadius: "20px",
    backgroundColor: "#dcfce7",
    color: "#166534",
    fontSize: "12px",
    fontWeight: "600",
  },

  rejectedStatus: {
    padding: "7px 12px",
    borderRadius: "20px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    fontSize: "12px",
    fontWeight: "600",
  },

  proofStatus: {
    padding: "7px 12px",
    borderRadius: "20px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  fullCard: {
    gridColumn: "1 / -1",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    marginTop: 0,
    marginBottom: "20px",
    fontSize: "20px",
    color: "#0f172a",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    padding: "13px 0",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "14px",
  },

  textBox: {
    padding: "17px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    marginBottom: "15px",
    border: "1px solid #e2e8f0",
  },

  textBoxHeading: {
    fontSize: "14px",
  },

  proofInfo: {
    padding: "20px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
  },

  proofLabel: {
    margin: "0 0 7px",
    color: "#64748b",
    fontSize: "12px",
  },

  fileName: {
    marginTop: "12px",
    color: "#475569",
    fontSize: "13px",
  },

  viewButton: {
    border: "1px solid #2563eb",
    backgroundColor: "#ffffff",
    color: "#2563eb",
    padding: "9px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "5px",
  },

  decisionText: {
    color: "#64748b",
    lineHeight: "1.6",
    fontSize: "14px",
  },

  actionGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },

  approveButton: {
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  proofButton: {
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  rejectButton: {
    border: "none",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    padding: "11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  message: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "7px",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    fontSize: "13px",
    lineHeight: "1.5",
  },
};

export default AdminItemVerification;