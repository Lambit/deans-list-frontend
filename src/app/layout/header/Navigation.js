import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../user-context/UserContext";
import CartContext from "../../cart-context/CartContext";
import { Navbar, Nav, Container } from 'react-bootstrap';
import fakeLogo from "../../../img/fakeLogo.svg";





/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms. Made Nav.Link as Link to source
 * so they page wouldn't rerender evrytime. Used reducer to display the sum
 * of cartItems state as it changes.
 *
 * Rendered by App.
 */

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);
    const { cartItems } = useContext(CartContext);
    
    console.debug("Navigation", "currentUser=", currentUser);
  
    function loggedInNav() {
      return (
        <div>
          <Navbar className='navbarOutter' bg='dark' variant='dark' fixed='top' expand="sm">
            <Container className='navContainer'>
              <Navbar.Brand className= "navLogo" href="/">
                <img
                  alt="Logo"
                  src={fakeLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-"
                />{' '}
              Dean's List Coral
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navInner me-auto">
                  <Nav.Link className='navLinkStyles' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/lps">LPS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/sps">SPS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/zoas">ZOAS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/cart">
                    Cart: {<button className="badge btn btn-secondary">
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}</button>}
                  </Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/" onClick={logout}>
                    Log out {currentUser.first_name || currentUser.username}</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>

      );
    }

    function loggedOutNav() {
        return (
          <div>
          <Navbar className='navbarOutter' bg='dark' variant='dark' fixed='top' expand="sm">
            <Container>
              <Navbar.Brand className= "navLogo" href="/">
                <img
                  alt="Logo"
                  src={fakeLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-"
                />{' '}
              Dean's List Coral
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className='navLinkStyles' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/lps">LPS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/sps">SPS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/zoas">ZOAS</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/">About</Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/login">Log in </Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/signup">Sign Up </Nav.Link>
                  <Nav.Link className='navLinkStyles' as={Link} to="/cart">Cart: 
                  {<button className="badge btn btn-secondary">
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}</button>}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>

        );
      }

      return (
        <nav className="Navigation navbar navbar-expand-md">
          <Link className="navbar-brand justify-content-end" to="/">
          </Link>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
  }
  
  export default Navigation;