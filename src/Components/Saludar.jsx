import React from 'react'

const Saludar = (props) => {    
    return (
        <div>
            <h2 className='datos'>
                Saludar (Props)
                <br />
                {props.saludar}

                {` 
                    ${props.datosAlumno.nombre}  
                    ${props.datosAlumno.apellido}
                `}
            </h2>
            <h2 className='datos'>
                {` 
                    ${props.datosAlumno.edad}  
                    Confirmado ${props.datosAlumno.confirmado}
                `}
            </h2>
            <img
                src={props.datosAlumno.img}
            />
        </div>
    )
}

export default Saludar
