import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.url_imagem} alt={product.nome} />
      <div className="card-body">
        <h3 className="card-title">{product.nome}</h3>
        <p className="card-description">{product.descricao}</p>
        <p className="card-price">R$ {product.preco.toFixed(2)}</p>
        <p className="card-category">Categoria: {product.categoria}</p>
        <p className="card-stock">Em estoque: {product.quantidade_estoque}</p>
      </div>
    </div>
  );
};

export default ProductCard;
