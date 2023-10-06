import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Carts from './components/Cart'
import Product from './components/Products'
import AppNav from './components/AppNavbar'
import Head from './components/Home'
import ScrollToTopButton from './components/scrollBtn/ScrollToTopButton'
import Canvass from './components/curser/curserhandler'
import TDcomp from './components/3ds/Tdcomp'

function App() {

  return (
    <div className='App'>
      <AppNav/>

      <Routes>
      <Route path="/" element={<Head/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Carts/>} />
        <Route path="/td" element={<TDcomp/>} />
      </Routes>


      <ScrollToTopButton/>
      <Canvass/>
     
    </div>
  )
}

export default App
