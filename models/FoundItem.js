const mongoose = require("mongoose");

const foundItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      required: true,
    },

    dateFound: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    finderName: {
      type: String,
      required: true,
    },

    contact: {
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

const FoundItem = mongoose.model(
  "FoundItem",
  foundItemSchema
);

module.exports = FoundItem;