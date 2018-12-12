const express = require("express");
const noteRoutes = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

noteRoutes.get("/notes", (req, res) => {
  User.findById(req.user.id)
  .populate('notes')
  .then((user)=> {
    res.status(200).json(user);
  }).catch((err)=> console.log("Notes error"));
});

noteRoutes.get("/note/:id", (req, res) => {
  const noteId = req.params.id;
  Note.findById(noteId)
  .then(note => res.status(200).json(note))
  .catch(err => console.log(`Here is the ${err}`));
});


noteRoutes.post("/note/createnote", (req, res) =>{
  const { note } = req.body;
  console.log(note);
  const author = req.user.id;
  console.log(author);
  const newNote = new Note({
    note,
    author
  });

  newNote.save((err, note) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
    } else {

    res.status(200).json(note);
    
    }
  });

  

});


module.exports = noteRoutes;