
import React from 'react'
import { NavLink } from 'react-router-dom'

import './TopicsMenu.css'
import Menu from '../menu/Menu'

function TopicsMenu() {
    return (
        <>
            <div className='wrap-container'>
                <h1>Code Journal</h1>
                <h4>Seu guia diário para o desenvolvimento web e banco de dados.</h4>
            </div>
            <Menu />
        </>


    )
}

export default TopicsMenu