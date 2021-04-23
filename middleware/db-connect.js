const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const connectionAdress = `mongodb+srv://${process.env.DATABASE_LOGIN}:${process.env.DATABASE_PASS}@cluster0.nfqaq.mongodb.net/${process.env.DATABASE_DB}?retryWrites=true&w=majority`


mongoose.connect(connectionAdress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;

