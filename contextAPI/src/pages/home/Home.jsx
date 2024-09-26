import React from 'react'

import { useSenhaContext } from '../../context/SenhaContext'

function Home() {

    const { senha } = useSenhaContext()

    return (
        <div>
            <h1>HOME</h1>
            <p>Minha senha é {senha}</p>
        </div>
    )
}

export default Home