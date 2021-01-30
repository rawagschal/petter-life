require('dotenv').config()
const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://kiim:Thinking1@social-network-api.fblqv.mongodb.net/petter-life?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;