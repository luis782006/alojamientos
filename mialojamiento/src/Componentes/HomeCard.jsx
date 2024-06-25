import React from 'react'
import '../Styles/homecard.css'
import Playa from '../img/playa.jpg';
import Sierra from '../img/sierra.jpg';
import Ciudad from '../img/ciudad.jpg';
import { Link } from "react-router-dom";


function HomeCard () {
  return (
    <div className='contenedor-card'>

            <div className="card">
              <Link to='/hotel'>
                  <img src={Playa} alt="Hotel" />
                  <h2>Hotel</h2>
              </Link>
            </div>
            <div className="card">
              <Link to='/cabañas'>
                <img src={Sierra} alt="Cabañas" />
                <h2>Cabañas</h2>
              </Link>
            </div>          
            <div className="card">
              <Link to='/apto'>
                <img src={Ciudad} alt="Apto" />
                <h2>Apto</h2>
              </Link>
            </div>

    </div>
  )
}

export default HomeCard