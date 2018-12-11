import React, { Component } from 'react';
import NoteService from './NoteService';

export default class Notes extends Component {
  constructor() {
    super();

    this.state = {
      note: ''
    }

    this.noteService = new NoteService();

      this.noteService
      .showNotes()
      .then(() =>console.log("ok"));
    
  }


  render() {
    return (
      <div className="notes">
        <h2>Aqui vienen las notas</h2>
      </div>
    )
  }
}