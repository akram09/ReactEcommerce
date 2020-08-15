import { ADD_TO_CART } from '../actions';

const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state, cart: state.cart.concat(action.payload) };
  }
  return state;
};
export default cartReducer;
