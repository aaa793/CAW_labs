import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
  
    localStorage.removeItem('token'); 

   
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="menu-icon" onClick={toggleMenu}>
          ≡
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-transaction">Add Transaction</Link></li>
        <li><Link to="/transaction-list">Transaction List</Link></li>
        <li><Link to="/visual-reports">Visual Reports</Link></li>
        <li><Link to="/signin"  onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
