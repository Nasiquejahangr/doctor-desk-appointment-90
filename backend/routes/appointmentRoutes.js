const express = require("express");
const Appointment = require("../models/Appointment");
const User = require("../models/User");

const router = express.Router();

// 📌 **Book an Appointment**
router.post("/", async (req, res) => {
    const { patientId, doctorId, date, timeSlot, notes } = req.body;

    try {
        // Check if doctor exists
        const doctor = await User.findById(doctorId);
        if (!doctor || doctor.role !== "doctor") {
            return res.status(404).json({ error: "Doctor not found" });
        }

        // Create appointment
        const appointment = new Appointment({
            patientId,
            doctorId,
            date,
            timeSlot,
            notes
        });

        await appointment.save();
        res.status(201).json({ message: "Appointment booked successfully", appointment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to book appointment" });
    }
});

// 📌 **Get All Appointments**
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find().populate("patientId doctorId", "name email");
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch appointments" });
    }
});

// 📌 **Get Appointments for a Doctor**
router.get("/doctor/:doctorId", async (req, res) => {
    try {
        const appointments = await Appointment.find({ doctorId: req.params.doctorId }).populate("patientId", "name email");
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch doctor's appointments" });
    }
});

// 📌 **Cancel an Appointment**
router.delete("/:id", async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }

        await appointment.deleteOne();
        res.json({ message: "Appointment cancelled successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to cancel appointment" });
    }
});

module.exports = router;
