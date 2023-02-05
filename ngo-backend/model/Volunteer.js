const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    institute: {
        type: String,
    },
    teachingHours: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("volunteers", VolunteerSchema);
