import React, { Component } from 'react';
import NoteService from './NoteService';
import "./notes.css"

export default class ShowNotes extends Component {
  constructor() {
    super();

    this.noteService = new NoteService();

  }
  render() {

    return (
      <div className="userProfile">
        <div className="userNamePhoto">
          <img src={this.props.user.imgPath} alt="" />
          <p>{this.props.user.username}</p>
        </div>
        <div className="userProfileSettings"><p>Settings</p></div>
      </div>
    )
  }
}