import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import {Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<WelcomeScreen/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/homePage' element={<HomePage/>} />
    </Routes>
  )
}

export default App
