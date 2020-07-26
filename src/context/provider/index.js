import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '..';
import { orderByAsc, orderByDes, defaultOrder } from '../../data/phones';
import { ORDER_BY_ASC, ORDER_BY_DESC } from '../actions';

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: defaultOrder,
      cart: {},
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          filterOrder: (orderType) => {
            console.log('Ordering with ', orderType);
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
