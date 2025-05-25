// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TemplateSelector from './pages/TemplateSelector';
import Editor from './pages/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<TemplateSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
