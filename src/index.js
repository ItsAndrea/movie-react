import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Componente de tipo funcional en react
function Funcional(props) {
  return (
  <div>
    <h1>{props.texto}</h1>
    <p>{props.cont}</p>
  </div>
  );
}

ReactDOM.render(<Funcional texto="Mi titulo" cont="Parrafo"/>, document.getElementById("root"));