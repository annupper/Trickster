import React from 'react';
import Popup from 'reactjs-popup';
import NoteService from './NoteService';
import domtoimage from 'dom-to-image';
import Moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import Highlight from 'react-highlight'
import "./notes.css"
import "../../../node_modules/highlight.js/styles/atelier-cave-dark.css"

export default class NoteDetailPopup extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      note: null

    }
    this.noteService = new NoteService();
  }

  componentDidMount() {
    this.noteService
      .showNoteDetails(this.props.id)
      .then((note) => this.setState({ ...this.state, note }));
  }

  componentWillUnmount() {
    this.setState({ ...this.state, note: null })
  }

  openModal = () => {
    this.setState({ open: true })
  }
  closeModal = () => {
    this.setState({ open: false })
  }

  downloadImage = () => {
    var node = document.getElementById('imageToSave');
    domtoimage.toJpeg(node, { quality: 0.95 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      })
  }

  downloadSketch = () => {
    var node = document.getElementById('sketchToSave');
    domtoimage.toJpeg(node, { quality: 0.95 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'my-sketch-name.jpeg';
        link.href = dataUrl;
        link.click();
      })
  }

  render() {

    Moment.locale('es');
    const noteBody = this.state.note ?
      <div>
        <button className="button leftButton" onClick={this.closeModal}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <h3>{this.state.note.title}</h3>
        <p>{Moment(this.state.note.created_at).format('D MMM')}</p>
        <p>{ReactHtmlParser(this.state.note.noteText)}</p>
        <img id="sketchToSave" src={this.state.note.sketch} alt="" onClick={this.downloadSketch} /><br />
        <img id="imageToSave" src={this.state.note.imgPath} alt="" onClick={this.downloadImage} /><br />
        <Highlight language={this.state.note.snippetLanguage}>
          {this.state.note.snippetContent}
        </Highlight>
      </div>
      :
      <p></p>;

    return (
      <div>
        <button className="button" onClick={this.openModal}>
          {this.props.title}
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="">
            {noteBody}
          </div>
        </Popup>
      </div>
    )
  }
}