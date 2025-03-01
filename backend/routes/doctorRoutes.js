//backend/routes/doctorRoutes.js
const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// 📌 Add a new doctor (Without Vector Embeddings)
router.post("/add", async (req, res) => {
    const { name, specialization, location, fee } = req.body;
    try {
        const newDoctor = new Doctor({ name, specialization, location, fee }); // ✅ Removed `vectorEmbedding`
        await newDoctor.save();
        res.json({ message: "Doctor added successfully!", doctor: newDoctor });
    } catch (error) {
        console.error("❌ Error adding doctor:", error);
        res.status(500).json({ error: "Error adding doctor" });
    }
});

// 📌 Get All Doctors
router.get("/", async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        console.error("❌ Error fetching doctors:", error);
        res.status(500).json({ error: "Failed to fetch doctors" });
    }
});

module.exports = router;
