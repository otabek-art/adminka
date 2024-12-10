import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Eror from './pages/Eror'
import Header from './components/Header/Header'
import Admin from './pages/Admin'

const App = () => {
  return (
<>
<Header/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='*' element={<Eror/>} />
<Route path='/admin' element={<Admin/>} />
</Routes>
</>
  )
}

export default App
