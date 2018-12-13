require('dotenv').config();

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
require("./Note");

const userSchema = new Schema({
  username: String,
  password: String,
  imgName: {
    type: String,
    default: 'defaultProfile.png',
  },
  imgPath: {
    type: String,
    default: "https://res.cloudinary.com/dqlnv5tg8/image/upload/v1543153342/defaultProfile.png",
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
