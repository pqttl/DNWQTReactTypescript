import { Navigate } from 'react-router-dom';

import { iAccountState } from '../storeRedux/account/types';
import { typeAppState } from '../storeRedux/indexExport';
import { useSelector } from 'react-redux';
import { JSXLogin } from '../pages/account/JSXLogin';

export const JSXAccountRoute = () => {
  //const auth = null; // determine if authorized, from context or however you're doing it
  const account: iAccountState = useSelector((state: typeAppState) => state.iStateAccountGlobal);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return account.strToken ? <Navigate to="/admin/home" /> : <JSXLogin />;
  // return account.strToken ? <Navigate to="/admin/home" /> : <JSXLoginDangNhap />;
}
