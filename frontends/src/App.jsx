import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSec from './components/HeroSec'
import Projects from './components/Projects'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSec />
            <Projects />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
