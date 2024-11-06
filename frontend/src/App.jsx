
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './pages/frontend/LandingPage';
import Navbar from './components/Navbar';
// import './index.css'
function App() {

  return (
    <Router>
    <div>
    <section id="home">Your Home Section</section>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
