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
      <div className="notesAndCreate">
        <div className="createNote"><div><Link to={`/note/createnote`}>Create note</Link></div></div>
        <ShowNotes user={this.state.user} />
        
      </div>
      : <p></p>;

    return (
      <div className="notes">
        {showUsername}
      </div>
    )
  }
}