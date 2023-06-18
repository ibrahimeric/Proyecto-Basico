import React from 'react'
import Img512 from '../img/logo512.png'
import '../Styles/Imagenes.css'

const Imagenes = () => {
    return (
        <>
        <div>
            <h1></h1>
        </div>
        <img
            src={Img512}
            className='img512-rojo'
        ></img>
        <img
            src={Img512}
            className='img512-negro'
        ></img>
        <br />
        <img
            src={Img512}
            className='img512-verde'
        ></img>
        <img
            src={Img512}
            className='img512-azul'
        ></img>
        </>
    )
}

export default Imagenes
