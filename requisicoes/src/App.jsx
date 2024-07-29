
import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
   async function getData(){
      try {
        const response = await fetch("http://localhost:3000/games")
        
        if(!response.ok) {
          throw new Error('Não foi possivel obter dados')
        }
        
        const dados = await response.json()

        setData(dados)
        console.log(dados)
        // toast.success('dados obtidos com sucesso')
        
      } catch (error) {
        toast.error(error.message)
        // console.log(error)
      }
    }

    getData()
  },[])

  // console.(data)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu Projeto React</h1>
        <p>Esta é uma página inicial simples para começar a trabalhar com requisições em React.</p>
        <h4>Os dados obtidos foram</h4>
        <ul>
          {
            data?.map((game) => (
              <li key={game.id}>{game.title}</li>
            ))
          }
        </ul>
        <ToastContainer />
      </header>
    </div>
  )
}

export default App
