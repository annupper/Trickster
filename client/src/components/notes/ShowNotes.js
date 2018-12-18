import React, { Component } from 'react';
import NoteService from './NoteService';
import { Link } from 'react-router-dom';
import ShareNote from './ShareNote';
import NoteDetailPopup from './NoteDetailPopup';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./notes.css"

export default class ShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      open: false
    }


    this.notes = [];
    this.noteService = new NoteService();

    this.getNotes()
  }

  getNotes = () => {
    this.noteService
      .showNotes()
      .then((notes) => this.setState({ notes: notes }));
  }

  delete = (id) => {
    this.noteService.deleteNote(id)
      .then(() => this.getNotes())
  }

  getClass =(index) => {
    let colorsClasses = ['noteLightBlue', 'noteCoral','noteLightgreen', 'noteFabada', 'noteYellow', 'noteAqua', 'noteFuxia'];
    
    return colorsClasses[index%colorsClasses.length];
  }

  openModal = () => {
    this.setState({...this.state, open: true })
  }
  closeModal = () => {
    this.setState({...this.state,  open: false })
  }


  render() {


    var notes = this.state.notes;
    var noteList = notes.map((note,index) => {
      let id = note._id
      return <div className={`noteColor ${this.getClass(index)}`} key={note._id}>
        <div className="showNoteTools">
        <button onClick={() => { this.delete(id) }}><i className="fa fa-trash" aria-hidden="true"></i></button> 
        <Link to={`/edit/${note._id}`}><i className="fa fa-edit"></i></Link> 
        <ShareNote noteId={note._id}/>
        </div>
        <NoteDetailPopup id={note._id} title={note.title}/>
        <div>{ ReactHtmlParser(note.noteText) }</div>
      </div>;
    })

    return <div className="allNotes">{noteList}</div>
  }
}