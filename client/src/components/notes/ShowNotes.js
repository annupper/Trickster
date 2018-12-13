import React, { Component } from 'react';
import NoteService from './NoteService';
import { Link } from 'react-router-dom';
import "./notes.css"

export default class ShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }


    this.notes = [];
    this.noteService = new NoteService();
    
    this.getNotes()
  }

  getNotes = () => {
    this.noteService
      .showNotes()
      .then((notes) => this.setState({ notes: notes }));
  }

  delete = (id) => {
    this.noteService.deleteNote(id)
    .then(()=> this.getNotes())
  }


  render() {


    var notes = this.state.notes;
    var noteList = notes.map( (note) =>{
      let id = note._id
      return <div key={note._id}>
       <Link to={`/notes/${note._id}`}>{note.title}</Link>  <br/> <button onClick={()=> {this.delete(id)}}>Borrar</button> <br/> <Link to={`/edit/${note._id}`}>Edit</Link>
        </div>;
    })

    return <div className="allNotes">{noteList}</div>
  }
}