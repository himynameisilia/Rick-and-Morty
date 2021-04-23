const mongoose = require("mongoose");
const { Schema } = mongoose;

const addShema = new mongoose.Schema({
  img: String,
  caracterName: String,
  species: String,
  gender: String,
  status: String,
});

module.exports = mongoose.model('added', addShema);
