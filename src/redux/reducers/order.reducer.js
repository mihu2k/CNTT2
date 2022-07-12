import * as types from '../types';

const initialState = {
  order: null,
  orders: [],
  status: null,
  totalPage: 1,
  totalRecord: 0,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ORDER_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.CREATE_ORDER_SUCCESS:
      const order = action.payload.data?.data;
      return {
        ...state,
        status: 'success',
        order,
      };
    case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        status: 'failure',
        order: null,
      };
    case types.GET_ORDER_BY_ID_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.GET_ORDER_BY_ID_SUCCESS: {
      const order = action.payload.data?.data;
      return {
        ...state,
        status: 'success',
        order,
      };
    }
    case types.GET_ORDER_BY_ID_FAILURE:
      return {
        ...state,
        status: 'failure',
        order: null,
      };
    case types.GET_YOUR_ORDERS_REQUEST:
      return {
        ...state,
        status: types.GET_YOUR_ORDERS_REQUEST,
      };
    case types.GET_YOUR_ORDERS_SUCCESS: {
      const orders = action.payload.data?.data;
      return {
        ...state,
        status: types.GET_YOUR_ORDERS_SUCCESS,
        orders,
        totalPage: action.payload.data?.total_page ?? 1,
        totalRecord: action.payload.data?.totalRecord ?? 0,
      };
    }
    case types.GET_YOUR_ORDERS_FAILURE:
      return {
        ...state,
        status: types.GET_YOUR_ORDERS_FAILURE,
        orders: [],
      };

    default:
      return { ...state };
  }
}
