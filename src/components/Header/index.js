import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppConsumer from '../../context/consumer';
function Header() {
  return (
    <AppConsumer>
      {(context) => (
        <Navbar bg="dark" expand="lg" fixed="top">
          <NavLink to="/">
            <Navbar.Brand className="text-light">ReactEcommerce</Navbar.Brand>
          </NavLink>

          <Nav className="ml-auto">
            <NavLink
              to="/cart"
              className="text-light"
              style={{ textDecoration: 'none' }}
            >
              <Nav.Item>
                <FaShoppingCart className="mr-2" />
                Cart
                {context.cart.length !== 0 ? `{${context.cart.length}}` : ''}
              </Nav.Item>
            </NavLink>
          </Nav>
        </Navbar>
      )}
    </AppConsumer>
  );
}

export default Header;
