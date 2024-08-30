import React from 'react'

import './Slider.css'

function Slider() {
    return (
        <div className='slider-container'>
            <div  id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="bg2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="bg3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="bg.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                {/* <div className="carousel-item active">
                        <div className='slider-content'>
                            <div className="home-banner">
                                <h1>Bem-vindo à Web/Shop</h1>
                                <p>Cadastre-se agora e descubra produtos incríveis com os melhores preços. Qualidade e inovação esperam por você!</p>
                                <button className='btn shop-now-button'>
                                    Compre agora
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </div>
                            <img src="fundo (1).png" className="d-block w-100" alt="..." />
                        </div>
                    </div> */}

                <button className="carousel-control-prev button-slider" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className=".icon" aria-hidden="true">&#10094;</span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next button-slider" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className=".icon" aria-hidden="true">&#10095;</span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider