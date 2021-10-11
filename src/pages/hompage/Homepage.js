import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../app/user-context/UserContext";
import CartContext from "../../app/cart-context/CartContext";
import CoralData from "../coral-layout/CoralLayout";
import Title from "../../app/title/Title";
import CarouselHeader from "../../common/Carousel";

import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage(props) {
  const { currentUser } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const { WYSIWYG } = props;


  console.debug("Homepage", "currentUser=", currentUser);
  console.debug("Homepage", "cartItems=", cartItems);
  console.log(WYSIWYG);
  console.log(cartItems);

  return (
    <>
      <Title title="Dean's List Coral" />
      
        <CarouselHeader />

        <div className="homepage text-center">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold home-head">Dean's List Coral</h1>
            <p className="lead">Highend Coral for sale.</p>

          </div>  
            <div className='container catalog'>
              { WYSIWYG.map((coral) => (
                <CoralData key={coral.id} coral={coral}></CoralData>
              ))}
            </div>


            <div className="container welcome-back text-center">
            {currentUser
                ? <h2>
                  Welcome Back, {currentUser.firstName || currentUser.username}!
                </h2>
                : (
                    <p>
                      <h2>Register today!</h2>
                      <Link className="btn btn-primary font-weight-bold mr-3 login"
                            to="/login">
                        Log in
                      </Link>
                      <Link className="btn btn-primary font-weight-bold signup"
                            to="/signup">
                        Sign up
                      </Link>
                    </p>
                )}
            </div>
        </div>
    </>  
  );
}

export default Homepage;