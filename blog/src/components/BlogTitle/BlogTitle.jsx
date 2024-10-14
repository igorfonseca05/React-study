import React from 'react'
import './BlogTitle.css'
import Menu from '../menu/Menu'

function BlogTitle() {
    return (
        <>
            <div className='wrap-container'>
                <div className='title-blog-container'>
                    <h1>Code Journal</h1>
                    <h4>Seu guia diário para o desenvolvimento web e banco de dados.</h4>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default BlogTitle