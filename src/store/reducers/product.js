import { INITIAL_LOADING } from '../actions';
import { phones } from '../../data/phones';

const initialState = {
  products: [],
};

const fetchProducts = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_LOADING:
      return { ...state, products: phones };
    default:
      return state;
  }
};
export default fetchProducts;
