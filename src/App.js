import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogIn from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
    )    
}

export default App;
