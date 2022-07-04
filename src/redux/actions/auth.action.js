import { showToastMsg } from '~/common/utils';
import AuthService from '~/services/auth.service';
import GoogleService from '~/services/google.service';
import * as types from '../types';

export const loginRequest = (data) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const response = await AuthService.login(data);
    console.log('SUCCESS', response);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response });
  } catch (error) {
    console.log(error, 'ERROR REQ');
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
    const msg = error.response.data.message ?? 'Đăng nhập thất bại.';
    showToastMsg('error', msg, { toastId: error.response.data.status });
  }
};

export const loginWithGGRequest = (accessToken) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const response = await GoogleService.getUserInfo(accessToken);
    console.log('SUCCESS', response);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response });
  } catch (error) {
    console.log(error, 'ERROR REQ');
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
    const msg = 'Đăng nhập thất bại.';
    showToastMsg('error', msg, { toastId: error.message });
  }
};

export const registerRequest = (formData) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    const response = await AuthService.register(formData);
    console.log('REGISTER SUCCESS', response);
    dispatch({ type: types.REGISTER_SUCCESS, payload: response });
  } catch (error) {
    console.log(error, 'ERROR REQ');
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
    const msg = error.response.data.message ?? 'Đăng ký thất bại.';
    showToastMsg('error', msg, { toastId: error.message });
  }
};

export const logoutRequest = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
