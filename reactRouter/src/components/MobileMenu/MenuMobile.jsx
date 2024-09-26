import React, { useState } from 'react';
import './MenuMobile.css'; // Certifique-se de criar o arquivo CSS correspondente

import { Link } from 'react-router-dom';

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isChecked, setIsChecked] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsChecked(!isChecked)

    };

    return (
        <div className='menuMobile-container'>
            <div className="menu-icon">
                <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" checked={isChecked} style={{ display: 'none' }} />
                <label onClick={toggleMenu} class="icon-menu" for="check-icon">
                    <div class="bar bar--1"></div>
                    <div class="bar bar--2"></div>
                    <div class="bar bar--3"></div>
                </label>
            </div>
            <ul className={`side-menu ${isOpen ? 'openSideMenu' : ''}`}>
                <li className='user-infos-menu'>
                    <figure>
                        <img src="https://www.designi.com.br/images/preview/12161378.jpg" alt="" />
                    </figure>
                    <p>Your Name</p>
                </li>
                <li className="menu-mobile-container">
                    <a className='menu-mobile-item' href="#home" onClick={toggleMenu}>
                        <span className='material-symbols-outlined'>home</span>
                        <p>Home</p>
                    </a>
                </li>
                <li className="menu-mobile-container">
                    <a className='menu-mobile-item' href="#produtos" onClick={toggleMenu}>
                        <span className='material-symbols-outlined'>shopping_bag</span>
                        <p>Produtos</p>
                    </a>
                </li>
                <li className="menu-mobile-container">
                    <a className='menu-mobile-item' href="#sobre" onClick={toggleMenu}>
                        <span className='material-symbols-outlined'>info</span>
                        <p>Sobre</p>
                    </a>
                </li>
                <li className="menu-mobile-container">
                    <a className='menu-mobile-item' href="#contato" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">contact_page</span>
                        <p>Contatos</p>
                    </a>
                </li>
                <div className="menu-icons">
                    <Link to="/products" className="material-symbols-outlined">shopping_cart</Link>
                    <a className='material-symbols-outlined'>person</a>
                </div>
            </ul>
        </div>
    );
};

export default MenuMobile;
