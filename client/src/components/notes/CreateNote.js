import React, { Component } from 'react';
import NoteService from './NoteService';
import {Redirect} from "react-router-dom";
import "./notes.css"

export default class CreateNote extends Component {
  constructor() {
    super()

    this.state = {
      noteText: '',
      title: '',
      redirect: false
    }

    this.noteService = new NoteService();

  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    const {noteText, title} = this.state;
    //console.log(note);
    this.noteService.createNote(title, noteText)
    .then(() => {
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
      return <Redirect to="/notes" />
    }

    return (
      <div className="notes">
      <h2>Create note</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Title:</label><input type="text" onChange={e => this.handleChange(e)} name="title"/><br/>
          <textarea type="text" name="noteText" onChange={e => this.handleChange(e)} cols="60" rows="5" /><br/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }

}