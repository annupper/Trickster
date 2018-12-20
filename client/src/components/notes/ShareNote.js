import React from 'react';
import Popup from 'reactjs-popup';
import NoteService from './NoteService';

export default class ShareNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false,
      shareWith:'' 
    }
    this.noteService = new NoteService();
  }
  openModal = () => {
    this.setState({ open: true })
  }
  closeModal = () => {
    this.setState({ open: false })
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({...this.state, [name]: value});
  }

  handlePersonToShareNote = (e) => {
    e.preventDefault();
    const id = this.props.noteId;
    const {shareWith} = this.state;
    this.noteService.shareNoteDetails(id, shareWith)
    .then(() => {
      console.log("si quieres pues Ramon");
    })
    .catch(err=>console.log(err)); 
  }



  render() {

    return (
      <div>
        <button className="button" onClick={this.openModal}>
          <i className="fa fa-share-alt"></i>
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="popupStyle">
          <button className="button leftButton" onClick={this.closeModal}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <h2>With whom do you want to share the note?</h2>
        <form onSubmit={this.handlePersonToShareNote}>
         <input type="text" onChange={e => this.handleChange(e)} name="shareWith" /><br />
          <input type="submit" value="Send"/>

        </form>
          </div>
        </Popup>
      </div>
    )
  }
}
