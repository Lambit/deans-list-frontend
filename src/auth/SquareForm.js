import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    SquarePaymentForm,
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
  } from 'react-square-payment-form';
  import 'react-square-payment-form/lib/default.css';
  import { Context } from 'react-square-payment-form';

  import CartContext from "../app/cart-context/CartContext";
  import { formatCurrency } from '../hooks/formatCurrency';
  import { SANDBOX_ACCESS_TOKEN } from "../../secrets/secrets";
  import { SANDBOX_APPLICATION_ID } from "../../secrets/secrets";
  import { LOCATION_ID } from "../../secrets/secrets";
  import Button from "react-bootstrap/Button";
  import "./SquareForm.css";

  const REACT_SANDBOX_ACCESS_TOKEN = { SANDBOX_ACCESS_TOKEN };

  const REACT_SANDBOX_APPLICATION_ID = { SANDBOX_APPLICATION_ID };
 

export default function SquareForm() {
    const { cartItems } = useContext(CartContext);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.625;
    const shippingPrice = itemsPrice > 450 ? 0 : 40;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    async function cardNonceResponseReceived( nonce,  cardData, buyerVerificationToken)  {
        console.log( cardData, nonce, buyerVerificationToken);

        const request = await fetch("http://localhost:3001/v2/payments", {
            method: 'POST',
            headers: {
    
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + REACT_SANDBOX_ACCESS_TOKEN,

            },
            body: JSON.stringify({
                nonce: nonce,
            })   
        });
        console.log(request);
    }
    
    const MyCustomeButton = () => {
        const history = useHistory();
        const context = useContext(Context);

        function handleSubmit(e) {
          e.preventDefault(); 
          context.onCreateNonce(cardNonceResponseReceived());
          history.push('/shipping');        
        }
        return (
            <Button className="my-button" onClick={handleSubmit}> Pay { formatCurrency(totalPrice) } </Button>
        )
    }
 

    return (
        <div>
    
            <SquarePaymentForm
              sandbox={true}
              applicationId={ REACT_SANDBOX_APPLICATION_ID }
              locationId={LOCATION_ID}
              cardNonceResponseReceived={cardNonceResponseReceived}
              MyCustomeButton={MyCustomeButton}
              
            >
                <fieldset className="sq-fieldset">
                <CreditCardNumberInput />
                <div className="sq-form-third">
                  <CreditCardExpirationDateInput />
                </div>
                    
                <div className="sq-form-third">
                  <CreditCardPostalCodeInput />
                </div>

                <div className="sq-form-third">
                    <CreditCardCVVInput />
                </div>
                </fieldset>

                <MyCustomeButton />

            </SquarePaymentForm>
    
          </div>
    )
}