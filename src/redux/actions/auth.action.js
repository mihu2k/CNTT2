import { showToastMsg } from '~/common/utils';
import config from '~/config';
import AuthService from '~/services/auth.service';
import GoogleService from '~/services/google.service';
import * as types from '../types';
import { trackPromise } from 'react-promise-tracker';

export const loginRequest = (data) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const response = await trackPromise(AuthService.login(data));
    // console.log('SUCCESS', response);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response });
  } catch (error) {
    // console.log(error, 'ERROR REQ');
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
    const msg = error.response.data.message ?? 'Đăng nhập thất bại.';
    showToastMsg('error', msg, { toastId: error.response.data.status });
  }
};

export const loginWithGGRequest = (accessToken) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  // console.log(accessToken, 'accessToken');

  try {
    const response = await trackPromise(GoogleService.getUserInfo(accessToken));
    // console.log('SUCCESS', response);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response });
  } catch (error) {
    // console.log(error, 'ERROR REQ');
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
    const msg = 'Đăng nhập thất bại.';
    showToastMsg('error', msg, { toastId: error.message });
  }
};

export const registerRequest = (formData) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    const response = await trackPromise(AuthService.register(formData));
    // console.log('REGISTER SUCCESS', response);
    dispatch({ type: types.REGISTER_SUCCESS, payload: response });
  } catch (error) {
    // console.log(error, 'ERROR REQ');
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
    const msg = error.response.data.message ?? 'Đăng ký thất bại.';
    showToastMsg('error', msg, { toastId: error.message });
  }
};

export const checkTokenRequest = (token, navigate) => async (dispatch) => {
  dispatch({ type: types.CHECK_TOKEN_REQUEST });

  try {
    const response = await trackPromise(AuthService.checkToken(token));
    // console.log('REGISTER SUCCESS', response);
    dispatch({ type: types.CHECK_TOKEN_SUCCESS, payload: response });
  } catch (error) {
    // console.log(error, 'ERROR REQ');
    dispatch({ type: types.CHECK_TOKEN_FAILURE, payload: error });
    navigate(config.routes.login, {
      state: { from: config.routes.profile },
    });
  }
};

export const logoutRequest = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
