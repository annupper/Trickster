import React, { Component } from 'react';
import NoteService from './NoteService';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import ControlledPopup from "./popup/Popup.js";
import ReactQuill from 'react-quill';
import SnippetPopup from './SnippetPopup';
import 'react-quill/dist/quill.snow.css'; 
import "./notes.css"

export default class CreateNote extends Component {
  constructor() {
    super()

    this.state = {
      noteText: '',
      title: '',
      photo: '',
      redirect: false,
      sketch: '',
      snippet: { snippetContent: '', snippetLanguage: '' }
      
    }

    this.noteService = new NoteService();

  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    const { noteText, title, photo, sketch, snippet } = this.state;

    this.noteService.createNote(title, noteText, photo, sketch, snippet)
      .then(() => {
        this.setState({ ...this.state, redirect: true });
      })
      .catch(err => console.log(err));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "photo") {
      this.setState({ ...this.state, photo: e.target.files[0] })
    } else {
      this.setState({ ...this.state, [name]: value });
    }
  }

  onUpdate = (popupSketch) => {
    this.setState({
      sketch: popupSketch
    })
  };

  onSnippetUpdate = (snippetLanguage, snippetContent) => {
    this.setState({
      snippet: {snippetLanguage, snippetContent}
    })
  };

  onNoteTextChange = (text) => {
    this.setState({
      noteText: text
    })
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/notes" />
    }

    

    return (
      <div className="notes">
      <div className="createNoteBox">
      <Link className="leftButton" to={`/notes`}><i className="fa fa-arrow-left" aria-hidden="true"></i></Link><h2>Create note</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Title:</label><input className="createNoteTitle" type="text" onChange={e => this.handleChange(e)} name="title" autofocus="true"/><br />
          <ReactQuill theme="snow" value={this.state.noteText}
                  onChange={this.onNoteTextChange} />
          <input type="file" name="photo" onChange={e => this.handleChange(e)} />
          <input type="hidden" name="sketch" value={this.state.sketch} />
          <input type="hidden" name="snippetLanguage" value={this.state.snippet.snippetLanguage} />
          <input type="hidden" name="snippetContent" value={this.state.snippet.snippetContent} />
          <input type="submit" value="Send" />
        </form>
        <div className="noteTools">
        <ControlledPopup onUpdate={this.onUpdate} />
        <SnippetPopup onSnippetUpdate={this.onSnippetUpdate} />
        </div>
        </div>
      </div>
    )
  }

}