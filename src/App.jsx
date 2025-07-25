// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/TemplateSelector';
import Editor from './pages/Editor';
import AllTemplates from './pages/AllTemplates';
import About from './pages/About';
import Navbar from './pages/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      {/* Main content area */}
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<AllTemplates />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
