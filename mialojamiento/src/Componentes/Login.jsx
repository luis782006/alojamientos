import React from 'react'
import Usuario from '../img/usuario.jpg'
import '../Styles/login.css'

function Login ()  {


    return (
        <div className='contenedor-login'>
            <img src={Usuario} alt="usuario" />
            <p>Usuario</p>

        </div>
    )
}



export default Login

