const express = require("express");
const noteRoutes = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

noteRoutes.get("/notes", (req, res) => {
  res.status(200).json({message: "Note"});
});


module.exports = noteRoutes;