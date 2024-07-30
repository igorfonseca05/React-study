
import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData] = useState([])

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [price, setPrice] = useState('')
  const [releaseDate, setReleaseData] = useState('')
  const [developer, setDeveloper] = useState('')


  // async function handleForm(e) {
  //   e.preventDefault()

  //   const game = {
  //     title,
  //     genre,
  //     price,
  //     releaseDate,
  //     developer
  //   }

  //   try {

  //     const postedData = await fetch('http://localhost:3000/games', {
  //       method: 'POST', 
  //       headers: {
  //         'Content-type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: JSON.stringify(game)
  //     })

  //   } catch (error) {
  //     toast.error('Não foi possivel adicionar o dado')
  //   }


  // }

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/games")

        if (!response.ok) {
          throw new Error('Não foi possivel obter dados')
        }

        const dados = await response.json()

        setData(dados)
        // console.log(dados)
        // toast.success('dados obtidos com sucesso')

      } catch (error) {
        toast.error(error.message)
        // console.log(error)
      }
    }

    getData()
  }, [])

  async function handleForm(e) {
    e.preventDefault()

    const gameToBeAdded = {
      title,
      genre,
      price,
      releaseDate,
      developer
    }

    try {

      const res = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          "Accept": "application/json"
        },
        body: JSON.stringify(gameToBeAdded)
      })


      if (!res.ok) {
        throw new Error('Erro ao adicionar dado')
      }

      // Adicionando carregamento dinâmico do dado
      const dataAdded = await res.json()
      setData((previousState) => [...previousState, dataAdded])

      toast.success('Dado adicionado com sucesso')


    } catch (error) {
      console.log(error)

      toast.error(error.message)
    }

  }

  async function handleDelete(id) {
    console.log(id)
  }

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
              <span onClick={(e) => handleDelete(game.id)} className="material-symbols-outlined">
                delete
              </span>
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
