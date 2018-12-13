import React, { Component } from 'react';
import NoteService from './NoteService';
import ShowUserProfile from './ShowUserProfile';
import AuthService from '../auth/AuthService';
import ShowNotes from './ShowNotes';
import { Link } from 'react-router-dom';
import "./notes.css";

export default class Notes extends Component {
  constructor() {
    super();

    this.state = {
      note: null,
      notes: null
    }

    this.authService = new AuthService();

    this.fetchUser();

    this.noteService = new NoteService();

   
    this.noteService
      .showNoteDetails()
      .then((note) => this.setState({ ...this.state, note }));

  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
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