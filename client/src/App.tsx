import './App.css'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/Homepage/Home'
import RegisterPage from './pages/Authentication/Register'
import LoginPage from './pages/Authentication/Login'
import LandingPage from './pages/Landingpage/Landing'
import React from 'react'


const App: React.FC = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
   </Router>
  )
}

export default App
