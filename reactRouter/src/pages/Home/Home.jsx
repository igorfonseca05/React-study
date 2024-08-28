import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/cards/ProductCard'
import './Home.css'

import SideBar from '../../components/SideBar/SideBar'
import Grid from '../../components/grid/Grid'
import CardDeDestaques from '../../components/card-destaque/CardDeDestaques'
import Slider from '../../components/slider/Slider'

// Card de destaque

function Home({ data }) {

  return (
    <div className='home'>
      <div className="home-header">
        <div className="home-banner">
          <h1>Bem-vindo à Web/Shop</h1>
          <p>Cadastre-se agora e descubra produtos incríveis com os melhores preços. Qualidade e inovação esperam por você!</p>
          <button className='btn shop-now-button'>
            Compre agora
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
        <div className='slider'>
          <Slider></Slider>
        </div>
      </div>
      <div className="highlights-section">
        <CardDeDestaques 
          title={'Ofertas Especiais'} 
          info={'Aproveite as melhores ofertas do mês'} 
          buttonText={'Ver Ofertas'}/>
        <CardDeDestaques 
          title={'Novos Produtos'} 
          info={'Confira as novidades que acabaram de chegar.'} 
          buttonText={'Ver Novidades'}/>
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