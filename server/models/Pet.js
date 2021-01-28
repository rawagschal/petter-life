const { Schema, model } = require('mongoose');

const petSchema = new Pet(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: [String]
    },
    age: {
      type: Number
    },
    gender: {
      type: String
    },
    location: {
      type: String,
      required: true,
      length: 5
    },
    description: {
      type: String,
      required: true
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