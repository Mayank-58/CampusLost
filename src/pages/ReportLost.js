import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReportLost() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      itemName === "" ||
      category === "" ||
      location === "" ||
      date === "" ||
      description === "" ||
      ownerName === "" ||
      contact === ""
    ) {
      setMessage("Please fill all the required fields.");
      return;
    }

    setMessage(
      "Lost item report submitted successfully. You can search found items later."
    );
  };

  return (
    <div style={styles.page}>

      <div style={styles.header}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <Link to="/" style={styles.backLink}>
          Back to Home
        </Link>
      </div>

      <div style={styles.container}>

        <div style={styles.headingSection}>
          <h1 style={styles.heading}>Report Lost Item</h1>

          <p style={styles.description}>
            Tell us about the item you lost so it can be matched with
            items reported as found on campus.
          </p>
        </div>

        <div style={styles.card}>

          <form onSubmit={handleSubmit}>

            <h2 style={styles.sectionTitle}>Lost Item Details</h2>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Item Name *
                </label>

                <input
                  type="text"
                  placeholder="Example: Black Backpack"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Category *
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={styles.input}
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Documents">Documents</option>
                  <option value="Wallet">Wallet / Purse</option>
                  <option value="Books">Books</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Keys">Keys</option>
                  <option value="Bags">Bags</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Last Seen Location *
                </label>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={styles.input}
                >
                  <option value="">Select Location</option>
                  <option value="Library">Library</option>
                  <option value="Canteen">Canteen</option>
                  <option value="Classroom">Classroom</option>
                  <option value="Parking">Parking</option>
                  <option value="Ground">Ground</option>
                  <option value="Auditorium">Auditorium</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Date Lost *
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={styles.input}
                />
              </div>

            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Item Description *
              </label>

              <textarea
                rows="5"
                placeholder="Describe the item, including useful identifying details."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={styles.textarea}
              ></textarea>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Upload Item Photo
              </label>

              <input
                type="file"
                accept="image/*"
                style={styles.fileInput}
              />

              <p style={styles.helperText}>
                A photo can help when matching your lost item with a found item.
              </p>
            </div>

            <h2 style={styles.sectionTitle}>
              Owner Information
            </h2>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Your Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Contact Number *
                </label>

                <input
                  type="tel"
                  placeholder="Enter contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={styles.input}
                />
              </div>

            </div>

            <button type="submit" style={styles.button}>
              Submit Lost Item
            </button>

            {message !== "" && (
              <div style={styles.message}>
                {message}
              </div>
            )}

          </form>

        </div>
      </div>
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

  header: {
    height: "70px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8%",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#1e40af",
    fontSize: "20px",
    fontWeight: "bold",
  },

  logoBox: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },

  backLink: {
    color: "#475569",
    textDecoration: "none",
    fontSize: "14px",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "50px 20px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "35px",
  },

  heading: {
    margin: 0,
    fontSize: "34px",
    color: "#0f172a",
  },

  description: {
    maxWidth: "650px",
    margin: "12px auto 0",
    color: "#64748b",
    lineHeight: "1.6",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "35px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },

  sectionTitle: {
    fontSize: "20px",
    marginTop: "5px",
    marginBottom: "20px",
    color: "#0f172a",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  field: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },

  input: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "14px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
  },

  fileInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  },

  helperText: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "7px",
  },

  button: {
    width: "100%",
    padding: "13px",
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: "7px",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },

  message: {
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#eff6ff",
    borderRadius: "7px",
    textAlign: "center",
    color: "#1d4ed8",
    fontSize: "13px",
  },
};

export default ReportLost;