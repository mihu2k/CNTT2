// config
import config from '~/config';

// layouts
import { HeaderOnly } from '~/layout';

//pages
import Home from '~/pages/home/home.component';
import Profile from '~/pages/profile/profile.component';
import SignIn from '~/pages/login-form/login-form.component';
import Search from '~/pages/search/search.component';
import Product from '~/pages/product/product.component';
import ProductDetail from '~/pages/product-detail/product-detail.component';

const publicRoutes = [
  { path: config.routes.default, component: Home },
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.login, component: SignIn, layout: null },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
