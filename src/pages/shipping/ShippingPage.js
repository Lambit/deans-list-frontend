import React, { useContext } from 'react';
import ShippingForm from "../../auth/ShippingForm";
import "./ShippingPage.css";

function ShippingPage() {
    return (
      <>
        <h1 className='shipping'>Shipping To</h1>
        <ShippingForm />

        
        
      </>
    );
}

export default ShippingPage;