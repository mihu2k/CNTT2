// config
import config from '~/config';

// layouts
// import { HeaderOnly } from '~/layout';
import { FooterOnly } from '~/layout';

//pages
import Home from '~/pages/home/home.component';
import Profile from '~/pages/profile/profile.component';
import ProfileSettings from '~/pages/profile-settings/profile-settings.component';
import SignIn from '~/pages/login-form/login-form.component';
import Product from '~/pages/product/product.component';
import ProductDetail from '~/pages/product-detail/product-detail.component';
import CheckoutShipment from '~/pages/checkout/checkout.component';

const publicRoutes = [
  { path: config.routes.default, component: Home },
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.profileSettings, component: ProfileSettings },
  { path: config.routes.login, component: SignIn, layout: null },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
  {
    path: config.routes.checkoutShipmentInfo,
    component: CheckoutShipment,
    layout: FooterOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
