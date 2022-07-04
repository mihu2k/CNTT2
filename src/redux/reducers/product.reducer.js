import * as types from '../types';

const initialState = {
  product: null,
  products: [],
  status: null,
  totalPage: 1,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.GET_PRODUCTS_SUCCESS:
      const products = action.payload.data?.data ?? [];
      const totalPage = action.payload.data?.total_page ?? 1;
      return {
        ...state,
        status: 'success',
        products,
        totalPage,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...initialState,
        status: 'failure',
      };

    default:
      return { ...state };
  }
}
