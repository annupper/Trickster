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
  .catch(err => console.log(`Here is the in NOTE/:id ${err}`));
});

noteRoutes.get("/edit/:id", (req, res) => {
  const noteId = req.params.id;
  Note.findById(noteId)
  .then(note => res.status(200).json(note))
  .catch(err => console.log(`Here is the in NOTE/:id ${err}`));
});

noteRoutes.post("/edit/:id", (req, res) => {
  const { title, noteText, id } = req.body;
  const noteId = req.params.id;
  console.log(noteText, title, noteId);

    Note.findById(noteId)
    .then((note) => console.log(note.title))
    .catch(err => console.log(`Here is the in edit noteTitle ${err}`));
  

});



noteRoutes.post("/note/createnote", (req, res) =>{
  //const { title, noteText } = req.body;
  const author = req.user.id;
  const newNote = new Note({
    title: req.body.title,
    noteText: req.body.noteText,
    author: author
  });

  newNote.save().then(note => res.json(note))

});

noteRoutes.delete("/note/:id", (req, res) => {
  Note.findById(req.params.id)
  .then(note => {
    console.log(req.user._id, note.author, req.params.id)
    if (req.user.id == note.author){
      note.delete()
      .then(res.status(200).json(note))
      .catch(err=> console.log(`Error while deleting note. Details: ${err}`))
    }else{
      return res.status(403).json({error: 'User not allowed to delete this note'});
    }
  })
  .catch(err => console.log(`DELETE NOTE ${err}`));
  
});


module.exports = noteRoutes;