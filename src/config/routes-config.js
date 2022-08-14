const routes = {
  default: '/',
  home: '/home',
  product: '/products',
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
  // -----
  hadError: '*',
};

export default routes;
