import React from 'react'
import '../Styles/Carousel.css';
import FirstSlide from '../img/first-slide.webp';
import SecondSlide from '../img/second-slide.webp';
import ThirdSlide from '../img/third-slide.webp';

const Carousel = () => {

    return (
        <>
            <div className='contenido-carousel'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={FirstSlide} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Carousel
