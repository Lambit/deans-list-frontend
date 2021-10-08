import React from 'react';
import Cart from "../../app/cart-context/Cart";
import Title from "../../app/title/Title";
import Layout from "../../app/layout/index";


export default function CartPage() {
    return (
      <>
      <Title title="Cart" />
        
          <Cart />
        
      </>
    );
}