const mongoose = require('mongoose')

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

module.exports  = address;