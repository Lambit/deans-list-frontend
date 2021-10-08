import React, { useContext } from 'react';
import CartContext from "../../app/cart-context/CartContext";
import { Button } from 'react-bootstrap';
import './CoralLayout.css';


export default function CoralData(props) {
  const { coral } = props;
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="coral-data text-center">
      <img className="small" src={coral.image} alt={coral.name} />
      <div className='coral-data-name'>{coral.name}</div>
      <div className='coral-data-price'>${coral.price}</div>
      <div>
        
        <Button type="button" className="catalog-button" onClick={() => addToCart(coral)}>Add To Cart</Button>
        
      </div>
    </div>
  );
}