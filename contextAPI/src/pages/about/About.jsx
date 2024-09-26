import React from 'react'

import { useSenhaContext } from '../../context/SenhaContext'

function About() {

    const senha = useSenhaContext()

    return (
        <div>
            <h1>ABOUT</h1>
            <p>Posso acessar o valor da minha senha rota about: {senha}</p>
        </div>
    )
}

export default About