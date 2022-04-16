import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogIn from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
    )    
}

export default App;
