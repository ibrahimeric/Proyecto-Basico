import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>Acerca de</h6>
                                <p className="text-justify">SitioWeb.com <i>CODIGO ABIERTO SIMPLE </i> es una iniciativa para ayudar a los programadores que inician a escribir codigo. Este sitio permite que sea mas eficiente el manejo de los componentes en Reactjs y buscar la simpleza. Ayudaremos a poder construir conceptos en diferentes lenguajes de programacion que incluye C, C++, Java, Html, CSS, Bootstrap, JavaScript, PHP, Android, SQL y Algoritmos.</p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">Diseño UI</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                    <li><a href="http://scanfcode.com/category/templates/">Plantillas</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Enlaces</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/about/">Sobre nosotros</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contactanos</a></li>
                                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribuir</a></li>
                                    <li><a href="http://scanfcode.com/privacy-policy/">Politica de privacidad</a></li>
                                    <li><a href="http://scanfcode.com/sitemap/">Mapa</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2017 Todos los derechos reservados por
                                    <a href="#">Siteweb</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#" target='_blank' ><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#" target='_blank'><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="#" target='_blank'><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="#" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
