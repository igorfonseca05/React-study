import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../button/Button'

import "./Nav.css"

function Nav() {
    return (
        <>
            <header className='header-page'>
                <nav className='nav-container'>
                    <ul className='menu_itens_container'>

                        <li className="menu_item">
                            <NavLink to={'/'}>Home</NavLink >
                        </li>
                        <li className="menu_item">
                            <NavLink to={'/about'}>Sobre mim</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to={'/contact'}>Contato</NavLink>
                        </li>
                    </ul>
                    <div className='button_login_container'>
                        <Button innerText={'Sign In'}></Button>
                        <Button innerText={"Sign Up"}></Button>
                    </div>
                </nav>
            </header>
            <hr />
        </>
    )
}

export default Nav