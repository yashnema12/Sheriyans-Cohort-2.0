import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodex from './pages/Kodex'
import Kodr from './pages/Kodr'

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}>
      
      <Route path='/courses/kodr' element={<Kodr/>}/>
      <Route path='/courses/kodex' element={<Kodex/>}/>
      </Route>

      </Routes>
    </div>
  )
}

export default App
