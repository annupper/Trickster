import React from 'react';
import "./homeBody.css"

class HomeBody extends React.Component {

  render() {
    return (
    
      <div className="homeBody">
        <div className="logoLine">
        <img className="logoEnot" src="./logoEnot.png" alt=""/></div>
        <div className="home-boxes">
        <div>
          <h2>Captura</h2>
          <p>Captura ideas e inspiración en notas, sketches e imágenes.</p>
        </div>
        <div>
          <h2>Gestiona</h2>
          <p>Gestiona todo, desde grandes proyectos hasta momentos personales.</p>
        </div>
        <div>
          <h2>Un solo lugar</h2>
          <p>Un solo lugar para tus notas, ideas, listas y recordatorios.</p>
        </div>
        </div>


        <h3>4 Columns</h3>
<div class="container">
  <div class="row">
    
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="box">
        <p>class="col-xs-12 col-sm-6 col-md-3"</p>
      </div>
    </div>
    
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="box">
        <p>class="col-xs-12 col-sm-6 col-md-3"</p>
      </div>
    </div>
    
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="box">
        <p>class="col-xs-12 col-sm-6 col-md-3"</p>
      </div>
    </div>
    
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="box">
        <p>class="col-xs-12 col-sm-6 col-md-3"</p>
      </div>
    </div>
    
  </div>
</div>
      </div>

      
 
    )
  }
};

export default HomeBody;