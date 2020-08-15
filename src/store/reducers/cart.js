import { ADD_TO_CART } from '../actions';

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    if (state.cart === undefined) {
      return { ...state, cart: [action.payload] };
    }
    return { ...state, cart: state.cart.concat(action.payload) };
  }
  return state;
};
export default cartReducer;
