import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminReturnedItems() {
  const [items, setItems] = useState([
    {
      id: "RET-1001",
      claimId: "CLM-1001",
      itemName: "Black Leather Wallet",
      owner: "Rahul Patel",
      approvedDate: "15 Sept 2026",
      collectionDate: "",
      status: "Ready for Collection",
    },
    {
      id: "RET-1002",
      claimId: "CLM-1002",
      itemName: "Wireless Earbuds",
      owner: "Priya Shah",
      approvedDate: "14 Sept 2026",
      collectionDate: "15 Sept 2026",
      status: "Returned",
    },
    {
      id: "RET-1003",
      claimId: "CLM-1003",
      itemName: "College ID Card",
      owner: "Amit Mehta",
      approvedDate: "13 Sept 2026",
      collectionDate: "",
      status: "Ready for Collection",
    },
  ]);

  const markReturned = (id) => {
    const today = new Date().toLocaleDateString("en-GB");

    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          collectionDate: today,
          status: "Returned",
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
            <h1 style={styles.title}>Returned Items</h1>

            <p style={styles.subtitle}>
              Manage approved claims and item handovers.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Records: {items.length}
          </div>

        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Return ID</th>
                <th style={styles.th}>Claim ID</th>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Owner</th>
                <th style={styles.th}>Approved Date</th>
                <th style={styles.th}>Collection Date</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>

              {items.map((item) => (

                <tr key={item.id}>

                  <td style={styles.td}>
                    {item.id}
                  </td>

                  <td style={styles.td}>
                    {item.claimId}
                  </td>

                  <td style={styles.td}>
                    <strong>{item.itemName}</strong>
                  </td>

                  <td style={styles.td}>
                    {item.owner}
                  </td>

                  <td style={styles.td}>
                    {item.approvedDate}
                  </td>

                  <td style={styles.td}>
                    {item.collectionDate || "Not Collected"}
                  </td>

                  <td style={styles.td}>

                    <span
                      style={
                        item.status === "Returned"
                          ? styles.returned
                          : styles.ready
                      }
                    >
                      {item.status}
                    </span>

                  </td>

                  <td style={styles.td}>

                    {item.status === "Ready for Collection" ? (

                      <button
                        style={styles.returnButton}
                        onClick={() =>
                          markReturned(item.id)
                        }
                      >
                        Mark as Returned
                      </button>

                    ) : (

                      <span style={styles.completedText}>
                        Completed
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
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    minWidth: "1100px",
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

  ready: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  returned: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  returnButton: {
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },

  completedText: {
    color: "#16a34a",
    fontSize: "12px",
    fontWeight: "600",
  },
};

export default AdminReturnedItems;