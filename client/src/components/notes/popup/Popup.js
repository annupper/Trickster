import React from 'react';
import Popup from 'reactjs-popup';
import "./popup.css"
import CanvasDrawComp from "../canvasDraw/CanvasDraw.js";

export default class ControlledPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false,
      sketch:'' 
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

  onUpdate = (sketchCanvas) => {
    this.props.onUpdate(sketchCanvas);
    this.setState({
      sketch: sketchCanvas
    })
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          <i className="fa fa-paint-brush"></i>
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="popupStyle">
          <CanvasDrawComp onUpdate={this.onUpdate} />
          </div>
        </Popup>
      </div>
    )
  }
}
