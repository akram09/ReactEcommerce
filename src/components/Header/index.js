import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
function Header({ cartSize }) {
  return (
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
            Cart {cartSize ? `{${cartSize}}` : ''}
          </Nav.Item>
        </NavLink>
      </Nav>
    </Navbar>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default Header;
