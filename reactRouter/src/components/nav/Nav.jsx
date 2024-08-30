import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

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
      <div className="logo">
        <img src="logo_identical.svg" alt="" />
        <Link to={'/'} className='Link-home'>Web/Shop</Link>
      </div>
      <ul className="nav-links">
        <div className='first-part'>
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
        </div>
        <div className='second-part'>
          <form className="container-input">
            <input type="text" placeholder="Search" name="text" className={`input-search ${inputSearchOpen ? 'open' : ''}`} />
            {/* <svg fillRule="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
          </svg> */}
            <span class="material-symbols-outlined search">search</span>
          </form>
          <li className="nav-item">
            <Link to="/products" className="material-symbols-outlined">shopping_cart</Link>
          </li>
          <li className="nav-item" style={{ cursor: 'pointer' }}>
            <a className='material-symbols-outlined'>person</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

