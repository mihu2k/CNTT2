import { showToastMsg } from '~/common/utils';
import UserService from '~/services/user.service';
import * as types from '../types';
import { trackPromise } from 'react-promise-tracker';

export const resetPasswordConfirmRequest = (data) => async (dispatch) => {
  dispatch({ type: types.RESET_PASSWORD_CONFIRM_REQUEST });
  let msg = '';

  try {
    const response = await trackPromise(UserService.resetPassConfirm(data));
    msg = 'Kiểm tra email để đổi mật khẩu.';

    dispatch({ type: types.RESET_PASSWORD_CONFIRM_SUCCESS, payload: response });
    showToastMsg('success', msg, { toastId: msg });
    // console.log('SUCCESS', response);
  } catch (error) {
    msg = 'Thao tác thất bại.';

    dispatch({ type: types.RESET_PASSWORD_CONFIRM_FAILURE, payload: error });
    showToastMsg('error', msg, { toastId: msg });
    // console.log(error, 'ERROR REQ');
  }
};

export const resetPasswordRequest = (data) => async (dispatch) => {
  dispatch({ type: types.RESET_PASSWORD_REQUEST });
  let msg = '';

  try {
    const response = await trackPromise(UserService.resetPassword(data));
    msg = 'Thay đổi thành công.';

    dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: response });
    showToastMsg('success', msg, { toastId: msg });
    // console.log('SUCCESS', response);
  } catch (error) {
    msg = 'Thay đổi thất bại.';

    dispatch({ type: types.RESET_PASSWORD_FAILURE, payload: error });
    showToastMsg('error', msg, { toastId: msg });
    // console.log(error, 'ERROR REQ');
  }
};
