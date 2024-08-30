import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import MenuMobile from '../MobileMenu/MenuMobile';

const Navbar = () => {

  const [hideMenu, setHideMenu] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  const [inputSearchOpen, setInputSearchOpen] = useState('')

  function handleScroll() {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      setHideMenu(true)
    } else {
      setHideMenu(false)
    }

    setLastScrollTop(currentScrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  function handleInputSearch(e) {
    if (e.target.tagName === 'SPAN') {
      setInputSearchOpen('open')
    } else {
      setInputSearchOpen('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleInputSearch)
  }, [])

  return (
    <nav className={`navbar ${hideMenu ? 'navbar-hide' : 'navbar-show'}`}>
        <MenuMobile></MenuMobile>
      <div className="logo">
        <img src="logo_identical.svg" alt="" />
        <Link to={'/'} className='Link-home'>Web/Shop</Link>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Contato</Link>
        </li>
      </ul>
      <ul className='iconAndSearchMenu'>
        <form className="container-input">
          <input type="text" placeholder="Search" name="text" className={`input-search ${inputSearchOpen ? 'open' : ''}`} />
          <span class="material-symbols-outlined search">search</span>
        </form>
        <li className="nav-item">
          <Link to="/products" className="material-symbols-outlined">shopping_cart</Link>
        </li>
        <li className="nav-item" style={{ cursor: 'pointer' }}>
          <a className='material-symbols-outlined'>person</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

