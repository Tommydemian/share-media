import { useState, useMemo } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import themeSettings from './theme.ts'

// Components
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

//types: 
import { InitialState } from './types'

function App() {

  const mode = useSelector((state: InitialState) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile/:userid' element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
