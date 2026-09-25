const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    claimId: {
      type: String,
      required: true,
      unique: true,
    },

    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoundItem",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    
    contact: {
      type: String,
      required: true,
    },

    ownershipDetails: {
      type: String,
      required: true,
    },

    itemContents: {
      type: String,
      default: "",
    },

    identificationMark: {
      type: String,
      required: true,
    },

    proofType: {
      type: String,
      required: true,
    },

    proofFile: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;