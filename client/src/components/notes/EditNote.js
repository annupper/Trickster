import React, { Component } from 'react';
import NoteService from './NoteService';
import {Redirect} from "react-router-dom";
import "./notes.css"

export default class EditNote extends Component {
  constructor() {
    super()

    this.state = {
      note: null,
      noteText: '',
      title: '',
      redirect: false
    }

    this.noteService = new NoteService();
  }

  componentDidMount() {
    console.log(this.props.history.location.pathname);
      this.noteService = new NoteService();
      this.noteService
        .showEditDetails(this.props.history.location.pathname.split("/")[2])
        .then((note) => this.setState({ ...this.state, note }));
  }

  componentWillUnmount() {
    this.setState({...this.state, note: null})
 }

  showInForm = () => {
    this.noteService
    .showEditDetails()
    .then((note) => {
      this.setState({ ...this.state, note });
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const {title, noteText} = this.state;
    this.noteService.editNoteDetails(title, noteText, id)
    .then(() => {
      this.setState({...this.state, redirect: true});
    })
    .catch(err=>console.log(err)); 
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({...this.state, [name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/notes" />
    }
   // console.log(this.props.user);
    //console.log(this.props.match.params.id);
    //console.log(this.state.note.title);

    const editNoteForm = this.state.note ?
    <div>
        <h2>Edit note</h2>
        <form onSubmit={this.handleFormSubmit}>
         <input type="text" onChange={e => this.handleChange(e)} name="title" defaultValue={this.state.note.title} /><br/>
          <textarea type="text" name="noteText" onChange={e => this.handleChange(e)} defaultValue={this.state.note.noteText} cols="60" rows="5" /><br/>
          <input type="submit" value="Send"/>
        </form>
    </div>
    :
    <p></p>;

    return (
      <div className="notes">
        {editNoteForm}
      </div>
    )
  }

}