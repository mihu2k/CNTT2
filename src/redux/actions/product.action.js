import ProductService from '~/services/product.service';
import * as types from '../types';
import { trackPromise } from 'react-promise-tracker';

export const getProductsRequest = (query) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  try {
    const response = await trackPromise(ProductService.getAll(query));
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: response });
    // console.log('SUCCESS', response);
  } catch (error) {
    dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error });
    // console.log(error, 'ERROR REQ');
  }
};

export const getProductBySlugRequest = (slug) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_BY_SLUG_REQUEST });

  try {
    const response = await trackPromise(ProductService.getOneBySlug(slug));
    dispatch({ type: types.GET_PRODUCT_BY_SLUG_SUCCESS, payload: response });
    // console.log('SUCCESS', response);
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_BY_SLUG_FAILURE, payload: error });
    // console.log(error, 'ERROR REQ');
  }
};
