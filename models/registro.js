const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistroSchema = new Schema({
  player1: {type: String, required: true},
  player2: {type: String, require: true},
  winner: {type: String, require: true},
  likes: {type: Number, require: true},
  date: {type: String, require: true}
});
module.exports = mongoose.model("Registro", RegistroSchema);