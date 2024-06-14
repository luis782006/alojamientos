import React from 'react'
import '../Styles/explora.css';
import { Link } from "react-router-dom";

function Explora() {
  return (
    <div className='contendor-explora'>
      <h1>Explora</h1>
      <h3>El destino perfecto para tus próximas vacaciones.</h3>
      <p>¿Listo para tu próxima aventura? Descubre increíbles destinos para todos los gustos y presupuestos. 
         Desde playas paradisíacas hasta ciudades llenas de historia, ¡encuentra tu destino ideal!
       </p>
      <button className='boton-explora'>
      <Link to='/contacto'>
          Reserva Ya!!
      </Link>  
      </button>
    </div>
  )
}
export default Explora