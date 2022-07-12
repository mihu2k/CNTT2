const routes = {
  default: '/',
  home: '/home',
  product: '/product',
  productDetail: '/product/:slug',
  cart: '/cart',
  login: '/login',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password/:userId/:token',
  // -----
  profile: '/profile',
  profileSettings: '/profile/settings',
  checkoutShipment: '/checkout/delivery-address',
  checkoutPayment: '/checkout/payment-method',
  orderConfirmation: '/checkout/order-confirmation',
  order: '/order',
  hadError: '/had-error',
};

export default routes;
