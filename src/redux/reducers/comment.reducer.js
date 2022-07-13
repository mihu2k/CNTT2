import * as types from '../types';

const initialState = {
  comment: null,
  comments: [],
  status: null,
  totalPage: 1,
  totalRecord: 0,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COMMENTS_BY_PRODUCT_ID_REQUEST:
      return {
        ...state,
        status: types.GET_COMMENTS_BY_PRODUCT_ID_REQUEST,
      };
    case types.GET_COMMENTS_BY_PRODUCT_ID_SUCCESS:
      const comments = action.payload.data?.data;
      return {
        ...state,
        status: types.GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
        comments,
        totalPage: action.payload.data?.total_page ?? 1,
        totalRecord: action.payload.data?.totalRecord ?? 0,
      };
    case types.GET_COMMENTS_BY_PRODUCT_ID_FAILURE:
      return {
        ...state,
        status: types.GET_COMMENTS_BY_PRODUCT_ID_FAILURE,
        comments: [],
        totalPage: 1,
        totalRecord: 0,
      };
    case types.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        status: types.CREATE_COMMENT_REQUEST,
      };
    case types.CREATE_COMMENT_SUCCESS:
      const comment = action.payload.data?.data;
      return {
        ...state,
        status: types.CREATE_COMMENT_SUCCESS,
        comment,
      };
    case types.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        status: types.CREATE_COMMENT_FAILURE,
        comment: null,
      };

    default:
      return { ...state };
  }
}
