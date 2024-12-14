import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';

function Checkout() {
  const { state } = useLocation(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm('Confirmez-vous votre achat ?');
    if (isConfirmed) {
      alert('Achat confirmé ! Merci pour votre commande.');
      navigate('/'); 
    }
  };

  return (
    <div>
      <Header />
      <div className="checkout-container">
       
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nom complet :
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Adresse :
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Numéro de téléphone :
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="confirm-btn">
            Confirmer l'achat
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
