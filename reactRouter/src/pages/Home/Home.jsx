import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/cards/ProductCard'
import './Home.css'

import SideBar from '../../components/SideBar/SideBar'

function Home({ data }) {

  return (
    <div className='home'>
      <div className="home-header">
        <div className="home-banner">
          <h1>Bem-vindo à Web/Shop</h1>
          <p>Encontre os melhores produtos com os melhores preços. Qualidade e inovação ao seu alcance.</p>
          <button className="shop-now-button">Compre Agora</button>
        </div>
      </div>
      <div className="highlights-section">
        <div className="highlight-card">
          <h2>Ofertas Especiais</h2>
          <p>Aproveite as melhores ofertas do mês!</p>
          <button>Ver Ofertas</button>
        </div>
        <div className="highlight-card">
          <h2>Novos Produtos</h2>
          <p>Confira as novidades que acabaram de chegar.</p>
          <button>Ver Novidades</button>
        </div>
      </div>

      <section className='products-section'>
        <SideBar />
        <div className='products-container'>
          {data?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home