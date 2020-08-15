import { ORDER_PRODUCTS, FILTER_PRODUCTS, INITIAL_LOADING } from '../actions';
import { applyFilters, phones } from '../../data/phones';
const initialState = {
  products: [],
  orderType: undefined,
  brandsFilter: [],
};
const filterProducts = (state = initialState, action) => {
  if (action.type === ORDER_PRODUCTS) {
    return {
      ...state,
      products: applyFilters(state.brandsFilter, action.payload),
      orderType: action.payload,
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    let brandsFilter = [];
    if (state.brandsFilter.includes(action.payload)) {
      brandsFilter = state.brandsFilter.filter((b) => b !== action.payload);
    } else {
      brandsFilter = state.brandsFilter.concat([action.payload]);
    }
    return {
      ...state,
      products: applyFilters(brandsFilter, state.orderType),
      brandsFilter,
    };
  }
  if (action.type === INITIAL_LOADING) {
    return { ...state, products: phones };
  }
  return state;
};
export default filterProducts;
