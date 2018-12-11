const express = require("express");
const noteRoutes = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

noteRoutes.get("/notes", (req, res) => {
  const user = req.user;
  res.status(200).json(user);
});

noteRoutes.post("/notes", (req, res) =>{

});


module.exports = noteRoutes;