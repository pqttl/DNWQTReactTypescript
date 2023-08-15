//import env from 'react-dotenv';
import { tsApi } from '../helpers';

// const login = (email: string, password: string) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   };

//   return fetch(`${env.API_URL}/api/v1/auth`, requestOptions)
//     .then(handleResponse)
//     .then((response) => {
//       sessionStorage.setItem('user', JSON.stringify(response));
//       return response;
//     });
// };



const voidLogin = async (strUserName: string, strPassword: string) => {
  const body = { strUserName, strPassword };
  return await tsApi.post('/Login/TARAuthenticate', body).then((response) => {
    return response.data;
  });
};

const getCurrentLoginUser = async (): Promise<any> => {
  return await tsApi.get<any>('/Login/TARAuthenticate').then((response) => {
    return response.data;
  });
};

const voidLogout = () => {
  sessionStorage.removeItem('user');
};

export const userService = {
  voidLogin,
  voidLogout,
  getCurrentLoginUser,
};



//Đây là cách 1 dùng fetch của javascript để gọi api

// const voidLogin = (strUserName: string, strPassword: string) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ strUserName, strPassword,true:Boolean }),
//   };

//   return fetch(`${env.API_URL}/api/Login/TARAuthenticate`, requestOptions)
//     .then(handleResponse)
//     .then((response) => {
//       sessionStorage.setItem('user', JSON.stringify(response));
//       return response;
//     });
// };

// const voidLogout = () => {
//   sessionStorage.removeItem('user');
// };

// const handleResponse = (response: any) => {
//   return response.text().then((text: string) => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         voidLogout();
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// };

// export const userService = {
//   voidLogin: voidLogin,
//   voidLogout: voidLogout,
// };