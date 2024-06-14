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
              <Link to='/playa'>
                  <img src={Playa} alt="Playa" />
                  <h2>Playa</h2>
              </Link>
            </div>
            <div className="card">
              <Link to='/sierra'>
                <img src={Sierra} alt="Sierra" />
                <h2>Sierras</h2>
              </Link>
            </div>          
            <div className="card">
              <Link to='/ciudad'>
                <img src={Ciudad} alt="Ciudad" />
                <h2>Ciudad</h2>
              </Link>
            </div>

    </div>
  )
}

export default HomeCard