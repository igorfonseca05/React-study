import React, { useState } from 'react';
import './MenuMobile.css'; // Certifique-se de criar o arquivo CSS correspondente

import { Link } from 'react-router-dom';

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='menuMobile-container'>
            <div className="menu-icon">
                <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" style={{display: 'none'}} />
                <label onClick={toggleMenu} class="icon-menu" for="check-icon">
                    <div class="bar bar--1"></div>
                    <div class="bar bar--2"></div>
                    <div class="bar bar--3"></div>
                </label>
            </div>
            <div className={`side-menu ${isOpen ? 'openSideMenu' : ''}`}>
                {/* <button className="close-btn" onClick={toggleMenu}>×</button> */}
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#produtos" onClick={toggleMenu}>Produtos</a>
                <a href="#sobre" onClick={toggleMenu}>Sobre</a>
                <a href="#contato" onClick={toggleMenu}>Contato</a>
                <div className="menu-icons">
                    <a href="#search"><svg width="16" height="16"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="2" /></svg></a>
                    <Link to="/products" className="material-symbols-outlined">shopping_cart</Link>
                    <a className='material-symbols-outlined'>person</a>
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;
