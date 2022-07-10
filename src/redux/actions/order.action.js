import config from '~/config';
import OrderService from '~/services/order.service';
import * as types from '../types';

export const getOrderByIdRequest = (id) => async (dispatch) => {
  dispatch({ type: types.GET_ORDER_BY_ID_REQUEST });

  try {
    const response = await OrderService.getOneById(id);
    dispatch({ type: types.GET_ORDER_BY_ID_SUCCESS, payload: response });
    console.log('SUCCESS ORDER', response);
  } catch (error) {
    dispatch({ type: types.GET_ORDER_BY_ID_FAILURE, payload: error });
    console.log(error, 'ERROR REQ ORDER');
  }
};

export const createOrderRequest =
  (data, navigate = null) =>
  async (dispatch) => {
    dispatch({ type: types.CREATE_ORDER_REQUEST });

    try {
      const response = await OrderService.create(data);
      dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: response });
      navigate &&
        navigate(config.routes.orderConfirmation, {
          state: { orderId: response.data.data._id },
        });
      console.log('SUCCESS ORDER', response);
    } catch (error) {
      dispatch({ type: types.CREATE_ORDER_FAILURE, payload: error });
      console.log(error, 'ERROR REQ ORDER');
    }
  };
