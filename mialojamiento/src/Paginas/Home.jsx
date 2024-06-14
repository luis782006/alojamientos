import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/home.css';
import Navegacion from '../Componentes/Navegacion';
import Nosotros from '../Paginas/Nosotros';
import Contacto from '../Paginas/Contacto';
import Portada from '../Paginas/Portada';
import Playa from '../Paginas/Playa';
import Sierra from '../Paginas/Sierra';
import Ciudad from '../Paginas/Ciudad';
import LoginUser from '../Paginas/LoginUser'

function Home() {
  return (
    <div>
      <Router>
        <div className='nav'>
          <Navegacion />
        </div>
        <main>
          <div className='fondo'>
            <Routes>
              <Route path="/" element={<Portada />} />
              <Route path="/home" element={<Portada />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} /> 
              <Route path="/playa" element={<Playa />} />              
              <Route path="/sierra" element={<Sierra />} /> 
              <Route path="/ciudad" element={<Ciudad />} /> 
              <Route path="/loginUser" element={<LoginUser />} /> 
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default Home;

