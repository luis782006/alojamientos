import React from 'react';
import '../Styles/navegacion.css';
import Login from '../Componentes/Login';
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <div className='contenedor-menu'>
      <div className='logo'>
        <h2>HF</h2>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <Login />
        </ul>
      </div>
    </div>
  );
}

export default Navegacion;
