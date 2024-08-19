import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Filtrar Produtos</h2>
            
            <div className="filter-section">
                <h3>Categoria</h3>
                <ul>
                    <li><input type="checkbox" id="eletronicos" /> <label htmlFor="eletronicos">Eletrônicos</label></li>
                    <li><input type="checkbox" id="acessorios" /> <label htmlFor="acessorios">Acessórios</label></li>
                    <li><input type="checkbox" id="informatica" /> <label htmlFor="informatica">Informática</label></li>
                </ul>
            </div>
            
            <div className="filter-section">
                <h3>Preço</h3>
                <ul>
                    <li><input type="radio" name="price" id="0-50" /> <label htmlFor="0-50">R$ 0 - R$ 50</label></li>
                    <li><input type="radio" name="price" id="50-100" /> <label htmlFor="50-100">R$ 50 - R$ 100</label></li>
                    <li><input type="radio" name="price" id="100+" /> <label htmlFor="100+">R$ 100+</label></li>
                </ul>
            </div>
            
            <div className="filter-section">
                <h3>Cor</h3>
                <ul>
                    <li><input type="checkbox" id="preto" /> <label htmlFor="preto">Preto</label></li>
                    <li><input type="checkbox" id="branco" /> <label htmlFor="branco">Branco</label></li>
                    <li><input type="checkbox" id="vermelho" /> <label htmlFor="vermelho">Vermelho</label></li>
                </ul>
            </div>
            
            <div className="filter-section">
                <h3>Marca</h3>
                <ul>
                    <li><input type="checkbox" id="marcaA" /> <label htmlFor="marcaA">Marca A</label></li>
                    <li><input type="checkbox" id="marcaB" /> <label htmlFor="marcaB">Marca B</label></li>
                    <li><input type="checkbox" id="marcaC" /> <label htmlFor="marcaC">Marca C</label></li>
                </ul>
            </div>

            <button className="apply-filters-button">Aplicar Filtros</button>
        </div>
    );
};

export default Sidebar;
