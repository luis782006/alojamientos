import React from 'react'
import Usuario from '../img/usuario.jpg'
import '../Styles/login.css'
import { Link } from "react-router-dom";


{/* Est componente refiere a la presentacion del acceso a la pagina LoginUser*/}
function Login ()  {


    return (
        <div className='contenedor-login'>
            <img src={Usuario} alt="usuario" />
            <Link to='/loginUser'>
                <p>Usuario</p>
            </Link>
        </div>
    )
}



export default Login

