const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: [String],
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      trim: true
    },
    breed: {
      type: String,
      trim: true
    },
    fixed: {
      type: Boolean
    },
    location: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    available: {
      type: Boolean
    },
    createdAt: {
      type: Date, 
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;