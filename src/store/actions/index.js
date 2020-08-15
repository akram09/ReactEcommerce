export const INITIAL_LOADING = 'INITIAL_LOADING';
export const ORDER_PRODUCTS = 'ORDER_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';

export const loadInitial = () => ({
  type: INITIAL_LOADING,
});

export const orderProducts = (orderType) => ({
  type: ORDER_PRODUCTS,
  payload: orderType,
});
export const filterProducts = (brand) => ({
  type: FILTER_PRODUCTS,
  payload: brand,
});

export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
