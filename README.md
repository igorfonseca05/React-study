![alt text](imgs/React-capa.png)

**O que é o React?**

O **React** é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, desenvolvida e mantida pelo Facebook. É amplamente utilizada para criar aplicações web de página única (SPA) e permite o desenvolvimento de interfaces dinâmicas e interativas.

## Quando usar o React?

- **Desenvolvimento de SPAs:** Ideal para aplicações que precisam de uma interface interativa e reativa.
- **Aplicações com muitos componentes:** Quando sua aplicação possui múltiplos componentes que precisam se atualizar em tempo real, o React é uma excelente escolha.
- **Prototipagem rápida:** React permite a criação de protótipos de forma rápida, facilitando a iteração e experimentação.

## Quando não usar o React?

- **Aplicações simples:** Para aplicações pequenas e simples, o uso de React pode ser excessivo. Bibliotecas mais simples ou até mesmo JavaScript puro podem ser suficientes.
- **Projetos que não requerem atualizações dinâmicas:** Se sua aplicação não precisa de uma interface interativa, pode não haver necessidade de usar React.

## Para que serve o React?

O React serve para facilitar a criação de interfaces de usuário, permitindo que desenvolvedores construam componentes reutilizáveis e gerenciem o estado da aplicação de forma eficiente. Ele é especialmente útil em aplicações onde a atualização de dados deve ser refletida na interface em tempo real.

## Como funciona o React?

O React utiliza um conceito chamado **DOM virtual**, que é uma representação leve do DOM real. Ao invés de manipular diretamente o DOM (o que pode ser lento), o React faz alterações no DOM virtual e depois aplica essas alterações ao DOM real de forma eficiente, minimizando o número de operações necessárias.

## Conteúdo do curso

| **Seção** | **Título**                          | **Descrição**                                                                                           |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Seção 1   | Introdução                          | Introdução aos conceitos básicos do React, sua filosofia e características principais.                  |
| Seção 2   | Fundamentos do React                | Estudo dos conceitos fundamentais, incluindo componentes, props e estado.                               |
| Seção 3   | Avançando com React                 | Exploração de recursos avançados do React, como ciclo de vida e gerenciamento de estado.                |
| Seção 4   | React e CSS                         | Como aplicar estilos em componentes React, utilizando CSS e CSS-in-JS.                                  |
| Seção 5   | Formulários com React               | Desenvolvimento e gerenciamento de formulários, incluindo validação e manipulação de eventos.           |
| Seção 6   | Projeto Secret Word                 | Criação de um projeto prático utilizando os conceitos aprendidos para construir um jogo de palavras.    |
| Seção 7   | Requisições HTTP com React          | Implementação de chamadas de API e gerenciamento de dados no React.                                     |
| Seção 8   | React Router                        | Introdução à biblioteca React Router para gerenciamento de rotas em aplicações React.                   |
| Seção 9   | Context API                         | Aprendizado sobre o Context API para gerenciamento de estado global em aplicações React.                |
| Seção 10  | Projeto MiniBlog                    | Desenvolvimento de um mini blog, aplicando o conhecimento adquirido nas aulas anteriores.               |
| Seção 11  | Entendendo hooks do React           | Exploração dos hooks do React, como useState e useEffect, e como utilizá-los em componentes funcionais. |
| Seção 12  | Projeto ReactGram                   | Construção de uma aplicação de rede social simples, utilizando os hooks do React.                       |
| Seção 13  | Deploy de projetos no React         | Técnicas e práticas para implantar aplicações React em servidores e serviços de hospedagem.             |
| Seção 14  | Apêndice 1: JavaScript moderno      | Introdução ao JavaScript moderno, incluindo ES6 e novas funcionalidades da linguagem.                   |
| Seção 15  | Apêndice 2: Introdução a APIs       | Fundamentos sobre APIs, como funcionam e como utilizá-las nas aplicações React.                         |
| Seção 16  | Apêndice 3: Setup do TypeScript     | Configuração do ambiente TypeScript para desenvolvimento em React.                                      |
| Seção 17  | React com TypeScript                | Aprendizado sobre como utilizar TypeScript em projetos React, garantindo tipos e segurança.             |
| Seção 18  | Projeto em React com API TypeScript | Desenvolvimento de uma aplicação React utilizando TypeScript e consumindo uma API.                      |
| Seção 19  | Conclusão e próximos passos         | Resumo do curso e sugestões de como continuar o aprendizado e aplicar os conhecimentos adquiridos.      |

# Minhas notas de react

# Seção 3 - Avançando com React

## 35. Imagens públicas no React

Vamos aprender como trabalhar com imagens publicas dentro do react. Para isso adicionei a imagem que voce quer adicionar ao seu projeto e adicione na pasta `public`. O código abaixo mostra como podemos fazer isso

```js
function App() {
    return {
        <div>
            <div> <img scr='/nomeDoArquivo.jpg'> </img> </div>
        </div>
    }
}
```

## 36. Imagens em src

Vamos aprender a como carregar imagens da pasta `assets` dentro de `src`:

```js

// O nome dado a imagem tem que ser em maiscula
import MyImg from './assets/nomeDoArquivo.jpg'

function App() {
    return {
        <div>
            <div> <img src= {MyImg}> </img> </div>
        </div>
    }
}
```

## 37. O que são hooks?

Um hook no React é uma função especial que permite usar recursos como estado e efeitos colaterais em componentes funcionais.

Os hooks mais comuns são:

- **useState** → Gerencia o estado local do componente.

- **useEffect** → Executa efeitos colaterais (ex.: requisições, manipulação do DOM).

- **useContext** → Acessa valores do contexto sem precisar de props.

Eles seguem regras específicas, como só serem chamados no topo do componente e nunca dentro de loops ou condicionais. Além disso podemos cria-los e nesse caso os chamamos de `custom hook`

## 38. useState na prática

Vejamos como usar o useState

```js
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // Estado inicial = 0

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

No código acima temos que

1. `useState(0)` → Cria um estado contador com valor inicial 0.

2. `setContador` → Atualiza o estado.

3. Quando o botão é clicado, `setContador(contador + 1)` incrementa o valor e o componente **re-renderiza** com o novo estado. 🚀

## 39. Renderização de listas

## 40. A propriedade key

## 41. Previous state

## 42. Renderização condicional

## 43. if e else no JSX

## 44. Introdução às props

## 45. Destructuring em props

## 46. Reaproveitamento de componentes

## 47. Renderização de lista em componente

## 48. Fragments

## 49. A prop children

## 50. Função como prop

## 51. State lift

---

![alt text](<imgs/footer react.png>)
