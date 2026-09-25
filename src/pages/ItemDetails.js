import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchItemDetails();
  }, [id]);

  const fetchItemDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/found-items/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setItem(data);
        setMessage("");
      } else {
        setMessage(data.message || "Item not found.");
      }
    } catch (error) {
      setMessage("Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <header style={styles.header}>
          <Link to="/" style={styles.logoLink}>
            <div style={styles.logoBox}>CL</div>
            <span>CampusLost</span>
          </Link>
        </header>

        <main style={styles.main}>
          <div style={styles.loadingBox}>
            <h2>Loading item details...</h2>
            <p>Please wait.</p>
          </div>
        </main>
      </div>
    );
  }

  if (!item) {
    return (
      <div style={styles.page}>
        <header style={styles.header}>
          <Link to="/" style={styles.logoLink}>
            <div style={styles.logoBox}>CL</div>
            <span>CampusLost</span>
          </Link>
        </header>

        <main style={styles.main}>
          <div style={styles.errorBox}>
            <h2>Item Not Found</h2>
            <p>{message}</p>

            <Link
              to="/find-item"
              style={styles.backButton}
            >
              Back to Found Items
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formattedDate = item.dateFound
    ? new Date(item.dateFound).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not available";

  const itemImage =
    item.image ||
    `https://placehold.co/700x450?text=${encodeURIComponent(
      item.itemName
    )}`;

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>

        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <div style={styles.headerLinks}>

          <Link to="/find-item" style={styles.headerLink}>
            Find Items
          </Link>

          <Link to="/report-lost" style={styles.headerLink}>
            Report Lost
          </Link>

          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>

        </div>

      </header>

      {/* Main */}
      <main style={styles.main}>

        <Link to="/find-item" style={styles.backLink}>
          Back to Found Items
        </Link>

        <div style={styles.card}>

          {/* Image */}
          <div style={styles.imageSection}>

            <img
              src={itemImage}
              alt={item.itemName}
              style={styles.image}
            />

          </div>

          {/* Details */}
          <div style={styles.detailsSection}>

            <p style={styles.itemId}>
              Item ID: {item._id}
            </p>

            <h1 style={styles.title}>
              {item.itemName}
            </h1>

            <div style={styles.status}>
              {item.status === "Approved"
                ? "Available for Claim"
                : item.status}
            </div>

            <div style={styles.infoBox}>

              <div style={styles.infoRow}>
                <span>Category</span>
                <strong>{item.category}</strong>
              </div>

              <div style={styles.infoRow}>
                <span>Found Location</span>
                <strong>{item.location}</strong>
              </div>

              <div style={styles.infoRow}>
                <span>Date Found</span>
                <strong>{formattedDate}</strong>
              </div>

            </div>

            <div style={styles.descriptionBox}>

              <h3>Item Description</h3>

              <p>
                {item.description}
              </p>

            </div>

            <div style={styles.notice}>

              <h3>Ownership Verification</h3>

              <p>
                To claim this item, you will need to provide information
                or proof that helps verify that the item belongs to you.
              </p>

            </div>

            {item.status === "Approved" ? (
              <Link
                to={`/claim/${item._id}`}
                style={styles.claimButton}
              >
                Claim This Item
              </Link>
            ) : (
              <div style={styles.unavailableButton}>
                Item Not Available for Claim
              </div>
            )}

          </div>

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

  header: {
    height: "70px",
    padding: "0 8%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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

  headerLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  headerLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  loginButton: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
  },

  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "45px 20px",
  },

  backLink: {
    display: "inline-block",
    marginBottom: "25px",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },

  card: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "40px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 6px 22px rgba(0,0,0,0.06)",
  },

  imageSection: {
    display: "flex",
    alignItems: "flex-start",
  },

  image: {
    width: "100%",
    height: "430px",
    objectFit: "cover",
    borderRadius: "10px",
    display: "block",
  },

  detailsSection: {
    padding: "5px 0",
  },

  itemId: {
    color: "#64748b",
    fontSize: "12px",
    margin: 0,
  },

  title: {
    fontSize: "32px",
    margin: "10px 0 12px",
    color: "#0f172a",
  },

  status: {
    display: "inline-block",
    padding: "7px 12px",
    borderRadius: "20px",
    backgroundColor: "#dcfce7",
    color: "#166534",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "25px",
  },

  infoBox: {
    border: "1px solid #e2e8f0",
    borderRadius: "9px",
    padding: "5px 15px",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "13px 0",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "14px",
  },

  descriptionBox: {
    marginTop: "25px",
  },

  notice: {
    marginTop: "20px",
    padding: "18px",
    borderRadius: "8px",
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
  },

  claimButton: {
    display: "block",
    textAlign: "center",
    marginTop: "25px",
    padding: "13px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "7px",
    fontSize: "15px",
    fontWeight: "600",
  },

  unavailableButton: {
    marginTop: "25px",
    padding: "13px",
    backgroundColor: "#e2e8f0",
    color: "#64748b",
    borderRadius: "7px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "600",
  },

  loadingBox: {
    backgroundColor: "#ffffff",
    padding: "60px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  },

  errorBox: {
    backgroundColor: "#ffffff",
    padding: "60px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  },

  backButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "11px 20px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },
};

export default ItemDetails;