import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import productReducer from './product.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
});

export default rootReducer;
