import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import {Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<WelcomeScreen/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
