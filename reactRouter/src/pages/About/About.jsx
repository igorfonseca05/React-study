import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo à Minha Loja Online, onde oferecemos uma vasta seleção de eletrônicos e acessórios de alta qualidade. 
        Nossa missão é fornecer produtos inovadores que atendam às necessidades e expectativas dos nossos clientes.
      </p>
      <h2>Missão</h2>
      <p>
        Nossa missão é oferecer produtos de alta qualidade com excelente atendimento ao cliente, garantindo uma experiência de compra satisfatória e segura.
      </p>
      <h2>Visão</h2>
      <p>
        Ser reconhecida como uma loja online de referência no mercado de eletrônicos e acessórios, com uma base de clientes fiéis e satisfeitos.
      </p>
      <h2>Valores</h2>
      <ul>
        <li>Qualidade: Oferecemos apenas produtos que atendem aos mais altos padrões de qualidade.</li>
        <li>Inovação: Estamos sempre à procura de novas tecnologias e produtos que tragam inovação ao dia a dia dos nossos clientes.</li>
        <li>Confiança: Prezamos pela confiança e transparência em todas as nossas relações com clientes e parceiros.</li>
        <li>Excelência no Atendimento: Estamos comprometidos em oferecer um atendimento ao cliente excepcional, antes, durante e após a compra.</li>
      </ul>
    </div>
  );
}

export default About;
