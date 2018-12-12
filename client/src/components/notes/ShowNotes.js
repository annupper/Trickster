import React, { Component } from 'react';
import NoteService from './NoteService';
import { Link } from 'react-router-dom';
import "./notes.css"

export default class ShowNotes extends Component {
  constructor() {
    super();

    this.noteService = new NoteService();
    
  }

  render() {

    return (
      <div className="allNotes">{this.props.user.notes.map(note => 
        <div key={note._id}><Link to={`/note/${note._id}`}>{note.title}</Link></div>
      )}</div>
    )
  }
}