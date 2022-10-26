import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;