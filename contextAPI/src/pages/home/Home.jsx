import React from 'react'

import { useContext } from 'react'

import './Home.css'
// import { useSenhaContext } from '../../context/SenhaContext'

// import { useLoginProvider } from '../../context/LoginContext'
import { LoginContext } from '../../context/LoginContext'

function Home() {

    const { value } = useContext(LoginContext)

    console.log(value)

    // const { senha } = useSenhaContext()

    return (
        <div className='site'>
            <nav className='item'>
                <h3>NavBar</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <aside className='item'>
                <p>Menu</p>
            </aside>
            <main className='item'>
                <h1>Conteudo</h1>
                <h3>Usuario está logado? </h3>
                {/* <p> ipsum doloriquam neque cum esse ipsum? Exercitationem mollitia esse expedita libero cupiditate voluptatem autem itaque in voluptate quaerat nulla ipsam nesciunt nostrum saepe, consectetur maiores molestiae. Maiores saepe nisi doloremque suscipit similique mollitia assumenda commodi, quo odio facilis eos doloribus porro necessitatibus voluptas autem optio accusamus recusandae cupiditate voluptates veniam illum harum cumque laborum qui! Nulla at, optio qui accusamus placeat nam. Harum dicta similique, nostrum praesentium odit hic beatae inventore exercitationem quaerat tempora aliquam quos ex, debitis error at ipsum nam minus! Voluptatibus placeat eos ullam. Nulla pariatur eligendi doloribus fuga mollitia eius, asperiores hic nemo tempore sed temporibus sunt perspiciatis consequatur tenetur ullam maiores quam obcaecati reiciendis sequi, animi excepturi rem natus fugit. Aliquam labore vel ipsam similique dolores eius facere mollitia maiores enim harum voluptatem dolorem expedita nulla velit necessitatibus amet, exercitationem nihil quaerat incidunt ullam officiis eligendi blanditiis deserunt perspiciatis. Voluptatem sapiente eos voluptatum necessitatibus molestiae est cum reiciendis assumenda. Culpa itaque, corporis earum fuga nesciunt sit delectus recusandae ad voluptate deserunt explicabo! eleniti minima? Quibusdam dolorem unde culpa maxime sapiente facilis. Quos, blanditiis sapiente.</p> */}
            </main>
            <footer className='item'>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default Home