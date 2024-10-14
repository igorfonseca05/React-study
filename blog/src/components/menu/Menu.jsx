import React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

function Menu() {
    return (
        <>
            <div className='menu-container container'>
                <ul>
                    <li>
                        <NavLink>All</NavLink>
                    </li>
                    <li>
                        <NavLink>Front-end</NavLink>
                    </li>
                    <li>
                        <NavLink>Back-end</NavLink>
                    </li>
                    <li>
                        <NavLink>Banco de dados</NavLink>
                    </li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default Menu