const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  added: [{ type: mongoose.Schema.Types.ObjectId, ref: 'added' }]
});

module.exports = mongoose.model("users", userSchema);
