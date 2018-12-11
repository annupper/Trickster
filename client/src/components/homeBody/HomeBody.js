import React from 'react';
import "./homeBody.css"

class HomeBody extends React.Component {

  constructor() {
    super();
  }

  render() {
 

    return (
    
      <div className="homeBody">
          <h1>ENOT</h1>
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
      </div>
 
    )
  }
};

export default HomeBody;