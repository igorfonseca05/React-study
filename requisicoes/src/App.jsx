
import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {data, setData} = useState('')

  useEffect(() => {
   async function getData(){
      try {
        const dados = await fetch("http://localhost:3000/games")
        
        if(!dados.ok) {
          throw new Error('Não foi possivel obter dados')
        }
        
        console.log(await dados.json())
        // toast.success('dados obtidos com sucesso')
        
      } catch (error) {
        toast.error(error.message)
        // console.log(error)
      }
    }

    getData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu Projeto React</h1>
        <p>Esta é uma página inicial simples para começar a trabalhar com requisições em React.</p>
        <button>Fazer Requisição</button>
        <ToastContainer />
      </header>
    </div>
  )
}

export default App
