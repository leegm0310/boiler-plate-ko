const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //스페이스 없애주는 역할
    unique: 1, //똑같은 값이 없도록
  },
  password: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokeExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
