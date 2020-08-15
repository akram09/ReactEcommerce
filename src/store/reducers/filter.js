import { ORDER_PRODUCTS, FILTER_PRODUCTS } from '../actions';
import { applyFilters } from '../../data/phones';
const filterProducts = (state, action) => {
  if (action.type === ORDER_PRODUCTS) {
    return {
      ...state,
      products: applyFilters(state.brandsFilter, action.payload),
      orderType: action.payload,
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    let brandsFilter = [];
    if (state.brandsFilter === undefined) {
      brandsFilter = [action.payload];
    } else if (state.brandsFilter.includes(action.payload)) {
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
  return state;
};
export default filterProducts;
