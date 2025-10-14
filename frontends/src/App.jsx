import React from 'react'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSec from './components/HeroSec'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSec/>
      <Footer/>

      <Register/>
      <Login/>
    </>
  )
}

export default App
