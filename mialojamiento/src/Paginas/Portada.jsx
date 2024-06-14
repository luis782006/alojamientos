import React from 'react'
import Explora from '../Componentes/Explora';
import HomeCard from '../Componentes/HomeCard';
import '../Styles/portada.css'

function Portada() {
  return (
    <div className='fondo-portada'>
        <div className='contenedor-text'>
            <Explora />
        </div>
        <div className='contenedor-card'>
            <HomeCard />
        </div>
    </div>
  )
}

export default Portada