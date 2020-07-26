import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '..';
import phones from '../../data/phones';

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: phones,
      cart: {},
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
