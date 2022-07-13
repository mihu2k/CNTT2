import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import categoryReducer from './category.reducer';
import commentReducer from './comment.reducer';
import orderReducer from './order.reducer';
import productReducer from './product.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,
  comment: commentReducer,
});

export default rootReducer;
