import React from 'react';
import "./homeBody.css"

class HomeInfo extends React.Component {

  render() {
    return (

      <div className="homeInfo">

      <div className="logoLine">
          <img className="logoEnot" src="./logoEnot.png" alt="" /></div>
       

        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-4">
              <div class="box">
                <h2>Capture</h2>
                <p>Capture ideas and inspiration in notes, sketches, and pictures.</p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4">
              <div class="box">
                <h2>Code snippets</h2>
                <p>Gestiona todo, desde grandes proyectos hasta momentos personales.</p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4">
              <div class="box">
                <h2>A single place</h2>
                <p>At work, at home, and everywhere in between</p>
              </div>
            </div>

          </div>
        </div>
        </div> 
    )
  }
};

export default HomeInfo;