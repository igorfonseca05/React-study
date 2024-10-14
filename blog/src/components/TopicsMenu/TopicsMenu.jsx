
import React from 'react'
import { NavLink } from 'react-router-dom'

import './TopicsMenu.css'
import Menu from '../menu/Menu'

function TopicsMenu() {
    return (
        <>
            <div className='wrap-container'>
                <h1>Code Journal</h1>
            </div>
            <Menu />
        </>


    )
}

export default TopicsMenu