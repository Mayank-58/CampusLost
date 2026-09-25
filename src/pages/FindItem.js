import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FindItem() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchFoundItems();
  }, []);

  const fetchFoundItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/found-items"
      );

      const data = await response.json();

      if (response.ok) {
        setFoundItems(data);
        setMessage("");
      } else {
        setMessage("Unable to load found items.");
      }
    } catch (error) {
      setMessage("Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const approvedItems = foundItems
    .filter((item) => item.status === "Approved")
    .map((item) => ({
      id: item._id,
      name: item.itemName,
      category: item.category,
      location: item.location,
      date: item.dateFound
        ? new Date(item.dateFound).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "",
      image:
        item.image ||
        `https://placehold.co/400x260?text=${encodeURIComponent(
          item.itemName
        )}`,
    }));

  const filteredItems = approvedItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      category === "" || item.category === category;

    const matchesLocation =
      location === "" || item.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <div style={styles.headerLinks}>
          <Link to="/report-lost" style={styles.headerLink}>
            Report Lost
          </Link>

          <Link to="/report-found" style={styles.headerLink}>
            Report Found
          </Link>

          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>

        <div style={styles.headingSection}>
          <h1 style={styles.title}>Find Your Lost Item</h1>

          <p style={styles.subtitle}>
            Search through items reported as found on campus.
          </p>
        </div>

        {/* Search Area */}
        <div style={styles.searchCard}>

          <div style={styles.searchBox}>
            <label style={styles.label}>Search Item</label>

            <input
              type="text"
              placeholder="Enter item name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.filterBox}>
            <label style={styles.label}>Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Documents">Documents</option>
              <option value="Wallet">Wallet</option>
              <option value="Books">Books</option>
              <option value="Accessories">Accessories</option>
              <option value="Keys">Keys</option>
              <option value="Bags">Bags</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.filterBox}>
            <label style={styles.label}>Location</label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={styles.input}
            >
              <option value="">All Locations</option>
              <option value="Library">Library</option>
              <option value="Canteen">Canteen</option>
              <option value="Classroom">Classroom</option>
              <option value="Parking">Parking</option>
              <option value="Ground">Ground</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Other">Other</option>
            </select>
          </div>

        </div>

        {/* Results Header */}
        <div style={styles.resultsHeader}>
          <div>
            <h2 style={styles.resultsTitle}>Found Items</h2>

            <p style={styles.resultsCount}>
              {loading
                ? "Loading items..."
                : `${filteredItems.length} item(s) found`}
            </p>
          </div>
        </div>

        {/* Error / Message */}
        {message !== "" && !loading && (
          <div style={styles.message}>
            {message}
          </div>
        )}

        {/* Results */}
        <div style={styles.grid}>

          {loading ? (
            <div style={styles.noResults}>
              <h3>Loading found items...</h3>
              <p>Please wait while we load the items.</p>
            </div>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (

              <div key={item.id} style={styles.itemCard}>

                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.itemImage}
                />

                <div style={styles.itemContent}>

                  <p style={styles.itemId}>
                    Item ID: {item.id}
                  </p>

                  <h3 style={styles.itemName}>
                    {item.name}
                  </h3>

                  <div style={styles.detailRow}>
                    <span>Category</span>
                    <strong>{item.category}</strong>
                  </div>

                  <div style={styles.detailRow}>
                    <span>Found At</span>
                    <strong>{item.location}</strong>
                  </div>

                  <div style={styles.detailRow}>
                    <span>Date</span>
                    <strong>{item.date}</strong>
                  </div>

                  <Link
                    to={`/item/${item.id}`}
                    style={styles.viewButton}
                  >
                    View Details
                  </Link>

                </div>
              </div>

            ))
          ) : (
            <div style={styles.noResults}>
              <h3>No matching items found</h3>

              <p>
                Try changing your search or filter options.
              </p>
            </div>
          )}

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
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "50px 20px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "35px",
  },

  title: {
    margin: 0,
    fontSize: "36px",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: "10px",
    color: "#64748b",
  },

  searchCard: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "20px",
    marginBottom: "40px",
  },

  searchBox: {
    width: "100%",
  },

  filterBox: {
    width: "100%",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "13px",
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

  resultsHeader: {
    marginBottom: "20px",
  },

  resultsTitle: {
    margin: 0,
    fontSize: "24px",
  },

  resultsCount: {
    marginTop: "5px",
    color: "#64748b",
    fontSize: "13px",
  },

  message: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    color: "#dc2626",
    border: "1px solid #e2e8f0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  },

  itemCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
    border: "1px solid #e2e8f0",
  },

  itemImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },

  itemContent: {
    padding: "20px",
  },

  itemId: {
    fontSize: "11px",
    color: "#64748b",
    margin: "0 0 7px",
  },

  itemName: {
    fontSize: "18px",
    margin: "0 0 18px",
    color: "#0f172a",
  },

  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "13px",
  },

  viewButton: {
    display: "block",
    textAlign: "center",
    marginTop: "18px",
    padding: "11px",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
  },

  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "12px",
  },
};

export default FindItem;