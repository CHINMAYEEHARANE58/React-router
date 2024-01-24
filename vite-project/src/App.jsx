import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contacts' element={<Contacts/>} />
    </Routes>
  )
}

export default App
