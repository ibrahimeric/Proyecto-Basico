import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Boton.css';
import { useState } from 'react'; /* Hooks */

function Boton() {

    const [contador, setContador] = useState(0) /* contador = variable y set manipula variable */

    // const [nombre, setNombre] = useState("Eric")

    function incrementar() {
        setContador(contador + 1)

        if (contador === 10) {
            alert("hola");
        }
    }
    
    const decrementar = () => {
        if (contador > 0) setContador(contador - 1);
    }
    const reiniciar = () => {
        setContador(0);
    };

    return (
        <div className='contenido-boton'>
            <h1>Boton</h1>
            <br />
            <button className='btn btn-primary' onClick = {incrementar}>
                INCREMENTAR</button>

            <button className='btn btn-danger' onClick = {decrementar}>
                RESTAR</button>

            <button className='btn btn-warning' onClick = {reiniciar}>
                REINICIAR</button>

            <br />
            contador={contador}
            <br />
        </div>
    );
}

export default Boton
