import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminClaims() {
  const [claims, setClaims] = useState([
    {
      id: "CLM-1001",
      itemId: "CL-1001",
      itemName: "Black Leather Wallet",
      claimant: "Rahul Patel",
      submittedDate: "14 Sept 2026",
      proof: "Purchase Bill",
      status: "Pending",
    },
    {
      id: "CLM-1002",
      itemId: "CL-1002",
      itemName: "Wireless Earbuds",
      claimant: "Priya Shah",
      submittedDate: "13 Sept 2026",
      proof: "Serial Number",
      status: "Pending",
    },
    {
      id: "CLM-1003",
      itemId: "CL-1003",
      itemName: "College ID Card",
      claimant: "Amit Mehta",
      submittedDate: "12 Sept 2026",
      proof: "College ID",
      status: "Approved",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    const updatedClaims = claims.map((claim) => {
      if (claim.id === id) {
        return {
          ...claim,
          status: newStatus,
        };
      }

      return claim;
    });

    setClaims(updatedClaims);
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Ownership Claims</h1>

            <p style={styles.subtitle}>
              Review ownership claims and verify submitted proof.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Claims: {claims.length}
          </div>
        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Claim ID</th>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Claimant</th>
                <th style={styles.th}>Submitted</th>
                <th style={styles.th}>Proof Type</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {claims.map((claim) => (
                <tr key={claim.id}>

                  <td style={styles.td}>
                    {claim.id}
                  </td>

                  <td style={styles.td}>
                    <strong>{claim.itemName}</strong>

                    <p style={styles.itemId}>
                      {claim.itemId}
                    </p>
                  </td>

                  <td style={styles.td}>
                    {claim.claimant}
                  </td>

                  <td style={styles.td}>
                    {claim.submittedDate}
                  </td>

                  <td style={styles.td}>
                    {claim.proof}
                  </td>

                  <td style={styles.td}>
                    <span
                      style={
                        claim.status === "Approved"
                          ? styles.approved
                          : claim.status === "Rejected"
                          ? styles.rejected
                          : claim.status === "More Proof Required"
                          ? styles.moreProof
                          : styles.pending
                      }
                    >
                      {claim.status}
                    </span>
                  </td>

                  <td style={styles.td}>

                    {claim.status === "Pending" ? (
                      <div style={styles.actions}>

                        <button
                          style={styles.approveButton}
                          onClick={() =>
                            updateStatus(claim.id, "Approved")
                          }
                        >
                          Approve
                        </button>

                        <button
                          style={styles.proofButton}
                          onClick={() =>
                            updateStatus(
                              claim.id,
                              "More Proof Required"
                            )
                          }
                        >
                          More Proof
                        </button>

                        <button
                          style={styles.rejectButton}
                          onClick={() =>
                            updateStatus(claim.id, "Rejected")
                          }
                        >
                          Reject
                        </button>

                      </div>
                    ) : (
                      <span style={styles.completedText}>
                        Action Completed
                      </span>
                    )}

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

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
    marginBottom: "25px",
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

  totalBox: {
    backgroundColor: "#ffffff",
    padding: "12px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },

  tableContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    minWidth: "1000px",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    fontSize: "13px",
    borderBottom: "1px solid #e2e8f0",
  },

  td: {
    padding: "15px 14px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "13px",
    verticalAlign: "middle",
  },

  itemId: {
    margin: "5px 0 0",
    color: "#64748b",
    fontSize: "11px",
  },

  pending: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "20px",
    backgroundColor: "#fef3c7",
    color: "#92400e",
    fontSize: "12px",
  },

  approved: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "20px",
    backgroundColor: "#dcfce7",
    color: "#166534",
    fontSize: "12px",
  },

  rejected: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "20px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    fontSize: "12px",
  },

  moreProof: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "20px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
  },

  actions: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
  },

  approveButton: {
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "7px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "11px",
  },

  proofButton: {
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "7px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "11px",
  },

  rejectButton: {
    border: "none",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    padding: "7px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "11px",
  },

  completedText: {
    color: "#64748b",
    fontSize: "12px",
  },
};

export default AdminClaims;