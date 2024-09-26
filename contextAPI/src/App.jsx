
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
