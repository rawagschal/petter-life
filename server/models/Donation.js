const { Schema, model } = require('mongoose');

const donationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      trim: true
    },
    cardholder: {
      type: String,
      trim: true,
      required: true
    },
    fixed: {
      type: String,
      required: true
    },
    location: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;