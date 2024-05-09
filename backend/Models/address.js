// This code is not used anywhere, 
// it can be completed and can be used as an object type for other models.
const mongoose = require("mongoose");

const address = new mongoose.Schema({
  addressLine1: {
    type: string,
    required: true,
  },
  addressLine2: {
    type: string,
    required: true,
  },
});

module.exports = address;
