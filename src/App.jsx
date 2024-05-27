import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import {Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<WelcomeScreen/>} />
    </Routes>
  )
}

export default App
