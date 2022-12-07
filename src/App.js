import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Product from './pages/Product'
import Singalpage from './pages/Singalpage'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/product/:id' element={<Singalpage/>}/>
  <Route path='/chekout' element={<Checkout/>}/>
  <Route path='/*' element={<Home/>}/>
</Routes>
</BrowserRouter>


</>
  )
}

export default App

