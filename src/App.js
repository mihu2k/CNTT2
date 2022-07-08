import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from './config';
import { useDispatch, useSelector } from 'react-redux';
import { getCartRequest } from './redux/actions/cart.action';

function App() {
  const dispatch = useDispatch();
  const { cart: cartReducer } = useSelector((state) => state);
  const currentUser = JSON.parse(localStorage.getItem('profile'))?.data;

  const fetchCart = () => dispatch(getCartRequest());

  React.useEffect(() => {
    if (!localStorage.getItem('profile')) {
      localStorage.setItem('profile', null);
    }
    fetchCart();
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartReducer.products));
  }, [cartReducer]);

  console.log('HEADER');

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.path === '/login' && currentUser ? (
                    <Navigate to={config.routes.home} replace />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
        <ToastContainer limit={1} />
      </div>
    </Router>
  );
}

export default App;
