import React from 'react'
import './CardDeDestaques.css'

function CardDeDestaques({title, info, buttonText}) {
    return (
        <div className='highlight-card'>
            <h2>{title}</h2>
            <p>{info}</p>
            <button>{buttonText}</button>
        </div>
    )
}

export default CardDeDestaques