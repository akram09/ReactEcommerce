import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '..';
import { applyFilters } from '../../data/phones';
import brands from '../../data/brands';

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands,
      brandsFilter: [],
      orderType: undefined,
      products: applyFilters(undefined, undefined),
      cart: {},
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          brands: this.state.brands,
          filterOrder: (orderType) => {
            this.setState((prevState) => ({
              orderType,
              products: applyFilters(prevState.brandsFilter, orderType),
            }));
          },
          filters: (brand) => {
            if (this.state.brandsFilter.includes(brand)) {
              this.setState((prevState) => ({
                brandsFilter: prevState.brandsFilter.filter((b) => b !== brand),
                products: applyFilters(
                  prevState.brandsFilter.filter((b) => b !== brand),
                  prevState.orderType,
                ),
              }));
            } else {
              this.setState((prevState) => ({
                brandsFilter: prevState.brandsFilter.concat([brand]),
                products: applyFilters(
                  prevState.brandsFilter.concat([brand]),
                  prevState.orderType,
                ),
              }));
            }
          },
        }}
      >
        {console.log(this.state)}
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
