const { Schema, model } = require('mongoose');

const petSchema = new Pet(
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
    preferredPronoun: {
      type: String,
      trim: true
    },
    location: {
      type: Number,
      required: true,
      length: 5
    },
    description: {
      type: String,
      required: true
    },
    available: {
      type: Boolean
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