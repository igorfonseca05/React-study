import React from 'react';
import './ProductCard.css';

import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

  function handleTitle (e) {
    const CardTitle = e.currentTarget.querySelector('.card-title')

    setTimeout(() => {
      console.log(CardTitle.innerText)
    }, 1000)

  
  }

  return (
    <Link to={`/produtos/${product.id}`} className="card" >
      <img src={product.url_imagem} alt={product.nome} />
      <div className="card-body" title={product.nome}>
        <h3 className="card-title">{product.nome}</h3>
        {/* <p className="card-description">{product.descricao}</p> */}
        <p className="card-price">R$ {product.preco.toFixed(2)}</p>
        <p className="card-category">Categoria: {product.categoria}</p>
        <p className="card-stock">Em estoque: {product.quantidade_estoque}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
