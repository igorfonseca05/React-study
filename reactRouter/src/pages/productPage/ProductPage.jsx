import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
    // Exemplo de dados do produto
    const product = {
        title: "Produto Exemplo",
        description: "Este é um produto incrível que você vai adorar!",
        price: "R$ 199,99",
        imageUrl: "https://via.placeholder.com/400",
        details: "Aqui você encontra os detalhes completos do produto, suas especificações e outras informações relevantes."
    };

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <button className="buy-button">Comprar Agora</button>
                </div>
            </div>
            <div className="product-details">
                <h2>Detalhes do Produto</h2>
                <p>{product.details}</p>
            </div>
        </div>
    );
};

export default ProductPage;
