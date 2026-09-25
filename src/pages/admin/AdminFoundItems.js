import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminFoundItems() {
  const [items, setItems] = useState([
    {
      id: "CL-1001",
      name: "Black Wallet",
      category: "Wallet",
      location: "Library",
      date: "14 Sept 2026",
      finder: "Rahul",
      status: "Pending",
    },
    {
      id: "CL-1002",
      name: "Wireless Earbuds",
      category: "Electronics",
      location: "Canteen",
      date: "13 Sept 2026",
      finder: "Priya",
      status: "Approved",
    },
    {
      id: "CL-1003",
      name: "College ID Card",
      category: "Documents",
      location: "Classroom",
      date: "12 Sept 2026",
      finder: "Amit",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: status,
        };
      }

      return item;
    });

    setItems(updatedItems);
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Found Items</h1>
            <p style={styles.subtitle}>
              Review and manage items reported as found.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Items: {items.length}
          </div>
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Item ID</th>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Finder</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id}>

                  <td style={styles.td}>{item.id}</td>

                  <td style={styles.td}>
                    <strong>{item.name}</strong>
                  </td>

                  <td style={styles.td}>{item.category}</td>

                  <td style={styles.td}>{item.location}</td>

                  <td style={styles.td}>{item.date}</td>

                  <td style={styles.td}>{item.finder}</td>

                  <td style={styles.td}>
                    <span
                      style={
                        item.status === "Approved"
                          ? styles.approved
                          : item.status === "Rejected"
                          ? styles.rejected
                          : styles.pending
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td style={styles.td}>
                    {item.status === "Pending" ? (
                      <div style={styles.actions}>

                        <button
                          style={styles.approveButton}
                          onClick={() =>
                            updateStatus(item.id, "Approved")
                          }
                        >
                          Approve
                        </button>

                        <button
                          style={styles.rejectButton}
                          onClick={() =>
                            updateStatus(item.id, "Rejected")
                          }
                        >
                          Reject
                        </button>

                      </div>
                    ) : (
                      <span style={styles.completedText}>
                        Reviewed
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
  },

  subtitle: {
    color: "#64748b",
    marginTop: "6px",
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
    padding: "20px",
    borderRadius: "12px",
    overflowX: "auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  table: {
    width: "100%",
    minWidth: "950px",
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
    fontSize: "13px",
    borderBottom: "1px solid #e2e8f0",
  },

  pending: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  approved: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  rejected: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  actions: {
    display: "flex",
    gap: "6px",
  },

  approveButton: {
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "7px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },

  rejectButton: {
    border: "none",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    padding: "7px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },

  completedText: {
    color: "#64748b",
    fontSize: "12px",
  },
};

export default AdminFoundItems;