import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import TerrariumsPage from './pages/TerrariumsPage';
import ContactPage from './pages/ContactPage';
import WorkshopsPage from './pages/WorkshopsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terrariums" element={<TerrariumsPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/workshops" element={<WorkshopsPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
