import * as types from '../types';

const initialState = {
  user: null,
  users: [],
  status: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.RESET_PASSWORD_CONFIRM_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.RESET_PASSWORD_CONFIRM_SUCCESS:
      return {
        ...state,
        status: 'success',
      };
    case types.RESET_PASSWORD_CONFIRM_FAILURE:
      return {
        ...state,
        status: 'failure',
      };
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        status: 'success',
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        status: 'failure',
      };

    default:
      return { ...state };
  }
}
