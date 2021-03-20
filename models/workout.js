const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  day: {
    type:Date,
    default: ()=> new Date()
  },
  exercises: {
      type: Array,
      default:[]
  }
});

const User = mongoose.model("workout", UserSchema);

module.exports = User;