import { Fragment } from 'react';
//import './styles/sb-admin-2.min.css';
//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { JSXPrivateRoute } from './components/indexExport';
//import './App.css';
//import { JSXAccountRoute } from './components/AccountRoute';
import { JSXAdmin, JSXHome, JSXOrder } from './pages/admin/indexExport';
import { JSXLogin } from './pages/account/JSXLogin';
import './styles/BootstrapSBAdminV705/stylesFontAwesome6.css';
import './styles/BootstrapSBAdminV705/styles.css';
import './styles/Bootstrapv502/bootstrap.min.css';
import { NavigateFunctionComponent } from './helpers/NavigateFunctionComponent';
import { JSXScrollToTop } from './components/JSXScrollToTop';

import { JSX404NotFound } from './pages/JSX404NotFound';
import { JSXFilterByPath } from './pages/JSXFilterByPath';
import { JSXPopup } from './components/JSXHtmlCommon/JSXPopup';
// const LazyAbout = React.lazy(() => import('./pages/admin/order/JSXOrder'));

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          {/* <NavigateFunctionComponent /> */}

          <JSXScrollToTop />
          <NavigateFunctionComponent />
          <Routes >
            {/* <PrivateRoute>
            <AdminHome />
          </PrivateRoute> */}
            {/* <Route path='/' element={<JSXAccountRoute />}>
              <Route path='/login' element={<JSXLoginDangNhap />} />
            </Route> */}

            <Route path='/login' element={<JSXLogin />} />
            {/* <Route path='/login' element={<JSXLoginDangNhap />} /> */}

            {/* Tất cả Route ở JSXPrivateRoute này đều phải đăng nhập có token mới vào được */}
            <Route element={<JSXPrivateRoute />}>
              <Route path='/' element={<JSXAdmin />} >
                <Route index element={<JSXHome />} />

                <Route path='order' element={<JSXOrder />} />

                <Route path={':strPath'} element={<JSXFilterByPath />}
                  errorElement={<p>Oops! Something Went Wrong</p>} />

                {/* 
                <Route path={"/n/:id/h"} element={<JSXOrderDetail />} />
                <Route path={"/n"} element={<JSXOrderDetailOutlet />} >

                  <Route path={":id"} element={<JSXOrderDetail />}
                    errorElement={<p>Oops! Something Went Wrong</p>} />

                </Route>

                <Route path={':idtwo'} element={<JSXOrderDetailtwo />}
                  errorElement={<p>Oops! Something Went Wrong</p>} /> */}

                {/* <Route
                  path='/order'
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyAbout />
                    </React.Suspense>
                  }
                /> */}

                {/* <Route path='*' element={<JSX404NotFound />} /> */}
              </Route>
            </Route>

            <Route path='*' element={<JSX404NotFound />} />

          </Routes>

          <JSXPopup />

        </Fragment>
      </BrowserRouter>
    </div>

  );
}

export default App;
