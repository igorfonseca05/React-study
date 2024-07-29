
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

  const [newGame, setNewGame] = useState({
    title: '',
    genre: '',
    price: '',
    releaseDate: '',
    developer: ''
  });

  function handleChanges(e) {
    
    const {name, value} = e.target

      setNewGame({
        ...newGame,
        [name]: value
      })
  }

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

  function handleForm (e) {
      e.preventDefault()

      const game = {
        developer,
        genre,
        price,
        releaseDate,
        title
      }

      useEffect(() => {
        async function postData() {
          try {
            const postedData = await fetch('http://localhost:3000/games', {
              method: 'POST',
              headers: {
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(game)

            
            })

            if (!postedData.ok) {
              throw new Error('Não foi possivel adicionar dados')
            }

            toast.success('dados adicionados com sucesso')

            console.log(postedData)
    
          } catch (error) {
            toast.error(error.message)
            console.log(error)
          }
        }

        postData()
      }, [])

  }

  return (
    <div className='grid-container'>
       <header className="App-header">
        <h1>Bem-vindo ao Meu Projeto React</h1>
        <p>Esta é uma página inicial simples para começar a trabalhar com requisições em React.</p>
      </header>
      <div className="form-container">
        <form onSubmit={handleForm}>
          <h2 style={{ color: "black" }}>Adicionar Novo Jogo</h2>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            onChange={handleChanges}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Gênero"
            value={genre}
            onChange={handleChanges}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Preço"
            value={price}
            onChange={handleChanges}
            required
          />
          <input
            type="date"
            name="releaseDate"
            placeholder="Data de Lançamento"
            value={releaseDate}
            onChange={handleChanges}
            required
          />
          <input
            type="text"
            name="developer"
            placeholder="Desenvolvedor"
            value={developer}
            onChange={handleChanges}
            required
          />
          <button type="submit">Adicionar Jogo</button>
        </form>
      </div>
      <div>
        <h2 className='result'>Dados obtidos: </h2>
        <ul>
          {data?.map((game)=> (
             <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
