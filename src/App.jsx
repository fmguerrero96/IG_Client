import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import CreatePost from './components/CreatePost'
import Layout from './components/Layout'
import Profile from './components/Profile'
import UserProfile from './components/UserProfile'
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
          <Route path='/create' element={<CreatePost/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/user/:id' element={<UserProfile/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
