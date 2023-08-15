import { Outlet } from 'react-router-dom';

import { iAccountState } from '../storeRedux/account/types';
import { typeAppState } from '../storeRedux/indexExport';
import { useSelector } from 'react-redux';
import { JSXLogin } from '../pages/account/JSXLogin';

/* export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  //return <Route {...rest} render={() => (true ? children : <LoginDangNhap />)}></Route>;
  return <Route {...rest} element={(true ? children : <LoginDangNhap />)}></Route>;
}; */

export const JSXPrivateRoute = () => {
  //const auth = null; // determine if authorized, from context or however you're doing it
  const account: iAccountState = useSelector((state: typeAppState) => state.iStateAccountGlobal);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  //return account.strToken ? <Outlet /> : <JSXLogin />;
  // return account.strToken ? <Outlet /> : <JSXLoginDangNhap />;
  //return account.strToken ? <Navigate to="/" /> : <JSXLoginDangNhap />;
  //return account.strToken ? <JSXAdmin /> : <JSXLoginDangNhap />;

  if (account.strToken !== null && account.strToken !== "") {
    return (<Outlet />);
  }

  return (<JSXLogin />);
}