import React, { Component } from 'react';
import Moment from 'moment';
import NoteService from './NoteService';
import "./notes.css"

export default class NoteDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: null
    }

    this.noteService = new NoteService();
    this.noteService
      .showNoteDetails(props.match.params.id)
      .then((note) => this.setState({ ...this.state, note }));
  }

  render() {
    Moment.locale('es');
    const noteBody = this.state.note ?
      <div>
        <h3>{this.state.note.title}</h3>
        <p>{Moment(this.state.note.created_at).format('d MMM')}</p>
        <p>{this.state.note.note}</p>

      </div>
      :
      <p></p>
    return (
        
        <div className="modifyNote">
          {noteBody}
        </div>
    )
  }
}

