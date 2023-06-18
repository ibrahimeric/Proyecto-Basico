import React from 'react'
import '../Styles/BarraNav.css';

const BarraNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#">Restaurante</a>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-tachometer-alt"></i>Panel</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link"><i className="far fa-address-book"></i>Direccion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="far fa-clone"></i>Componentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="far fa-calendar-alt"></i>Calendario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="far fa-chart-bar"></i>Graficos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="far fa-copy"></i>Documentos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default BarraNav
