import React from 'react'
import ProductCard from '../../components/cards/ProductCard'
import './Home.css'

function Home({data}) {

  return (
    <div className='home'>
        <h1>Essa é a pagina home</h1>
        <div className='products-container'>
        {data?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ))}
        </div>
    </div>
  )
}

export default Home