
import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFetch } from './hooks/useFetch';

function App() {

  const [data, setData] = useState([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [price, setPrice] = useState('')
  const [releaseDate, setReleaseData] = useState('')
  const [developer, setDeveloper] = useState('')

  const [removedData, setRemovedData] = useState('')

  const url = 'http://localhost:3000/games'

  const {data: myData, httpConfig} = useFetch(url)

  useEffect(() => {
    setData(myData)

  }, [myData])


  async function handleForm(e) {
    e.preventDefault()

    const gameToBeAdded = {
      title,
      genre,
      price,
      releaseDate,
      developer
    }

    httpConfig(gameToBeAdded, 'POST')
    

    // try {

    //   const res = await fetch('http://localhost:3000/games', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(gameToBeAdded)
    //   })


    //   if (!res.ok) {
    //     throw new Error('Erro ao adicionar dado')
    //   }

    //   // Adicionando carregamento dinâmico do dado
    //   const dataAdded = await res.json()
    //   setData((previousState) => [...previousState, dataAdded])

    //   toast.success('Dado adicionado com sucesso')


    // } catch (error) {
    //   console.log(error)

    //   toast.error(error.message)
    // }

  }

  // async function handleDelete(id) {
  //   try {
  //       const res = await fetch(`http://localhost:3000/games/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': "application/json"
  //       }
  //     })

  //     if(!res.ok) {
  //       throw new Error('Dado não removido')
  //     }

  //     toast.success('Dado removido')
  //     setRemovedData(await res.json())

  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }

  return (
    <div className='grid-container'>
      <header className="App-header">
        <h1>Bem-vindo ao Meu Projeto React</h1>
        <p>Esta é uma página inicial simples para começar a trabalhar com requisições em React.</p>
      </header>
      <div>
        <h2 className='result'>Dados obtidos: </h2>
        <ul className='dataContainer'>
          {data?.map((game) => (
            <li key={game.id}>
              <p>{game.title}</p>
              {/* <span onClick={(e) => handleDelete(game.id)} className="material-symbols-outlined">
                delete
              </span> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="form-container">
        <form onSubmit={handleForm}>
          <h2 style={{ color: "black" }}>Adicionar Novo Jogo</h2>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Gênero"
            value={genre}
            onInput={(e) => setGenre(e.target.value)}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Preço"
            value={price}
            onInput={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="date"
            name="releaseDate"
            placeholder="Data de Lançamento"
            value={releaseDate}
            onInput={(e) => setReleaseData(e.target.value)}
            required
          />
          <input
            type="text"
            name="developer"
            placeholder="Desenvolvedor"
            value={developer}
            onInput={(e) => setDeveloper(e.target.value)}
            required
          />
          <button type="submit">Adicionar Jogo</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
