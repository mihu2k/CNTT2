// config
import config from '~/config';

// layouts
// import { HeaderOnly } from '~/layout';
import { FooterOnly } from '~/layout';

//pages
import { Navigate, useLocation } from 'react-router-dom';
import { Cart } from '~/pages';
import CheckoutPayment from '~/pages/checkout-payment/checkout-payment.component';
import CheckoutShipment from '~/pages/checkout-shipment/checkout-shipment.component';
import CheckoutConfirmation from '~/pages/checkout-success/checkout-success.component';
import ForgetPassword from '~/pages/forget-password/forget-password.component';
import Home from '~/pages/home/home.component';
import SignIn from '~/pages/login-form/login-form.component';
import Order from '~/pages/orders/orders.component';
import ProductDetail from '~/pages/product-detail/product-detail.component';
import Product from '~/pages/product/product.component';
import ProfileSettings from '~/pages/profile-settings/profile-settings.component';
import Profile from '~/pages/profile/profile.component';
import ResetPassword from '~/pages/reset-password/reset-password.component';

const publicRoutes = [
  { path: config.routes.default, component: Home },
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: SignIn, layout: null },
  {
    path: config.routes.forgetPassword,
    component: ForgetPassword,
    layout: null,
  },
  {
    path: config.routes.resetPassword,
    component: ResetPassword,
    layout: null,
  },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
  {
    path: config.routes.cart,
    component: Cart,
    layout: FooterOnly,
  },
];

const privateRoutes = [
  { path: config.routes.profile, component: Profile },
  {
    path: config.routes.checkoutShipment,
    component: CheckoutShipment,
    layout: FooterOnly,
  },
  {
    path: config.routes.checkoutPayment,
    component: CheckoutPayment,
    layout: FooterOnly,
  },
  {
    path: config.routes.orderConfirmation,
    component: CheckoutConfirmation,
    layout: FooterOnly,
  },
  { path: config.routes.order, component: Order },
  // { path: config.routes.profileSettings, component: ProfileSettings },
];

function RequireAuth({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('profile'));
  const location = useLocation();

  if (!currentUser?.data) {
    return (
      <Navigate to={config.routes.login} state={{ from: location }} replace />
    );
  }
  return children;
}

export { publicRoutes, privateRoutes, RequireAuth };
