import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSec from './components/HeroSec';
import Projects from './components/Projects';
import ProjectsForm from './components/ProjectsForm';
import BugsInfo from './components/BugsInfo';
import BugsListPage from './components/BugsList';
import Features from './components/Features';
import UpdateProjectForm from './components/UpdateProject';

export default function App() {
    return (
        <Router>
            
            <Navbar /> 
            
            <Routes>
                
                <Route path="/" element={<HeroSec />} /> 
                
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/projects/create" element={<ProjectsForm />} />
                
            
                <Route path="/bugsList" element={<BugsListPage />} />
                <Route path="/bugs" element={<BugsInfo />} />
                
            
                <Route path="/features" element={<Features />} />

                
            </Routes>
            
            
            <Footer />
        </Router>
    );
}