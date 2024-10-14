import React from 'react'

import './ArticleCard.css'

function ArticleCard() {
    return (
        <article>
            <h1 className='title-post'>Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis eligendi. Adipisci consequatur dolores veniam at.</p>
            <figure>
                <img src="https://dbriefing.com.br/blog/wp-content/uploads/2017/10/blog-1.jpg" alt="" />
            </figure>
        </article>
    )
}

export default ArticleCard