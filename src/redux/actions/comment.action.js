import { showToastMsg } from '~/common/utils';
import CommentService from '~/services/comment.service';
import * as types from '../types';

export const getCommentsByProductIdRequest =
  (id, query) => async (dispatch) => {
    dispatch({ type: types.GET_COMMENTS_BY_PRODUCT_ID_REQUEST });

    try {
      const response = await CommentService.getByProductId(id, query);
      dispatch({
        type: types.GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
        payload: response,
      });
      console.log('SUCCESS', response);
    } catch (error) {
      dispatch({
        type: types.GET_COMMENTS_BY_PRODUCT_ID_FAILURE,
        payload: error,
      });
      console.log(error, 'ERROR REQ');
    }
  };

export const createCommentRequest = (data) => async (dispatch) => {
  dispatch({ type: types.CREATE_COMMENT_REQUEST });

  try {
    const response = await CommentService.create(data);
    dispatch({ type: types.CREATE_COMMENT_SUCCESS, payload: response });
    // dispatch(getCommentsByProductIdRequest(data.productId, {}));
    showToastMsg('success', 'Đánh giá thành công.', { toastId: 'hung' });
    console.log('SUCCESS CREATE COMMENT', response);
  } catch (error) {
    dispatch({ type: types.CREATE_COMMENT_FAILURE, payload: error });
    error.response.status === 401 ||
      (error.response.status === 403 &&
        showToastMsg('error', 'Đăng nhập để đánh giá.', { toastId: 'hung' }));
    console.log(error, 'ERROR REQ CREATE COMMENT');
  }
};
