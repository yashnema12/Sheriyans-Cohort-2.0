import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/men' element={<Men/>}/>
          
          <Route path='/about/:id' element={<RandomAbout/>} />
        </Routes>
    </div>
  )
}

export default App
