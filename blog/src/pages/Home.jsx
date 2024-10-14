import React from 'react'

import './Home.css'
import TopicsMenu from '../components/TopicsMenu/TopicsMenu'
import Titles from '../components/titleSections/Titles'
import Menu from '../components/menu/Menu'
import ArticleCard from '../components/articleCard/ArticleCard'

function Home() {
    return (
        <>
            <TopicsMenu />
            <Titles />
            <section className='container container-home'>
                <main className='article-container'>
                    <ArticleCard />
                </main>
                <aside>
                    <div className="recent-post-card">
                        <img src="https://via.placeholder.com/150" alt="Imagem do Post" className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">Título do Post</h3>
                            <p className="post-date">Publicado em: 02/10/2024</p>
                            <p className="post-excerpt">Este é um pequeno resumo do conteúdo do post para chamar a atenção do leitor...</p>
                            <a href="#" className="read-more">Leia Mais</a>
                        </div>
                    </div>
                </aside>
            </section>
        </>

    )
}

export default Home