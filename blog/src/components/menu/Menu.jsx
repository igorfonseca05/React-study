import React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

function Menu() {
    return (
        <>
            <div className='menu-container'>
                <ul>
                    <li>
                        <NavLink>Front-end</NavLink>
                    </li>
                    <li>
                        <NavLink>Back-end</NavLink>
                    </li>
                    <li>
                        <NavLink>Banco de dados</NavLink>
                    </li>
                    <li>
                        <NavLink>Modelagem de dados</NavLink>
                    </li>
                </ul>
                {/* <hr /> */}
            </div>
        </>
    )
}

export default Menu