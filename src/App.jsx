import { useState } from 'react'
import './App.css'
import AppNav from './components/AppNavbar'
import { Route,Routes } from 'react-router-dom'
import Carts from './components/Cart'
import Product from './components/Products'

function App() {

  return (
    <div className='App'>
      <AppNav/>

      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="cart" element={<Carts/>} />

      </Routes>

    </div>
  )
}

export default App
