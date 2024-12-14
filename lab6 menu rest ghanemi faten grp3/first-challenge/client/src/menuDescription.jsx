import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header';
import { useCart } from './CartContext';

function MenuDescription() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(null); 

  const menuData = [
    { id: 1, title: 'Pizza au poulet', category: 'Fast Food', price: 10, img: 'a5.jpg' },
    { id: 2, title: 'Sandwich thon', category: 'Fast Food', price: 5, img: 'a2.jpg' },
    { id: 3, title: 'Grilled Chicken', category: 'Grillade', price: 15, img: 'a3.jpg' },
    { id: 4, title: 'Caesar Salad', category: 'Salade', price: 7, img: 'a4.jpg' },
    { id: 5, title: 'Chocolate Cake', category: 'Dessert', price: 8, img: 'a5.jpg' },
    { id: 6, title: 'Burger', category: 'Fast Food', price: 9, img: 'a7.jpg' },
    { id: 7, title: 'Fruit Salad', category: 'Dessert', price: 6, img: 'a6.jpg' },
  ];

  useEffect(() => {
    const selectedMenu = menuData.find((menu) => menu.id.toString() === id);
    setMenu(selectedMenu);
  }, [id]);

  if (!menu) {
    return <p>Menu non trouvé</p>;
  }

  const handleAddToCart = () => {
    addToCart(menu);
    alert(`${menu.title} a été ajouté au panier !`);
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { menu } });
  };

  return (
    <div>
      <Header />
      <div className="menu-description-container">
        <div className="desc-img">
          <img src={`${menu.img}`} alt={menu.title} />
        </div>

        <div className="desc">
          <h2>{menu.title}</h2> 
          <p>Catégorie : {menu.category}</p> 
          <h3>Description:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deserunt,
            nesciunt omnis amet vel dicta id ratione illum vero assumenda architecto maxime
            voluptate quis, numquam necessitatibus blanditiis magnam consectetur velit.
          </p>
          <h3>Prix : {menu.price} </h3>

          <div className="btns">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Ajouter au panier
            </button>
            <button onClick={handleBuyNow} className="buy-now-btn">
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDescription;
