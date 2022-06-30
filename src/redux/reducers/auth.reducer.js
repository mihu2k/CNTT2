import * as types from '../types';

const initialState = {
  profile: null,
  status: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        profile: action.payload.data,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        status: 'failure',
        profile: null,
      };

    default:
      return { ...state };
  }
}
