import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => (
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
          {props.cartLength !== 0 ? `{${props.cartLength}}` : ''}
        </Nav.Item>
      </NavLink>
    </Nav>
  </Navbar>
);

Header.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cartLength: state.cart === undefined ? 0 : state.cart.length,
});

export default connect(mapStateToProps)(Header);
