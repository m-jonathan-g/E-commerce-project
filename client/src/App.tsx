import './App.css'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/Homepage/Home'
import RegisterPage from './pages/Authentication/Register'
import LoginPage from './pages/Authentication/Login'
import LandingPage from './pages/Landingpage/Landing'
import React from 'react'
import { AddProduct } from './pages/Products/AddProduct'
import { MenuDisplay } from './pages/Menu/MenuDisplay'
import { Contact } from './pages/Contact/Contact'
import { About } from './pages/About/About'


const App: React.FC = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/menu' element={<MenuDisplay/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </Router>
  )
}

export default App
