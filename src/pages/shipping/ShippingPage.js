import React from 'react';
import ShippingForm from "../../auth/ShippingForm";
import Title from "../../app/title/Title";

import "./ShippingPage.css";

function ShippingPage() {
    return (
      <>
      <Title title="Shipping" />
      
        <h1 className='shipping'>Shipping To</h1>
        <ShippingForm />

        
        
      </>
    );
}

export default ShippingPage;