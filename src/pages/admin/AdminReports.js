import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminReports() {
  const [reports, setReports] = useState([
    {
      id: "REP-1001",
      title: "Duplicate Found Item",
      type: "Item Report",
      submittedBy: "Rahul Patel",
      date: "14 Sept 2026",
      status: "Pending",
    },
    {
      id: "REP-1002",
      title: "Incorrect Item Information",
      type: "Content Report",
      submittedBy: "Priya Shah",
      date: "13 Sept 2026",
      status: "Reviewed",
    },
    {
      id: "REP-1003",
      title: "Suspicious Claim",
      type: "Claim Report",
      submittedBy: "Amit Mehta",
      date: "12 Sept 2026",
      status: "Pending",
    },
  ]);

  const updateStatus = (id) => {
    const updatedReports = reports.map((report) => {
      if (report.id === id) {
        return {
          ...report,
          status: "Reviewed",
        };
      }

      return report;
    });

    setReports(updatedReports);
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Reports</h1>
            <p style={styles.subtitle}>
              Review and manage submitted reports.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Reports: {reports.length}
          </div>
        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Report ID</th>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Submitted By</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>

                  <td style={styles.td}>{report.id}</td>

                  <td style={styles.td}>
                    <strong>{report.title}</strong>
                  </td>

                  <td style={styles.td}>{report.type}</td>

                  <td style={styles.td}>{report.submittedBy}</td>

                  <td style={styles.td}>{report.date}</td>

                  <td style={styles.td}>
                    <span
                      style={
                        report.status === "Reviewed"
                          ? styles.reviewed
                          : styles.pending
                      }
                    >
                      {report.status}
                    </span>
                  </td>

                  <td style={styles.td}>
                    {report.status === "Pending" ? (
                      <button
                        style={styles.reviewButton}
                        onClick={() => updateStatus(report.id)}
                      >
                        Mark Reviewed
                      </button>
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

  reviewed: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  reviewButton: {
    border: "none",
    backgroundColor: "#2563eb",
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

export default AdminReports;