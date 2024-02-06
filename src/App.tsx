import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './Pages/home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
function App() : JSX.Element{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
    </Routes>
    </> 
  );
}

export default App;
