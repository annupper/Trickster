import React from 'react';
import Popup from 'reactjs-popup';
import "./popup/popup.css"

export default class SnippetPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false,
      snippetContent:'' ,
      snippetLanguage: ''
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModal (){
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }

  saveSnippet = () => {
    this.props.onSnippetUpdate(this.state.snippetLanguage ? this.state.snippetLanguage : 'javascript', this.state.snippetContent);
    this.setState({
      snippetLanguage: this.state.snippetLanguage,
      snippetContent: this.state.snippetContent,
      open: false
    })
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          <i className="fa fa-code"></i>
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="popupStyle">
          <h2>Add snippet</h2>
          <div className="select">
          <select onChange={e => this.handleChange(e)} name="snippetLanguage">
            <option selected="selected" value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
          </select>
          </div>

          <textarea onChange={e => this.handleChange(e)} name="snippetContent"></textarea>
          <button onClick={this.saveSnippet}>Save</button>
          </div>
        </Popup>
      </div>
    )
  }
}