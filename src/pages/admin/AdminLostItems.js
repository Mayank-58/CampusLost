import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminLostItems() {
  const [items, setItems] = useState([
    {
      id: "LOST-1001",
      name: "iPhone 13",
      category: "Electronics",
      location: "Library",
      date: "14 Sept 2026",
      owner: "Rahul Patel",
      status: "Open",
    },
    {
      id: "LOST-1002",
      name: "Blue Water Bottle",
      category: "Other",
      location: "Canteen",
      date: "13 Sept 2026",
      owner: "Priya Shah",
      status: "Matched",
    },
    {
      id: "LOST-1003",
      name: "College ID Card",
      category: "Documents",
      location: "Classroom",
      date: "12 Sept 2026",
      owner: "Amit Mehta",
      status: "Open",
    },
  ]);

  const updateStatus = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: "Matched",
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
            <h1 style={styles.title}>Lost Items</h1>
            <p style={styles.subtitle}>
              View and manage items reported as lost.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Lost: {items.length}
          </div>
        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Lost ID</th>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Owner</th>
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

                  <td style={styles.td}>{item.owner}</td>

                  <td style={styles.td}>
                    <span
                      style={
                        item.status === "Matched"
                          ? styles.matched
                          : styles.open
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td style={styles.td}>
                    {item.status === "Open" ? (
                      <button
                        style={styles.matchButton}
                        onClick={() => updateStatus(item.id)}
                      >
                        Mark Matched
                      </button>
                    ) : (
                      <span style={styles.doneText}>Matched</span>
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
    fontSize: "13px",
    borderBottom: "1px solid #e2e8f0",
  },

  open: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  matched: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  matchButton: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },

  doneText: {
    color: "#16a34a",
    fontSize: "12px",
    fontWeight: "600",
  },
};

export default AdminLostItems;