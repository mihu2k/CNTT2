// layouts
import { HeaderOnly } from '~/components/layout/layout.component';

//pages
import Home from '~/pages/home/home.component';
import Profile from '~/pages/profile/profile.component';
import SignInSide from '~/pages/sign-in/sign-in.component';
import Search from '~/pages/search/search.component';
import Product from '~/pages/product/product.component';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/login', component: SignInSide, layout: null },
    { path: '/search', component: Search, layout: null },
    { path: '/search', component: Search, layout: null },
    { path: '/product', component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
