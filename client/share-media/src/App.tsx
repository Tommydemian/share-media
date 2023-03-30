import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/profile/:userid' element={ <Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
