const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    availableTimes: { type: Array, default: [] },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);
