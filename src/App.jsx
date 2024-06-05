import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import Layout from './components/Layout'
import {Route, Routes} from "react-router-dom"
import { UserContextProvider } from './UserContext'

function App() {
  

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<WelcomeScreen/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<Layout/>}>
          <Route path='/homePage' element={<HomePage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  )
}

export default App
