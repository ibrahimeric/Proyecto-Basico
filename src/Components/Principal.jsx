import React from 'react'
import '../Styles/Principal.css'
import Boton from './Boton.jsx';
import Imagenes from './Imagenes.jsx';

const Principal = () => {
    return (
        <div className='contenido-principal'>
            <Boton></Boton>
            <Imagenes></Imagenes>
        </div>
    )
}

export default Principal
