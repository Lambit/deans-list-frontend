import React, { useContext } from "react";
import CartContext from "../../app/cart-context/CartContext";
import { formatCurrency } from "../../hooks/formatCurrency";
import SquareForm from "../../auth/SquareForm";

import "./Checkout.css";

export default function Checkout() {
    const { cartItems } = useContext(CartContext);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.625;
    const shippingPrice = itemsPrice > 450 ? 0 : 40;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
                {/* payment form-------------- */}
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col payment">
                      <SquareForm className="form" />
                    </div>
                    <div class="col">
                    </div>
                  </div>
                </div>
              </>
            
        </>
    );
}