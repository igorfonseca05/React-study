 import 'bootstrap'
 import "bootstrap/dist/css/bootstrap.min.css"

import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useFetch } from './hooks/UseFetch'

// Importando componentes
import Nav from './components/nav/Nav'

// Importando paginas
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ProductPage from './pages/productPage/ProductPage'
import Grid from './components/grid/Grid'
import MenuMobile from './components/MobileMenu/MenuMobile'

function App() {

  const url = 'http://localhost:3000/produtos'

  const { data } = useFetch(url)

  // console.log(data)

  return (
    <>
        <Grid></Grid>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/about' element={<About />} />
          <Route path='/produtos/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
