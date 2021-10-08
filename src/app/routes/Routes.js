import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../../pages/hompage/Homepage";
import LoginForm from "../../auth/LoginForm";
import SignupForm from "../../auth/SignupForm";
import Sps from "../../pages/sps/SpsCatalog";
import Lps from "../../pages/lps/LpsCatalog";
import Zoas from "../../pages/zoa/ZoaCatalog";
import About from "../../pages/about/About";
import CartPage from "../../pages/cart-checkout/CartPage";
import CheckoutPage from "../../pages/cart-checkout/CheckoutPage";
import ThankYouPage from "../../pages/thank-you/ThankYou";
import ShippingPage from "../../pages/shipping/ShippingPage";

import WYSIWYGdata from "../../coral-data/WYSISWGdata";
import LPSdata from "../../coral-data/LPSdata";
import SPSdata from "../../coral-data/SPSdata";
import ZOAdata from "../../coral-data/ZOAdata";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes(props) {
    const { login, signup } = props;
    const { WYSIWYG } = WYSIWYGdata;
    const { LPS } = LPSdata;
    const { SPS } = SPSdata;
    const { ZOA } = ZOAdata;
    
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );
  
    return (
        <div className="pt-5">
          
          <Switch >
            <Route exact path="/">
              <Homepage WYSIWYG={ WYSIWYG }  />
            </Route>
  
            <Route exact path="/login">
              <LoginForm login={login} />
            </Route>
  
            <Route exact path="/signup">
              <SignupForm signup={signup} />
            </Route>
  
            <Route exact path="/lps">
              <Lps LPS={ LPS } />
            </Route>
  
            <Route exact path="/sps">
              <Sps SPS={ SPS }  />
            </Route>
  
            <Route exact path="/zoas">
              <Zoas ZOA={ ZOA }  />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/cart">
              <CartPage  />
            </Route>

            <Route exact path="/checkout">
              <CheckoutPage  />
            </Route>

            <Route exact path="/shipping">
              <ShippingPage  />
            </Route>

            <Route exact path="/thank-you">
              <ThankYouPage  />
            </Route>
          </Switch>
        </div>
    );
  }
  
  export default Routes;