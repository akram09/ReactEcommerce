import { combineReducers } from 'redux';
import cartReducer from './cart';
import filterProducts from './filter';

export default combineReducers({
  filterProducts,
  cartReducer,
});
