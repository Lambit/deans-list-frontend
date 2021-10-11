import React, { useState, useContext } from "react";
import CartContext from "./CartContext";
import { formatCurrency } from '../../hooks/formatCurrency';
import CheckoutPage from "../../pages/cart-checkout/CheckoutPage";
import Title from "../title/Title";

import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Nem from "../../img/Common/nem-header.jpg";
import "./Cart.css"


export default function Cart() {
  const { cartItems, addToCart, subtractFromCart, removeFromCart } = useContext(CartContext);
  const [checkingOut, isCheckingOut] = useState(false);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.625;
  const shippingPrice = itemsPrice > 450 ? 0 : 40;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  

  const handleClick = (e) => {
    e.preventDefault();
    isCheckingOut(true);
  }

  return (
    <>

    <Title title='Cart' />

      { !checkingOut && 
          <>
          {/* header------------------------------------------- */}
          <h1 className="cart mb-4 font-weight-bold text-center">Cart</h1>

            {/* empty cart-------------------------- */}
            <lead className="empty-cart text-center">
              {cartItems.length === 0 && <div className="empty font-weight-bold">Cart is empty</div>}
              </lead>
            <div className="empty-cart text-center">
              {cartItems.length === 0 && <Image className="nem" src={Nem} alt="anenome" fluid />}
              </div>

            {/* full cart------------------------------------- */}
            {cartItems.length !== 0 && (
            <>
              <div className='container justfy-content-center'>
                <div className="row-table justify-content-center">
                  <div className= 'col-auto'>      
                    <Table table-responsive bordered className="table-responsive" width='100%' cellSpacing={0} cellPadding={1}>
                      <thead>
                        <tr>
                          <th>Product name</th>
                          <th>Price</th>
                          <th>Subtract</th>
                          <th>Quantity</th>
                          <th>Add</th>
                          <th>Subtotal</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                        { cartItems.map((coral) => (
                          <tr key={coral.id}>
                            <td>{coral.name}</td>
                            <td>${coral.price}</td>
                            <td>{
                              <Button type="button" className="table-btn" value={coral.qty} 
                                onClick={(e) => subtractFromCart(coral, parseInt(e.target.value))}>
                                  Delete
                              </Button>}
                            </td>
                            <td>{coral.qty}</td>
                            <td>
                            <Button type="button" className="table-btn" 
                              onClick={() => addToCart(coral)}>
                                Add
                              </Button>
                            </td>
                            <td><td>{formatCurrency(coral.price * coral.qty)}</td></td>
                            <td>{
                              <Button type="button" className="remove-btn" value={coral.qty} 
                                onClick={(e) => removeFromCart(coral, parseInt(e.target.value))}>
                                  Remove
                              </Button>}
                            </td>
                          </tr>
                        )) }
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

                {/* item prices ----------------------------------- */}
                <hr></hr>
                <div className='container block justify-content-center'>
                  <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 ">{ formatCurrency(itemsPrice) }</div>
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
                  <hr />
                  <div className="row-button">
                    <Button className="check-btn" onClick={handleClick}>
                      Checkout
                    </Button>
                  </div>
                </div>
            </>
            )}
          </>  
      }
      { checkingOut && <div><CheckoutPage /></div>  }      
    </>
  );
}
