import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '..';
import {
  orderByAsc,
  orderByDes,
  defaultOrder,
  filterBrand,
} from '../../data/phones';
import { ORDER_BY_ASC, ORDER_BY_DESC } from '../actions';
import brands from '../../data/brands';

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands,
      brandsFilter: [],
      products: defaultOrder(),
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
            switch (orderType) {
              case ORDER_BY_DESC:
                this.setState({ products: orderByDes() });
                break;
              case ORDER_BY_ASC:
                this.setState({ products: orderByAsc() });
                break;
              default:
                this.setState({ products: defaultOrder() });
                break;
            }
          },
          filters: (brand) => {
            if (this.state.brandsFilter.includes(brand)) {
              this.setState((prevState) => ({
                brandsFilter: prevState.brandsFilter.filter((b) => b !== brand),
                products: filterBrand(
                  prevState.brandsFilter.filter((b) => b !== brand),
                ),
              }));
            } else {
              this.setState((prevState) => ({
                brandsFilter: prevState.brandsFilter.concat([brand]),
                products: filterBrand(prevState.brandsFilter.concat([brand])),
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
