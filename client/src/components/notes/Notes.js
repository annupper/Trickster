import React, { Component } from 'react';
import NoteService from './NoteService';
import "./notes.css"

export default class Notes extends Component {
  constructor() {
    super();

    this.state = {
      note: '',
      user: null
    }

    this.noteService = new NoteService();

      this.noteService
      .showNotes()
      .then((user) => this.setState({...this.state, user}));
    
  }


  render() {
    const showUsername = this.state.user ?
    <div className="userProfile">
      <img src={this.state.user.imgPath} alt=""/>
      <p>{this.state.user.username}</p>
    </div>
    : <p></p>
    return (
      <div className="notes">
        
        {showUsername}
        
      </div>
    )
  }
}