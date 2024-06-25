import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/home.css';
import Navegacion from '../Componentes/Navegacion';
import Nosotros from '../Paginas/Nosotros';
import Contacto from '../Paginas/Contacto';
import Portada from '../Paginas/Portada';
import Hotel from '../Paginas/Hotel';
import Cabañas from '../Paginas/Cabañas';
import Apto from '../Paginas/Apto';

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
              <Route path="/hotel" element={<Hotel />} />              
              <Route path="/cabañas" element={<Cabañas />} /> 
              <Route path="/apto" element={<Apto />} /> 
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default Home;

