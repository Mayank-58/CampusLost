import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ClaimItem() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [userEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [contact, setContact] = useState("");
  const [ownershipDetails, setOwnershipDetails] = useState("");
  const [itemContents, setItemContents] = useState("");
  const [identificationMark, setIdentificationMark] = useState("");
  const [proofType, setProofType] = useState("");
  const [proofFile, setProofFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail) {
      setMessage("Please login before submitting a claim.");
      return;
    }

    if (
      name === "" ||
      contact === "" ||
      ownershipDetails === "" ||
      identificationMark === "" ||
      proofType === ""
    ) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (!proofFile) {
      setMessage("Please upload your ownership proof.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      const formData = new FormData();

      formData.append("itemId", id);
      formData.append("name", name);
      formData.append("email", userEmail);
      formData.append("contact", contact);
      formData.append("ownershipDetails", ownershipDetails);
      formData.append("itemContents", itemContents);
      formData.append("identificationMark", identificationMark);
      formData.append("proofType", proofType);
      formData.append("proofFile", proofFile);

      const response = await fetch(
        "http://localhost:5000/api/claims",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(
          `Claim submitted successfully. Your Claim ID is ${data.claimId}.`
        );

        setName("");
        setContact("");
        setOwnershipDetails("");
        setItemContents("");
        setIdentificationMark("");
        setProofType("");
        setProofFile(null);

        const fileInput = document.getElementById("proofFile");

        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        setMessage(
          data.message || "Unable to submit claim."
        );
      }
    } catch (error) {
      setMessage(
        "Server connection failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>

        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoBox}>CL</div>
          <span>CampusLost</span>
        </Link>

        <Link to={`/item/${id}`} style={styles.backLink}>
          Back to Item Details
        </Link>

      </header>

      {/* Main */}
      <main style={styles.main}>

        <div style={styles.headingSection}>

          <p style={styles.itemId}>
            Item ID: {id}
          </p>

          <h1 style={styles.title}>
            Claim Ownership
          </h1>

          <p style={styles.subtitle}>
            Provide accurate information and valid proof to verify that
            this item belongs to you.
          </p>

        </div>

        <div style={styles.layout}>

          {/* Left Information */}
          <div style={styles.infoCard}>

            <h2 style={styles.cardTitle}>
              Ownership Verification
            </h2>

            <p style={styles.cardText}>
              To prevent false claims, CampusLost requires ownership
              verification before an item can be returned.
            </p>

            <div style={styles.infoBlock}>

              <h3>What you can provide</h3>

              <p>
                Purchase bill, invoice, serial number, unique mark,
                personalized details, or other information that proves
                ownership.
              </p>

            </div>

            <div style={styles.warningBox}>

              <h3>Important</h3>

              <p>
                Do not submit false information. Claims are reviewed by
                the administrator before the item is released.
              </p>

            </div>

          </div>

          {/* Form */}
          <div style={styles.formCard}>

            <form onSubmit={handleSubmit}>

              <h2 style={styles.cardTitle}>
                Claim Form
              </h2>

              {/* Name */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                />

              </div>

              {/* Registered Email */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Registered Email *
                </label>

                <input
                  type="email"
                  value={userEmail}
                  readOnly
                  style={styles.readOnlyInput}
                />

                <p style={styles.helperText}>
                  This email is taken from your CampusLost account.
                </p>

              </div>

              {/* Contact */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Contact Number *
                </label>

                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={styles.input}
                />

              </div>

              {/* Ownership Details */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Why do you believe this item belongs to you? *
                </label>

                <textarea
                  rows="4"
                  placeholder="Explain how you can identify this item as yours."
                  value={ownershipDetails}
                  onChange={(e) =>
                    setOwnershipDetails(e.target.value)
                  }
                  style={styles.textarea}
                ></textarea>

              </div>

              {/* Item Contents */}
              <div style={styles.field}>

                <label style={styles.label}>
                  What was inside the item?
                </label>

                <textarea
                  rows="3"
                  placeholder="Mention any private contents or details."
                  value={itemContents}
                  onChange={(e) =>
                    setItemContents(e.target.value)
                  }
                  style={styles.textarea}
                ></textarea>

              </div>

              {/* Identification Mark */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Unique Identification Mark *
                </label>

                <textarea
                  rows="3"
                  placeholder="Example: Scratch, sticker, name, serial number, special mark."
                  value={identificationMark}
                  onChange={(e) =>
                    setIdentificationMark(e.target.value)
                  }
                  style={styles.textarea}
                ></textarea>

              </div>

              {/* Proof Type */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Ownership Proof Type *
                </label>

                <select
                  value={proofType}
                  onChange={(e) => setProofType(e.target.value)}
                  style={styles.input}
                >

                  <option value="">
                    Select Proof Type
                  </option>

                  <option value="Purchase Bill">
                    Purchase Bill
                  </option>

                  <option value="Invoice">
                    Invoice
                  </option>

                  <option value="Serial Number">
                    Serial Number
                  </option>

                  <option value="College ID">
                    College ID
                  </option>

                  <option value="Other">
                    Other Proof
                  </option>

                </select>

              </div>

              {/* Proof Upload */}
              <div style={styles.field}>

                <label style={styles.label}>
                  Upload Ownership Proof *
                </label>

                <input
                  id="proofFile"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) =>
                    setProofFile(e.target.files[0])
                  }
                  style={styles.fileInput}
                />

                <p style={styles.helperText}>
                  Accepted formats: JPG, PNG or PDF.
                </p>

              </div>

              {/* Submit */}
              <button
                type="submit"
                style={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Claim"}
              </button>

              {message !== "" && (
                <div style={styles.message}>
                  {message}
                </div>
              )}

            </form>

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

  backLink: {
    textDecoration: "none",
    color: "#475569",
    fontSize: "14px",
  },

  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "45px 20px 60px",
  },

  headingSection: {
    textAlign: "center",
    marginBottom: "35px",
  },

  itemId: {
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
    maxWidth: "650px",
    margin: "10px auto 0",
    color: "#64748b",
    lineHeight: "1.6",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "25px",
  },

  infoCard: {
    backgroundColor: "#ffffff",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.05)",
    height: "fit-content",
  },

  formCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    marginTop: 0,
    color: "#0f172a",
    fontSize: "21px",
  },

  cardText: {
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  infoBlock: {
    marginTop: "25px",
    padding: "18px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },

  warningBox: {
    marginTop: "18px",
    padding: "18px",
    backgroundColor: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "8px",
    color: "#9a3412",
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
    backgroundColor: "#ffffff",
    fontSize: "14px",
  },

  readOnlyInput: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    backgroundColor: "#ffffff",
    fontSize: "14px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
  },

  fileInput: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    backgroundColor: "#ffffff",
  },

  helperText: {
    color: "#94a3b8",
    fontSize: "12px",
    marginTop: "7px",
  },

  submitButton: {
    width: "100%",
    border: "none",
    padding: "13px",
    borderRadius: "7px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },

  message: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "7px",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    textAlign: "center",
    fontSize: "13px",
    lineHeight: "1.5",
  },
};

export default ClaimItem;