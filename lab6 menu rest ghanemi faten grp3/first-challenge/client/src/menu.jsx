

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Header from './header';

const Menu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

 
  const [menu] = useState([
    { id: 1, title: 'Pizza au poulet ', category: 'Fast Food', price: 10, img: 'a.jpg' },
    { id: 2, title: 'Sandwich thon', category: 'Fast Food', price: 5, img: 'a2.jpg' },
    { id: 3, title: 'poulet pane', category: 'Grillade', price: 15, img: 'a3.jpg' },
    { id: 4, title: 'Caesar Salad', category: 'Salade', price: 7, img: 'a4.jpg' },
    { id: 5, title: 'Chocolate Cake', category: 'Dessert', price: 8, img: 'a5.jpg' },
    { id: 6, title: 'Burger', category: 'Fast Food', price: 9, img: 'a7.jpg' },
    { id: 7, title: ' Salad de fruit', category: 'Dessert', price: 6, img: 'a6.jpg' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredmenu, setFilteredmenu] = useState(menu);

  useEffect(() => {
    
    const filtered = menu.filter(
      (menu) =>
        (selectedCategory === 'All' || menu.category === selectedCategory) &&
        menu.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredmenu(filtered);
  }, [selectedCategory, searchTerm, menu]);

  const handleAddToCart = (menu) => {
    addToCart(menu);
    alert(`${menu.title} a été ajouté au panier !`);
 
  };

  return (
    <div className="background">
      <Header />
      <div className="menu-first">
        <div className="menu-prg">
          <h2>Bienvenue à notre restaurant</h2>
        </div>
        <input
          type="text"
          placeholder="Rechercher un cours..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

   
      <div className="categories">
        {['All', 'Fast Food', 'Grillade', 'Salade', 'Dessert'].map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      <section className="menu-containers">
        {filteredmenu.map((menu) => (
          <div key={menu.id} className="menu-container">
            <div className="menu-img">
              <img src={menu.img} alt={menu.title} />
            </div>
            <div className="menu-content">
              <p className='title'>{menu.title}</p>
              <p className='price'>Prix : {menu.price}da</p>
              </div>
              <div className="menu-buttons">
                <Link to={`/menu/${menu.id}`} className="menu-details-btn">
                  Détails
                </Link>
                <button
                  onClick={() => handleAddToCart(menu)}
                  className="add-to-cart-btn"
                >
                  Ajouter au panier
                </button>
             
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;


