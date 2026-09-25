import React, { useState } from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";

function AdminUsers() {
  const [users, setUsers] = useState([
    {
      id: "USR-1001",
      name: "Rahul Patel",
      email: "rahul@example.com",
      collegeId: "BCA001",
      reports: 3,
      claims: 1,
      status: "Active",
    },
    {
      id: "USR-1002",
      name: "Priya Shah",
      email: "priya@example.com",
      collegeId: "BCA002",
      reports: 2,
      claims: 2,
      status: "Active",
    },
    {
      id: "USR-1003",
      name: "Amit Mehta",
      email: "amit@example.com",
      collegeId: "BCA003",
      reports: 4,
      claims: 1,
      status: "Blocked",
    },
    {
      id: "USR-1004",
      name: "Neha Patel",
      email: "neha@example.com",
      collegeId: "BCA004",
      reports: 1,
      claims: 0,
      status: "Active",
    },
  ]);

  const updateStatus = (id) => {
    const updatedUsers = users.map((user) => {

      if (user.id === id) {
        return {
          ...user,
          status:
            user.status === "Active"
              ? "Blocked"
              : "Active",
        };
      }

      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.main}>

        <div style={styles.header}>

          <div>
            <h1 style={styles.title}>Users</h1>

            <p style={styles.subtitle}>
              View and manage registered CampusLost users.
            </p>
          </div>

          <div style={styles.totalBox}>
            Total Users: {users.length}
          </div>

        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>User ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>College ID</th>
                <th style={styles.th}>Reports</th>
                <th style={styles.th}>Claims</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td style={styles.td}>
                    {user.id}
                  </td>

                  <td style={styles.td}>
                    <strong>{user.name}</strong>
                  </td>

                  <td style={styles.td}>
                    {user.email}
                  </td>

                  <td style={styles.td}>
                    {user.collegeId}
                  </td>

                  <td style={styles.td}>
                    {user.reports}
                  </td>

                  <td style={styles.td}>
                    {user.claims}
                  </td>

                  <td style={styles.td}>

                    <span
                      style={
                        user.status === "Active"
                          ? styles.activeStatus
                          : styles.blockedStatus
                      }
                    >
                      {user.status}
                    </span>

                  </td>

                  <td style={styles.td}>

                    <button
                      style={
                        user.status === "Active"
                          ? styles.blockButton
                          : styles.activateButton
                      }
                      onClick={() => updateStatus(user.id)}
                    >
                      {user.status === "Active"
                        ? "Block User"
                        : "Activate User"}
                    </button>

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

  activeStatus: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  blockedStatus: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  blockButton: {
    border: "none",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    padding: "8px 11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },

  activateButton: {
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "8px 11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },
};

export default AdminUsers;