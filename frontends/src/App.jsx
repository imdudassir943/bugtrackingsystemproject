import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imported Components
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
            {/* Navbar included on all pages */}
            <Navbar /> 
            
            <Routes>
                {/* Home/Landing Page */}
                <Route path="/" element={<HeroSec />} /> 
                
                {/* Authentication Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Projects Pages */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/create" element={<ProjectsForm />} />
                <Route path="/projects/update/:id" element={<UpdateProjectForm />} />
                
                {/* Bugs/Issues Pages */}
                <Route path="/projects/:projectId/bugs" element={<BugsListPage />} />
                <Route path="/bugs/:bugId" element={<BugsInfo />} />
                
                {/* Other/Features Page */}
                <Route path="/features" element={<Features />} />

                {/* Catch-all for 404/Unknown routes - usually a dedicated component like <NotFound /> is used */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            
            {/* Footer included on all pages */}
            <Footer />
        </Router>
    );
}