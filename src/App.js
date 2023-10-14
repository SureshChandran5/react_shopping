import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import ProDetail from './components/ProDetail'
import Cart from'./components/Cart'

const App = () => {
  return (
    <>
      <Header />
        <Routes>
           <Route exact path="/" Component={Home}></Route>
           <Route exact path="/product" Component={Product}></Route>
           <Route exact path="/product/:id" Component={ProDetail}></Route>
           <Route exact path='/cart' Component={Cart}></Route>
           <Route exact path="/about" Component={About}></Route>
           <Route exact path="/contact" Component={Contact}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
