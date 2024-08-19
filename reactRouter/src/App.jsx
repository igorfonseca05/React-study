import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useFetch } from './hooks/UseFetch'

// Importando componentes
import Nav from './components/nav/nav'

// Importando paginas
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ProductPage from './pages/productPage/ProductPage'

function App() {

  const url = 'http://localhost:3000/produtos'

  const {data} = useFetch(url)

  // console.log(data)

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home data = {data}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/produtos/:id' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
