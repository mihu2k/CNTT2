const routes = {
  default: '/',
  home: '/home',
  profile: '/profile',
  login: '/login',
  product: '/product',
  productDetail: '/product/:slug',
  profileSettings: '/mypage/settings',
  checkoutShipment: '/checkout/multi/delivery-address',
  checkoutPayment: '/checkout/multi/payment-method',
  orderConfirmation: '/checkout/order-confirmation',
  cart: '/cart',
  order: '/order',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password/:userId/:token',
};

export default routes;
