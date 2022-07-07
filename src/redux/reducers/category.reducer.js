import * as types from '../types';

const initialState = {
  category: null,
  categories: [],
  status: null,
  totalPage: 1,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        status: 'pending',
      };
    case types.GET_CATEGORIES_SUCCESS:
      const categories = action.payload.data?.data ?? [];
      const totalPage = action.payload.data?.total_page ?? 1;
      return {
        ...state,
        status: 'success',
        categories,
        totalPage,
      };
    case types.GET_CATEGORIES_FAILURE:
      return {
        ...initialState,
        status: 'failure',
      };

    default:
      return { ...state };
  }
}
