const { Schema, model } = require('mongoose');

const petSchema = new Pet(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    kind: {
      type: Array
    },
    age: {
      type: Number,
    },
    location: {
      type: Number,
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