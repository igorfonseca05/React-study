
import React from 'react'
import { NavLink } from 'react-router-dom'

import './TopicsMenu.css'

function TopicsMenu() {
    return (
        <div className='wrap-container'>
            <h1>Code Journal</h1>
            <ul>
                <li>
                    <NavLink></NavLink>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default TopicsMenu