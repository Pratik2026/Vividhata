import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage.jsx';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;