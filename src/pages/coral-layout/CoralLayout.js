import React, { useContext } from 'react';
import CartContext from "../../app/cart-context/CartContext";
import { Button } from 'react-bootstrap';
import './CoralLayout.css';

/* Layout for coral data for the home, LPS, SPS, and ZOA pages. Maps over the data in the
object and isolates each key. Along with a button that adds to cart. */ 



export default function CoralData(props) {
  const { coral } = props;
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="coral-data text-center">
        <img className="small img-fluid" src={coral.image} alt={coral.name} />
      <div className='coral-data-name'>{coral.name}</div>
      <div className='coral-data-price'>${coral.price}</div>
      <div>
        
        <Button type="button" className="catalog-button" onClick={() => addToCart(coral)}>Add To Cart</Button>
        
      </div>  
    </div>
  );
}