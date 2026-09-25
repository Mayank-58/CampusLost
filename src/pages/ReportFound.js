import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReportFound() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [finderName, setFinderName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      itemName === "" ||
      category === "" ||
      location === "" ||
      date === "" ||
      description === "" ||
      finderName === "" ||
      contact === ""
    ) {
      setMessage("Please fill all the required fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/found-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemName: itemName,
            category: category,
            location: location,
            dateFound: date,
            description: description,
            finderName: finderName,
            contact: contact,
            status: "Pending",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "Found item reported successfully. It is now pending admin verification."
        );

        setItemName("");
        setCategory("");
        setLocation("");
        setDate("");
        setDescription("");
        setFinderName("");
        setContact("");
      } else {
        setMessage(
          data.message || "Unable to report found item."
        );
      }
    } catch (error) {
      setMessage(
        "Server connection failed. Please try again."
      );
    }
  };

  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <Link to="/" style={styles.backLink}>
          ← Back to Home
        </Link>
      </div>

      {/* Main */}
      <div style={styles.container}>

        <div style={styles.headingSection}>
          <h1>Report Found Item</h1>

          <p>
            Found something on campus? Provide the details below so the
            rightful owner can find it.
          </p>
        </div>

        <div style={styles.card}>

          <form onSubmit={handleSubmit}>

            {/* Item Details */}
            <h2 style={styles.sectionTitle}>Item Details</h2>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>Item Name *</label>

                <input
                  type="text"
                  placeholder="Example: Black Wallet"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Category *</label>

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
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Where Did You Find It? *
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
                <label style={styles.label}>Date Found *</label>

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
                placeholder="Describe the item without revealing private identifying information."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={styles.textarea}
                rows="5"
              ></textarea>
            </div>

            {/* Photo */}
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
                Upload a clear photo of the found item.
              </p>
            </div>

            {/* Finder Information */}
            <h2 style={styles.sectionTitle}>
              Finder Information
            </h2>

            <div style={styles.row}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Your Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={finderName}
                  onChange={(e) => setFinderName(e.target.value)}
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

            {/* Submit */}
            <button type="submit" style={styles.button}>
              Submit Found Item
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
    textAlign: "center",
    color: "#2563eb",
    fontSize: "13px",
  },
};

export default ReportFound;