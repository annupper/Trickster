import React from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "./canvasdraw.css";
import "./canvasdraw.css"
import domtoimage from 'dom-to-image';

export default class CanvasDrawComp extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "#ffc600",
      width: 850,
      height: 400,
      brushRadius: 7,
      lazyRadius: 12,
      sketch: ''
    };
  }
 
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({...this.state,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
  }
  render() {
    
    return (
      <div>
         <div id="mySketch">
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        </div>
        
        <div className={classNames.tools}>
          <button
            onClick={() => {
              var node = document.getElementById('mySketch');
              domtoimage.toJpeg(node, { quality: 0.95 })
    .then((dataUrl) => {
          this.props.onUpdate(dataUrl);
          this.setState({...this.state, sketch:dataUrl});
    });
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            <i class="fa fa-save"></i>
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            <i class="fa fa-eraser"></i>
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            <i class="fa fa-undo"></i>
          </button>
          
        </div>
      </div>
    );
  }
}