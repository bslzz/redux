import { combineReducers } from 'redux';
import cartReducer from './cartReducers';

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export default rootReducer;
