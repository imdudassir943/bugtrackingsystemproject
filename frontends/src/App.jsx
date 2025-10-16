import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSec from './components/HeroSec'
import Projects from './components/Projects'
import ProjectsForm from './components/ProjectsForm'
import BugsInfo from './components/BugsInfo'
import BugsListPage from './components/BugsList'
import Features from './components/Features'

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
        <Route path='/projects' element={ <ProjectsForm />} />
        <Route path='/bugs' element={ <BugsInfo />} />
        <Route path='/bugsList' element={ <BugsListPage />} />
        <Route path='/features' element={ <Features />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App
