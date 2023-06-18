import React from 'react'
import '../Styles/Form.css';

const Form = () => {
    return (
        <>
            <div>

            </div>
            <form className='contenido-form'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Direccion de Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
                        <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con nadie.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Echa un vistazo</label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Form
