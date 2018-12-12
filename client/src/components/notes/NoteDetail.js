import React, { Component } from 'react';
import NoteService from './NoteService';
import ShowUserProfile from './ShowUserProfile';
import ShowNotes from './ShowNotes';
import "./notes.css"

export default class NoteDetail extends Component {
constructor(props){
  super(props)

  this.state = {
    note: null
  }

  this.noteService = new NoteService();

  this.noteService
  .showNoteDetails(props.match.params.id)
  .then((note) => this.setState({...this.state, note}));
}

render() {

  const noteBody = this.state.note ?
  <div>
    <p>{this.state.note.created_at}</p>
    <p>{this.state.note.note}</p>
  
  </div>
  :
  <p></p>
  console.log(this.state.note)
  return (
    <div className="notes">
      <ShowUserProfile user={this.props.user} />
      <ShowNotes user={this.props.user} />
      {noteBody}
      </div>
  )
}

}

