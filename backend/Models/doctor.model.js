// Import mongoose for creating schema and model
const mongoose = require("mongoose");

// Define schema for doctor details
const doctorDetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      default: "",
    },
    about_me: {
      type: String,
      default: "",
    },
    pricing: {
      type: Number,
      default: 0,
    },
    services: [
      {
        type: String,
      },
    ],
    Specialization: [
      {
        type: String,
      },
    ],
    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        institute: {
          type: String,
          required: true,
        },
        year_of_completion: {
          type: Number,
          required: true,
        },
      },
    ],
    timings: {
      Sunday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Monday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Tuesday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Wednesday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Thursday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Friday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
      Saturday: {
        startTime: {
          type: String,
          default: "",
        },
        endTime: {
          type: String,
          default: "",
        },
      },
    },
    slot_interval: {
      type: String,
      default: "30", // Default slot interval
    },
  },
  { timestamps: true }
);

// Create doctor model
const doctor = new mongoose.model("doctor", doctorDetail);

// Export the doctor model
module.exports = doctor;
