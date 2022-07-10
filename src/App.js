import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultLayout } from '~/layout';
import { privateRoutes, publicRoutes, RequireAuth } from '~/routes';
import { getCartRequest } from './redux/actions/cart.action';

function App() {
  const dispatch = useDispatch();
  const { cart: cartReducer } = useSelector((state) => state);

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
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
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
                  <RequireAuth>
                    <Layout>
                      <Page />
                    </Layout>
                  </RequireAuth>
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
