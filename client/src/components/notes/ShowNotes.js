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
      .then(() => this.getNotes())
  }


  render() {


    var notes = this.state.notes;
    var noteList = notes.map((note) => {
      let id = note._id
      return <div className="noteColor" key={note._id}>
        <div className="showNoteTools"><button onClick={() => { this.delete(id) }}><i class="fa fa-trash" aria-hidden="true"></i></button> <br /> <Link to={`/edit/${note._id}`}><i class="fa fa-edit"></i></Link></div>
        <Link to={`/notes/${note._id}`}>{note.title}</Link>
      </div>;
    })

    return <div className="allNotes">{noteList}</div>
  }
}