const express = require("express");
const router = express.Router();

const FoundItem = require("../models/FoundItem");

// Get all found items
router.get("/", async (req, res) => {
  try {
    const items = await FoundItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: "Error loading found items",
      error: error.message,
    });
  }
});

// Get single found item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await FoundItem.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Found item not found",
      });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: "Error loading item details",
      error: error.message,
    });
  }
});

// Add found item
router.post("/", async (req, res) => {
  try {
    const newItem = new FoundItem(req.body);

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({
      message: "Error adding found item",
      error: error.message,
    });
  }
});

module.exports = router;