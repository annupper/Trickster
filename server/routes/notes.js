const express = require("express");
const noteRoutes = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");
const uploadCloud = require("../config/cloudinary");

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

noteRoutes.post("/edit", (req, res) => {
  var { title, noteText, id } = req.body;
  console.log(noteText ,title, id);

  if(!title) {
    Note.findById(id)
  .then((note) => {
    title = note.title;
    console.log(title);
})
  .catch(err => console.log(err));
  }

  if(!noteText) {
    Note.findById(id)
  .then((note) => {
    noteText = note.noteText;
  console.log(noteText);
})
  .catch(err => console.log(err));
  }

    Note.findByIdAndUpdate(id, { $set :{ title: title, noteText: noteText }})
  .then(note => res.status(200).json(note))
  .catch(err => console.log(err));


});



noteRoutes.post("/note/createnote", uploadCloud.single("photo"), (req, res) =>{
  const author = req.user.id;
  const imgPath = req.file ? req.file.url : '';
  const {title, noteText, sketch} = req.body;
  const newNote = new Note({
    title,
    noteText,
    sketch,
    author: author,
    imgPath
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