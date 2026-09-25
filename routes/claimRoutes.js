const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Claim = require("../models/Claim");
const FoundItem = require("../models/FoundItem");

const router = express.Router();

// Create uploads/claims folder automatically
const uploadFolder = path.join(__dirname, "../uploads/claims");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, {
    recursive: true,
  });
}

// File storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      file.originalname.replace(/\s+/g, "-");

    cb(null, uniqueName);
  },
});

// Allowed file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG and PDF files are allowed."));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// Get claim by Claim ID and registered email
router.get("/:claimId", async (req, res) => {
  try {
    const claimId = req.params.claimId;
    const email = req.query.email;

    if (!email) {
      return res.status(400).json({
        message: "Registered email is required.",
      });
    }

    const claim = await Claim.findOne({
      claimId: claimId,
      email: email.trim().toLowerCase(),
    }).populate("itemId");

    if (!claim) {
      return res.status(404).json({
        message: "Claim not found. Please check your Claim ID and email.",
      });
    }

    res.json(claim);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Error loading claim status.",
      error: error.message,
    });
  }
});

// Submit claim
router.post(
  "/",
  upload.single("proofFile"),
  async (req, res) => {
    try {
      const {
        itemId,
        name,
        email,
        contact,
        ownershipDetails,
        itemContents,
        identificationMark,
        proofType,
      } = req.body;

      // Validate required fields
      if (
        !itemId ||
        !name ||
        !email ||
        !contact ||
        !ownershipDetails ||
        !identificationMark ||
        !proofType
      ) {
        return res.status(400).json({
          message: "Please complete all required fields.",
        });
      }

      // Validate proof file
      if (!req.file) {
        return res.status(400).json({
          message: "Please upload your ownership proof.",
        });
      }

      // Check whether item exists
      const item = await FoundItem.findById(itemId);

      if (!item) {
        return res.status(404).json({
          message: "Found item not found.",
        });
      }

      // Only approved items can be claimed
      if (item.status !== "Approved") {
        return res.status(400).json({
          message: "This item is not available for claiming.",
        });
      }

      // Generate Claim ID
      const claimId = `CLM-${Date.now()}`;

      // Create claim
      const newClaim = new Claim({
        claimId: claimId,
        itemId: itemId,
        name: name,
        email: email.trim().toLowerCase(),
        contact: contact,
        ownershipDetails: ownershipDetails,
        itemContents: itemContents || "",
        identificationMark: identificationMark,
        proofType: proofType,
        proofFile: req.file.filename,
        status: "Pending",
      });

      const savedClaim = await newClaim.save();

      res.status(201).json({
        message: "Claim submitted successfully.",
        claimId: savedClaim.claimId,
        claim: savedClaim,
      });
    } catch (error) {
      console.log(error.message);

      res.status(500).json({
        message: "Error submitting claim.",
        error: error.message,
      });
    }
  }
);

module.exports = router;