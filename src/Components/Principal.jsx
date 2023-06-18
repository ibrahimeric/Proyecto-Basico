import React from 'react';
import '../Styles/Principal.css';
import Boton from './Boton.jsx';
import Imagenes from './Imagenes.jsx';
import Form from '../Components/Form.jsx';

const Principal = () => {
    return (
        <div className='contenido-principal'>
            <Boton></Boton>
            <Imagenes></Imagenes>
            <Form></Form>
        </div>
    )
}

export default Principal
