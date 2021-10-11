import React, { useContext } from "react";
import CartContext from "../../app/cart-context/CartContext";
import { useHistory } from "react-router-dom";
import { formatCurrency } from "../../hooks/formatCurrency";
import PaymentsPage from "../../auth/SquareForm";
import { Button } from 'react-bootstrap';

import "./Checkout.css";

/* Checkout hold state (the prices) from the Cart and displays them. At the
bottom of the total is the payment form to pay for coral in the cart.
 */
 
export default function Checkout() {
    const { cartItems } = useContext(CartContext);
    const history = useHistory();
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.625;
    const shippingPrice = itemsPrice > 450 ? 0 : 40;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    function handleSubmit(e) {
      e.preventDefault(); 
      history.push('/shipping');        
    }

    return(
        <>
          {/* header--------------------------------------- */}
          <h1 className="checkout mb-4 font-weight-bold text-center">Checkout</h1>
              <>
                <hr></hr>
                {/* cart items-------------------------------------- */}
                <div className='container block justify-content-center'>
                  <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">{ formatCurrency(itemsPrice) }</div>
                  </div>
                  <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1 text-right">{ formatCurrency(taxPrice) }</div>
                  </div>
                  <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">
                      { formatCurrency(shippingPrice) }
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <strong>Total Price</strong>
                    </div>
                    <div className="col-1 text-right">
                      <strong>{ formatCurrency(totalPrice) }</strong>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col payment">
                      <h1>Total Price: { formatCurrency(totalPrice) }</h1>
                    </div>
                    <div class="col">
                    </div>
                  </div>
                </div>
                {/* payment form-------------- */}
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col payment">
                      <PaymentsPage className='form' />
                    </div>
                    <div class="col">
                    </div>
                  </div>
                </div>
                {/* Path too shipping------------ */}
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col payment">
                    <Button className="check-btn" onClick={handleSubmit}>
                      Shipping
                    </Button>
                    </div>
                    <div class="col">
                    </div>
                  </div>
                </div>
              </>
            
        </>
    );
}