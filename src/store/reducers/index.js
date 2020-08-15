import combineReducers from 'redux';
import cartReducer from './cart';
import filterProducts from './filter';
import fetchProducts from './product';

const rootReducer = combineReducers(fetchProducts, filterProducts, cartReducer);

export default rootReducer;
