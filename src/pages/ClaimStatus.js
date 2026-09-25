import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ClaimStatus() {
  const { id } = useParams();

  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchClaimStatus();
  }, [id]);

  const fetchClaimStatus = async () => {
  try {
    const userEmail =
      localStorage.getItem("userEmail") ||
      sessionStorage.getItem("claimEmail");

    if (!userEmail) {
      setMessage("Registered email is required.");
      setLoading(false);
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/claims/${encodeURIComponent(
        id
      )}?email=${encodeURIComponent(
        userEmail.trim().toLowerCase()
      )}`
    );

    const data = await response.json();

    if (response.ok) {
      setClaim(data);
      setMessage("");
    } else {
      setMessage(
        data.message || "Claim not found."
      );
    }
  } catch (error) {
    setMessage(
      "Server connection failed. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  const getDisplayStatus = () => {
    if (!claim) {
      return "";
    }

    if (claim.status === "Pending") {
      return "Under Verification";
    }

    return claim.status;
  };

  const getStatusClass = () => {
    const status = getDisplayStatus();

    if (status === "Approved") {
      return styles.approvedStatus;
    }

    if (status === "Rejected") {
      return styles.rejectedStatus;
    }

    if (status === "Ready for Collection") {
      return styles.readyStatus;
    }

    if (status === "Returned") {
      return styles.returnedStatus;
    }

    return styles.pendingStatus;
  };

  const getStatusMessage = () => {
    const status = getDisplayStatus();

    if (status === "Under Verification") {
      return (
        <p>
          Your claim has been submitted successfully. The
          administrator is currently reviewing your ownership
          information and proof.
        </p>
      );
    }

    if (status === "Approved") {
      return (
        <p>
          Your claim has been approved. Please wait for the
          item to be marked as ready for collection.
        </p>
      );
    }

    if (status === "Ready for Collection") {
      return (
        <p>
          Your claim has been approved and the item is ready
          for collection from the designated campus location.
        </p>
      );
    }

    if (status === "Returned") {
      return (
        <p>
          The item has been successfully returned to you.
        </p>
      );
    }

    if (status === "Rejected") {
      return (
        <p>
          Your claim was not approved. Please contact the
          administrator for more information.
        </p>
      );
    }

    if (status === "Request More Proof") {
      return (
        <p>
          The administrator has requested additional ownership
          proof. Please contact the administrator and provide
          the required information.
        </p>
      );
    }

    return (
      <p>
        Your claim is currently being processed.
      </p>
    );
  };

  const isApproved =
    claim &&
    (
      claim.status === "Approved" ||
      claim.status === "Ready for Collection" ||
      claim.status === "Returned"
    );

  const isCollectionReady =
    claim &&
    (
      claim.status === "Ready for Collection" ||
      claim.status === "Returned"
    );

  const isReturned =
    claim &&
    claim.status === "Returned";

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
            <h2>Loading Claim Status...</h2>
            <p>Please wait while we retrieve your claim.</p>
          </div>
        </main>
      </div>
    );
  }

  if (!claim) {
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
            <h2>Claim Not Found</h2>

            <p>
              {message}
            </p>

            <Link
              to="/check-claim-status"
              style={styles.backButton}
            >
              Check Another Claim
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formattedDate = claim.createdAt
    ? new Date(claim.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not available";

  const itemId =
    claim.itemId && claim.itemId._id
      ? claim.itemId._id
      : claim.itemId;

  const itemName =
    claim.itemId && claim.itemId.itemName
      ? claim.itemId.itemName
      : "Found Item";

  const status = getDisplayStatus();

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>

        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <div style={styles.headerLinks}>

          <Link
            to="/find-item"
            style={styles.headerLink}
          >
            Find Items
          </Link>

          <Link
            to="/report-lost"
            style={styles.headerLink}
          >
            Report Lost
          </Link>

          <Link
            to="/"
            style={styles.headerLink}
          >
            Home
          </Link>

        </div>

      </header>

      {/* Main */}
      <main style={styles.main}>

        <div style={styles.headingSection}>

          <p style={styles.smallText}>
            Claim ID: {claim.claimId}
          </p>

          <h1 style={styles.title}>
            Claim Status
          </h1>

          <p style={styles.subtitle}>
            Track the verification and return status of your claimed item.
          </p>

        </div>

        <div style={styles.card}>

          {/* Status Header */}
          <div style={styles.statusHeader}>

            <div>
              <p style={styles.itemLabel}>
                Item
              </p>

              <h2 style={styles.itemName}>
                {itemName}
              </h2>

              <p style={styles.itemId}>
                Item ID: {itemId}
              </p>
            </div>

            <span style={getStatusClass()}>
              {status}
            </span>

          </div>

          {/* Details */}
          <div style={styles.detailsBox}>

            <div style={styles.detailRow}>
              <span>Claim ID</span>
              <strong>{claim.claimId}</strong>
            </div>

            <div style={styles.detailRow}>
              <span>Item ID</span>
              <strong>{itemId}</strong>
            </div>

            <div style={styles.detailRow}>
              <span>Claim Submitted</span>
              <strong>{formattedDate}</strong>
            </div>

            <div style={styles.detailRow}>
              <span>Proof Submitted</span>
              <strong>{claim.proofType}</strong>
            </div>

          </div>

          {/* Progress */}
          <div style={styles.progressSection}>

            <h3 style={styles.progressTitle}>
              Claim Progress
            </h3>

            <div style={styles.stepRow}>

              <div style={styles.stepComplete}>
                <div style={styles.stepCircle}>1</div>
                <p>Claim Submitted</p>
              </div>

              <div style={styles.line}></div>

              <div
                style={
                  status === "Under Verification" ||
                  status === "Request More Proof"
                    ? styles.stepCurrent
                    : styles.stepComplete
                }
              >
                <div style={styles.stepCircle}>2</div>
                <p>Verification</p>
              </div>

              <div style={styles.line}></div>

              <div
                style={
                  isApproved
                    ? styles.stepComplete
                    : styles.stepPending
                }
              >
                <div style={styles.stepCircle}>3</div>
                <p>Approved</p>
              </div>

              <div style={styles.line}></div>

              <div
                style={
                  isCollectionReady
                    ? styles.stepComplete
                    : styles.stepPending
                }
              >
                <div style={styles.stepCircle}>4</div>
                <p>Collection</p>
              </div>

              <div style={styles.line}></div>

              <div
                style={
                  isReturned
                    ? styles.stepComplete
                    : styles.stepPending
                }
              >
                <div style={styles.stepCircle}>5</div>
                <p>Returned</p>
              </div>

            </div>

          </div>

          {/* Message */}
          <div style={styles.infoBox}>

            <h3>
              Current Status
            </h3>

            {getStatusMessage()}

          </div>

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
    gap: "22px",
  },

  headerLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  main: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "50px 20px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "30px",
  },

  smallText: {
    color: "#64748b",
    fontSize: "12px",
    marginBottom: "8px",
  },

  title: {
    margin: 0,
    fontSize: "34px",
    color: "#0f172a",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "10px",
    lineHeight: "1.6",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },

  statusHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "25px",
    borderBottom: "1px solid #e2e8f0",
  },

  itemLabel: {
    margin: 0,
    color: "#64748b",
    fontSize: "12px",
  },

  itemName: {
    margin: "7px 0 5px",
    fontSize: "24px",
    color: "#0f172a",
  },

  itemId: {
    margin: 0,
    color: "#64748b",
    fontSize: "12px",
  },

  pendingStatus: {
    padding: "7px 13px",
    borderRadius: "20px",
    backgroundColor: "#fef3c7",
    color: "#92400e",
    fontSize: "12px",
    fontWeight: "600",
  },

  approvedStatus: {
    padding: "7px 13px",
    borderRadius: "20px",
    backgroundColor: "#dcfce7",
    color: "#166534",
    fontSize: "12px",
    fontWeight: "600",
  },

  readyStatus: {
    padding: "7px 13px",
    borderRadius: "20px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: "600",
  },

  returnedStatus: {
    padding: "7px 13px",
    borderRadius: "20px",
    backgroundColor: "#e0e7ff",
    color: "#3730a3",
    fontSize: "12px",
    fontWeight: "600",
  },

  rejectedStatus: {
    padding: "7px 13px",
    borderRadius: "20px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    fontSize: "12px",
    fontWeight: "600",
  },

  detailsBox: {
    marginTop: "25px",
    border: "1px solid #e2e8f0",
    borderRadius: "9px",
    padding: "5px 18px",
  },

  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "14px",
  },

  progressSection: {
    marginTop: "35px",
  },

  progressTitle: {
    fontSize: "19px",
    marginBottom: "25px",
  },

  stepRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  stepComplete: {
    textAlign: "center",
    color: "#166534",
    minWidth: "85px",
  },

  stepCurrent: {
    textAlign: "center",
    color: "#1d4ed8",
    minWidth: "85px",
  },

  stepPending: {
    textAlign: "center",
    color: "#94a3b8",
    minWidth: "85px",
  },

  stepCircle: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px",
    fontSize: "12px",
    fontWeight: "600",
  },

  line: {
    height: "2px",
    backgroundColor: "#e2e8f0",
    flex: 1,
    margin: "0 5px",
  },

  infoBox: {
    marginTop: "35px",
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
    padding: "18px",
    borderRadius: "8px",
  },

  backButton: {
    display: "block",
    textAlign: "center",
    marginTop: "25px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },

  loadingBox: {
    backgroundColor: "#ffffff",
    padding: "60px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },

  errorBox: {
    backgroundColor: "#ffffff",
    padding: "60px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },
};

export default ClaimStatus;