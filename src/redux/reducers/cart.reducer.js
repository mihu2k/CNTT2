import config from '~/config';
import * as types from '../types';

const initialState = {
  products: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CART_SUCCESS: {
      const newCart = [...state.products];
      const isExistProduct = newCart.some(
        (product) =>
          product.colorValue === action.payload.product.colorValue &&
          product._id === action.payload.product._id,
      );

      if (!isExistProduct) {
        newCart.push({
          ...action.payload.product,
          quantity: !action.payload.navigate
            ? action.payload.product?.quantity ?? 1
            : 1,
        });
        action.payload.navigate && action.payload.navigate(config.routes.cart);
      } else {
        const index = newCart.findIndex(
          (item) =>
            item.colorValue === action.payload.product.colorValue &&
            item._id === action.payload.product._id,
        );
        !action.payload.navigate
          ? (newCart[index].quantity =
              Number(newCart[index].quantity) +
              (action.payload.product?.quantity ?? 1))
          : action.payload.navigate(config.routes.cart);
      }

      return {
        ...state,
        products: newCart,
      };
    }
    case types.GET_CART_SUCCESS: {
      let cart = [];
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      } else {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      return {
        ...state,
        products: cart,
      };
    }
    case types.ACTION_COUNT_SUCCESS: {
      const newProducts = [...state.products];
      const index = newProducts.findIndex(
        (product) =>
          product._id === action.payload.product._id &&
          product.colorValue === action.payload.product.colorValue,
      );
      if (index > -1) {
        if (action.payload.type === 'increase') {
          newProducts[index].quantity = Number(newProducts[index].quantity) + 1;
        }
        if (action.payload.type === 'decrease') {
          newProducts[index].quantity = Number(newProducts[index].quantity) - 1;
        }
      }
      return {
        ...state,
        products: newProducts,
      };
    }
    case types.CHANGE_COUNT_SUCCESS: {
      const newProducts = [...state.products];
      const index = newProducts.findIndex(
        (product) =>
          product._id === action.payload.product._id &&
          product.colorValue === action.payload.product.colorValue,
      );
      if (index > -1) {
        newProducts[index].quantity = Number(action.payload.quantity);
      }
      return {
        ...state,
        products: newProducts,
      };
    }
    case types.DELETE_CART_SUCCESS: {
      const newProducts = [...state.products].filter(
        (product) =>
          product._id !== action.payload._id ||
          product.colorValue !== action.payload.colorValue,
      );
      return {
        ...state,
        products: newProducts,
      };
    }

    default:
      return { ...state };
  }
}
