import React, { Component } from 'react';
import Moment from 'moment';
import NoteService from './NoteService';
import "./notes.css"

export default class NoteDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: null
    }

    this.noteService = new NoteService();
    this.noteService
      .showNoteDetails(props.match.params.id)
      .then((note) => this.setState({ ...this.state, note }));

  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.noteService = new NoteService();
      this.noteService
        .showNoteDetails(location.pathname.split("/")[2])
        .then((note) => this.setState({ ...this.state, note }));
    });
  }

  componentWillUnmount() {
    this.setState({...this.state, note: null})
 }


  render() {
    Moment.locale('es');
    const noteBody = this.state.note ?
      <div>
        <h3>{this.state.note.title}</h3>
        <p>{Moment(this.state.note.created_at).format('D MMM')}</p>
        <p>{this.state.note.noteText}</p>
        <img src={this.state.note.sketch} alt="" />
        <img src={this.state.note.imgPath} alt="" />
      </div>
      :
      <p></p>;

      const noteEditBody = this.state.note ?
      <div>
        <form>
          <input type="text"  name="title" defaultValue={this.state.note.title}/><br/>
          <textarea type="text" name="note" defaultValue={this.state.note.noteText} cols="60" rows="5" /><br/>
          <input type="submit" value="Send"/>
        </form>
      </div>
      :
      <p></p>;
    return (

      <div className="modifyNote">
        {noteBody}
      </div>
    )
  }
}

