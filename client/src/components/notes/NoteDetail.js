import React, { Component } from 'react';
import Moment from 'moment';
import NoteService from './NoteService';
import domtoimage from 'dom-to-image';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
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

 downloadImage = () => {
  var node = document.getElementById('imageToSave');
  domtoimage.toJpeg(node, { quality: 0.95 })
  .then((dataUrl)=> {
    var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
  })
 }

 downloadSketch = () => {
  var node = document.getElementById('sketchToSave');
  domtoimage.toJpeg(node, { quality: 0.95 })
  .then((dataUrl)=> {
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
        <h3>{this.state.note.title}</h3>
        <p>{Moment(this.state.note.created_at).format('D MMM')}</p>
        <p>{ ReactHtmlParser(this.state.note.noteText) }</p>
        <img id="sketchToSave" src={this.state.note.sketch} alt="" onClick={this.downloadSketch}/>
        <img id="imageToSave" src={this.state.note.imgPath} alt="" onClick={this.downloadImage} />
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

