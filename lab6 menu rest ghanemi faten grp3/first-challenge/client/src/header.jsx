



import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='header-2'>
      <Link className='a' to="/">Home</Link>    
    
      <Link className='a' to="/menu">Menu</Link> 
      <Link to="/addToCard" className="cart-icon">
          <img src="cart.png" alt="Panier" />
        </Link>
    </nav>
  );
}

export default Header;