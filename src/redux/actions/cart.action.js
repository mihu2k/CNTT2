import * as types from '../types';

export const addToCartRequest =
  (product, navigate = null) =>
  (dispatch) => {
    dispatch({ type: types.ADD_CART_SUCCESS, payload: { product, navigate } });
  };

export const getCartRequest = () => (dispatch) => {
  dispatch({ type: types.GET_CART_SUCCESS });
};

export const actionQuantityCartRequest = (product, type) => (dispatch) => {
  dispatch({ type: types.ACTION_COUNT_SUCCESS, payload: { product, type } });
};

export const changeQuantityCartRequest = (product, quantity) => (dispatch) => {
  dispatch({
    type: types.CHANGE_COUNT_SUCCESS,
    payload: { product, quantity },
  });
};

export const deleteCartRequest = (product) => ({
  type: types.DELETE_CART_SUCCESS,
  payload: product,
});
