import React, { Component } from 'react';
import NoteService from './NoteService';
import { Link } from 'react-router-dom';
import "./notes.css"

export default class ShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }


    this.notes = [];
    this.noteService = new NoteService();
    this.noteService
    .showNotes()
    .then((notes) => this.setState({notes:notes })  );

  }


  render() {
    
    var notes = this.state.notes;
        var noteList = notes.map(function(note){
                        return <div key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link>  - <Link to={`/deletenote/${note._id}`}>Borrar</Link></div>;
                      })

        return  <div className="allNotes">{noteList}</div>
  }
}