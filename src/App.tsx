import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/header/navbar';
import Footer from './components/footer';
import FooterContact from './components/footer/footerContact';
import ProductsList from './pages/home';


function App() {
 
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ProductsList/>} />
      </Routes>

      <Footer></Footer> 
      <FooterContact></FooterContact>
    </BrowserRouter>
  )
}

export default App
