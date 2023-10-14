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
import FBx from './components/3ds/Fbxo'
import Women from './components/3ds/Womenss'
import Anime from './components/3ds/Anime'
import {MantineProvider} from '@mantine/core'
import { CharacterAnimationsProvider } from './components/3ds/characteranime/characteranimation.jsx';
import Shoesconf from './components/3ds/Shoesconf'

function App() {

  return (
    <div className='App'>
      <AppNav/>

      <Routes>
      <Route path="/" element={<Head/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Carts/>} />
        <Route path="/td" element={<TDcomp/>} />
        <Route path="/fb" element={<FBx/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/anime" element={
         <MantineProvider >
         <CharacterAnimationsProvider>
         <Anime/>
         </CharacterAnimationsProvider>
   </MantineProvider>
        } />
          <Route path="/shoe" element={<Shoesconf/>} />

      </Routes>


      <ScrollToTopButton/>
      <Canvass/>
     
    </div>
  )
}

export default App
