import axios from 'axios';
import env from 'react-dotenv';
import { NavigateFunction } from 'react-router-dom';
import { UrlConstants } from '../constants/urlConstants';

const tsApi = axios.create({
  baseURL: `${env.API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// **/

// tsApi.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       //todo
//       try {
//         // const navigate = useNavigate();

//         // navigate(UrlConstants.STR_LOGIN);
//         // navRef.current(UrlConstants.STR_LOGIN);
//       } catch (error) {
//         let message = 'Unknown Error'
//         if (error instanceof TypeError) {
//           message = error.stack as string;
//         }
//       }
//     }
//     return Promise.reject(err);
//   }
// );

const SetupInterceptors = (navigate: NavigateFunction) => {
  tsApi.interceptors.response.use(

    (res) => {
      // if (res.status === 401) {
      //   //todo
      //   try {
      //     //const navigate = useNavigate();

      //     navigate(UrlConstants.STR_LOGIN);
      //   } catch (error) {
      //     let message = 'Unknown Error'
      //     if (error instanceof TypeError) {
      //       message = error.stack as string;
      //     }
      //   }

      //   return Promise.reject(res);
      // }


      return res;
    },
    (err) => {
      if (err.response.status === 401) {
        //todo
        try {
          //const navigate = useNavigate();

          navigate(UrlConstants.STR_LOGIN);
        } catch (error) {
          let message = 'Unknown Error'
          if (error instanceof TypeError) {
            message = error.stack as string;
          }
          console.log(message);
        }
      }
      return Promise.reject(err);
    }

  );
};

export { tsApi, SetupInterceptors };