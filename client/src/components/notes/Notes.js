import React, { Component } from 'react';
import NoteService from './NoteService';
import ShowUserProfile from './ShowUserProfile';
import ShowNotes from './ShowNotes';
import { Link } from 'react-router-dom';
import "./notes.css";

export default class Notes extends Component {
  constructor() {
    super();

    this.state = {
      note: null,
      user: null
    }

    this.noteService = new NoteService();

    this.noteService
      .showNotes()
      .then((user) => this.setState({ ...this.state, user }));

    this.noteService
      .showNoteDetails()
      .then((note) => this.setState({ ...this.state, note }));

  }


  render() {
    const showUsername = this.state.user ?
      <div>
        <ShowUserProfile user={this.state.user} />
        <ShowNotes user={this.state.user} />
        <div className="allNotes"><div><Link to={`/note/createnote`}>Create note</Link></div></div>
      </div>
      : <p></p>;

    return (
      <div className="notes">
        {showUsername}
      </div>
    )
  }
}