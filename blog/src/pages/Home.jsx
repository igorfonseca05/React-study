import React from 'react'

import './Home.css'
import TopicsMenu from '../components/TopicsMenu/TopicsMenu'
import Titles from '../components/titleSections/Titles'
import Menu from '../components/menu/Menu'

function Home() {
    return (
        <>
            <TopicsMenu />
            <Titles />
            <section className='container container-home'>
                <main className='article-container'>
                    <article>
                        <figure>
                            <img src="https://dbriefing.com.br/blog/wp-content/uploads/2017/10/blog-1.jpg" alt="" />
                        </figure>
                        <h1 className='title-post'>Post</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis eligendi. Adipisci consequatur dolores veniam at. In dolor odit, quas maxime sunt culpa. Porro provident dicta eligendi placeat veritatis laboriosam, et perspiciatis eius perferendis eos quia vero expedita natus, harum voluptate hic officia cum cumque minima eveniet fugit deleniti? Quae placeat itaque et in! Aperiam saepe necessitatibus cum, qui vero, quas facere quis debitis architecto voluptatem sapiente aspernatur repudiandae, aut perspiciatis beatae. Laudantium ullam ducimus, illo nam mollitia corrupti non amet quos quod optio qui molestiae, doloremque hic nostrum dolor doloribus laboriosam maiores deserunt nulla incidunt esse voluptate culpa. Deserunt nisi laborum nostrum itaque quaerat ipsum omnis officiis doloremque libero repudiandae perspiciatis obcaecati ullam tempore illum illo pariatur optio, iste rem, dolorum veniam laudantium. Rem necessitatibus facilis animi ea totam omnis, consequuntur itaque soluta. Necessitatibus natus velit odit excepturi id autem, vero, exercitationem nobis incidunt, voluptas odio eum cupiditate voluptatem.</p>
                    </article>
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