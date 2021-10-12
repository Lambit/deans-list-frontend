import React from "react";
import {
    SquarePaymentForm,
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
  } from 'react-square-payment-form';
  import 'react-square-payment-form/lib/default.css';
  import "./SquareForm.css";
  import { BASE_URL } from "../api/Api";
  import { SAND_ID, SAND_TOKEN, LOCAL_ID } from "../api/Api";

console.log(SAND_ID, LOCAL_ID, BASE_URL); 

/* Class component for Square payment form, displayed in CheckoutPage.js */ 
class PaymentPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errorMessages: [],
    };

  }

  // accessing square in backend through fetch
  async cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken)  {
    try {
      console.log(errors, nonce, buyerVerificationToken);
      alert("Thank you for your purchase!");

      const request = await fetch(`${BASE_URL}/v2/payments`, {
      method: 'POST',
      headers: {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer' +  SAND_TOKEN,

      },
      body: JSON.stringify({
          nonce: nonce,
          token: buyerVerificationToken
      })   
      });
      console.log(request);
    } catch(e) {
      
    }
    
  }
  

  createVerificationDetails() {
    return {
      amount: '100.00',
      currencyCode: "USD",
      intent: "CHARGE",
      billingContact: {
        familyName: "Smith",
        givenName: "John",
        email: "jsmith@example.com",
        country: "GB",
        city: "London",
        addressLines: ["1235 Emperor's Gate"],
        postalCode: "SW7 4JA",
        phone: "020 7946 0532"
      }
    }
  }

  render() {
    return (
      <div>

        <SquarePaymentForm
          sandbox={true}
          applicationId={SAND_ID}
          locationId={LOCAL_ID}
          cardNonceResponseReceived={this.cardNonceResponseReceived}
          createVerificationDetails={this.createVerificationDetails}
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
      
              <CreditCardSubmitButton >
                  Pay
              </CreditCardSubmitButton>
        </SquarePaymentForm>

        <div className="sq-error-message">
          {this.state.errorMessages.map(errorMessage =>
            <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
          )}
        </div>

      </div>
    )
  }
}
    
export default PaymentPage;
  
