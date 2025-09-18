import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Patient from './Pages/Patient';
import About from './Pages/About';
import Header from './Component/Header';
import Patient_Details from './Component/Patient_Details';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Patient' element={<Patient/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Patient_Details/:id' element={<Patient_Details/>}/>
      </Routes>
    </Router>
  )
}

export default App
