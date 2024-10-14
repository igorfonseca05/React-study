import React from 'react'

import './ArticleCard.css'

function ArticleCard() {
    return (
        <article>
            <div className='article-description'>
                <h1 className='title-post'>Flexbox Descomplicado: Como Usar o Flex Grow para Layouts Flexíveis e Dinâmicos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis eligendi. Adipisci consequatur dolores veniam at.</p>
            </div>
            <figure className='article-figure'>
                <img src="https://dbriefing.com.br/blog/wp-content/uploads/2017/10/blog-1.jpg" alt="" />
            </figure>
        </article>
    )
}

export default ArticleCard