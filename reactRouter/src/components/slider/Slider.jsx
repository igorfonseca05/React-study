import React from 'react'

import './Slider.css'

function Slider() {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/psd-premium/fones-de-ouvido-modernos-isolados-em-um-fundo-transparente-por-ia-generativa_921538-1873.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://png.pngtree.com/png-vector/20240513/ourlarge/pngtree-bluetooth-headset-earphones-true-png-image_12443025.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://e7.pngegg.com/pngimages/425/331/png-clipart-rog-swift-4k-hdr-gaming-monitor-pg27uq-nvidia-g-sync-computer-monitors-4k-resolution-ultra-high-definition-television-nvidia-television-electronics.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider