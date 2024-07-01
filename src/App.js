import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { openCart, addItem } from './redux/cartSlice'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Footer from './components/Footer'
import CardPage from './components/CardPage'
import Cart from './components/Cart'

const App = () => {
  const dispatch = useDispatch()
  const { status, items } = useSelector((state) => state.cart)

  const toggleCart = () => {
    dispatch(openCart())
  }

  return (
    <Router basename='/'>
      <Header toggleCart={toggleCart} cartItems={items} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:title' element={<CardPage addItem={addItem} />} />
      </Routes>
      <Cart status={status} closeCart={toggleCart} items={items} />
      <Footer />
    </Router>
  )
}

export default App

