import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminFeedback() {
  const [feedback, setFeedback] = useState([
    {
      id: "FB-1001",
      name: "Rahul Patel",
      email: "rahul@example.com",
      subject: "Claim Verification",
      message:
        "I submitted my ownership proof but my claim is still under review.",
      date: "15 Sept 2026",
      status: "Pending",
    },
    {
      id: "FB-1002",
      name: "Priya Shah",
      email: "priya@example.com",
      subject: "Found Item",
      message:
        "I found an item near the canteen and wanted to confirm the collection process.",
      date: "14 Sept 2026",
      status: "Reviewed",
    },
    {
      id: "FB-1003",
      name: "Amit Mehta",
      email: "amit@example.com",
      subject: "Technical Issue",
      message:
        "The claim status page was not loading properly.",
      date: "13 Sept 2026",
      status: "Pending",
    },
  ]);

  const updateStatus = (id) => {
    const updatedFeedback = feedback.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: "Reviewed",
        };
      }

      return item;
    });

    setFeedback(updatedFeedback);
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>

          <div>
            <h1 style={styles.title}>Feedback & Enquiries</h1>

            <p style={styles.subtitle}>
              Review messages and support requests submitted by users.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Messages: {feedback.length}
          </div>

        </div>

        <div style={styles.grid}>

          {feedback.map((item) => (

            <div
              key={item.id}
              style={styles.card}
            >

              <div style={styles.cardHeader}>

                <div>
                  <p style={styles.feedbackId}>
                    {item.id}
                  </p>

                  <h2 style={styles.name}>
                    {item.name}
                  </h2>

                  <p style={styles.email}>
                    {item.email}
                  </p>
                </div>

                <span
                  style={
                    item.status === "Reviewed"
                      ? styles.reviewed
                      : styles.pending
                  }
                >
                  {item.status}
                </span>

              </div>

              <div style={styles.subjectBox}>

                <p style={styles.subjectLabel}>
                  Subject
                </p>

                <strong>{item.subject}</strong>

              </div>

              <div style={styles.messageBox}>

                <p style={styles.messageLabel}>
                  Message
                </p>

                <p style={styles.messageText}>
                  {item.message}
                </p>

              </div>

              <div style={styles.cardFooter}>

                <span style={styles.date}>
                  Submitted: {item.date}
                </span>

                {item.status === "Pending" ? (

                  <button
                    style={styles.reviewButton}
                    onClick={() => updateStatus(item.id)}
                  >
                    Mark Reviewed
                  </button>

                ) : (

                  <span style={styles.completed}>
                    Reviewed
                  </span>

                )}

              </div>

            </div>

          ))}

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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "15px",
  },

  feedbackId: {
    margin: 0,
    fontSize: "11px",
    color: "#64748b",
  },

  name: {
    margin: "7px 0 3px",
    fontSize: "18px",
    color: "#0f172a",
  },

  email: {
    margin: 0,
    color: "#64748b",
    fontSize: "12px",
  },

  pending: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    whiteSpace: "nowrap",
  },

  reviewed: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    whiteSpace: "nowrap",
  },

  subjectBox: {
    marginTop: "20px",
    padding: "14px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },

  subjectLabel: {
    margin: "0 0 5px",
    color: "#64748b",
    fontSize: "11px",
  },

  messageBox: {
    marginTop: "15px",
  },

  messageLabel: {
    margin: "0 0 5px",
    color: "#64748b",
    fontSize: "11px",
  },

  messageText: {
    margin: 0,
    color: "#334155",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    paddingTop: "15px",
    borderTop: "1px solid #e2e8f0",
  },

  date: {
    color: "#64748b",
    fontSize: "11px",
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

  completed: {
    color: "#16a34a",
    fontSize: "12px",
    fontWeight: "600",
  },
};

export default AdminFeedback;