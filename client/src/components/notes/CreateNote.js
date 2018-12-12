import React, { Component } from 'react';
import NoteService from './NoteService';
import {Redirect} from "react-router-dom";
import "./notes.css"

export default class CreateNote extends Component {
  constructor() {
    super()

    this.state = {
      note: '',
      redirect: false
    }

    this.noteService = new NoteService();

  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    const {note} = this.state;
    //console.log(note);
    this.noteService.createNote(note)
    .then((note) => {
      this.setState({...this.state, redirect: true});
    })
    .catch(err=>console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="notes">
        <form onSubmit={this.handleFormSubmit}>
        <label>Add note</label>
          <textarea type="text" name="note" onChange={e => this.handleChange(e)} cols="60" rows="5" />
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }

}