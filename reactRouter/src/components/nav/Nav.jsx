import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {

  const [hideMenu, setHideMenu] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  function handleScroll () {
    const currentScrollTop = window.scrollY;

    if(currentScrollTop > lastScrollTop) {
      setHideMenu(true)
    } else {
      setHideMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])


  return (
    <nav className={`navbar ${hideMenu ? 'navbar-hide' : 'navbar-show'}`}>
      <div className="logo">
        <h1>Web/Shop</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <div className="cart-icon">
        <a href="#"><span className='material-symbols-outlined'>shopping_cart</span></a>
      </div>
    </nav>
  );
};

export default Navbar;

