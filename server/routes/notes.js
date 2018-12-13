const express = require("express");
const noteRoutes = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

noteRoutes.get("/notes", (req, res) => {
  Note.find({author: req.user.id})
  .then((notes)=> {
    res.status(200).json(notes);
  }).catch((err)=> console.log("Notes error"));
});

noteRoutes.get("/note/:id", (req, res) => {
  const noteId = req.params.id;
  Note.findById(noteId)
  .then(note => res.status(200).json(note))
  .catch(err => console.log(`Here is the ${err}`));
});


noteRoutes.post("/note/createnote", (req, res) =>{
  const { title, note } = req.body;
  const author = req.user.id;
  const newNote = new Note({
    title: req.body.title,
    note: req.body.note,
    author: author
  });

  newNote.save().then(note => res.json(note))

});

noteRoutes.delete("/note", (req, res) => {
  Note.findById(req.params.id)
  .then(note => {
    if (req.user.id === note.author){
      note.delete()
      .then(res.status(200).json(note))
      .catch(err=> console.log(`Error while deleting note. Details: ${err}`))
    }else{
      return res.status(403).json({error: 'User not allowed to delete this note'});
    }
  })
  .catch(err => console.log(`Here is the ${err}`));
  
});


module.exports = noteRoutes;