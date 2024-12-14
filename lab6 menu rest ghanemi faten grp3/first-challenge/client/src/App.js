






import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Menu from './menu'; 
import MenuDescription from './menuDescription';
import AddToCard from './addtocard';
import Checkout from './checkout';

import { CartProvider } from './CartContext'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} /> 
            <Route path="/menu/:id" element={<MenuDescription />} />
            <Route path="/addToCard" element={<AddToCard />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;






