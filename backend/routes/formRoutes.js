const express = require("express");
const router = express.Router();
const FormData = require("../models/FormData");

// POST: Save form data
router.post("/", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

module.exports = router;
