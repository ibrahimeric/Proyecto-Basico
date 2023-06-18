import React from 'react';
import '../Styles/Principal.css';
import Boton from './Boton.jsx';
import Imagenes from './Imagenes.jsx';
import Form from '../Components/Form.jsx';
import Saludar from '../Components/Saludar.jsx';
import ImgLogo from '../img/logo192.png';

const Principal = () => {
    const saludar = 'Hola'
    // objeto
    const datosAlumno = {
        nombre : 'Eric',
        apellido : 'Ibrahim',
        edad : 25,
        confirmado: true,
        img: ImgLogo,
    }

    return (
        <div className='contenido-principal'> 
            <Imagenes></Imagenes>
            <Form></Form>
            <Boton></Boton>
            <Saludar
                saludar={saludar}
                datosAlumno={datosAlumno}
            ></Saludar>
        </div>
    )
}

export default Principal
