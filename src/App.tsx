import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "src/pages/about";
import { ContactPage } from "src/pages/contact";
import HomePage from "src/pages/home";
import ProjectsPage from "src/pages/projects";
import ServicesPage from "src/pages/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
