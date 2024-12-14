import React from 'react';
import Header from './header';
import { useCart } from './CartContext'; 

function AddToCart() {
  const { cart, removeFromCart } = useCart(); 

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Header />
      <div className='addtocard'>
        <div className='adds'>
          {cart.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cart.map((item) => (
              <div className='add' key={item.id}>
           
                <div className='add-info'>
                  <p>{item.title}</p>
                  <p>Prix: {item.price} da</p>
                  <button onClick={() => removeFromCart(item.id)} className='remove-btn'>
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className='total'>
          <div className='total-container'>
            <h3>Total: {totalPrice}da</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
