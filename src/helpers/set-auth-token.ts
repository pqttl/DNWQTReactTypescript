import { tsApi } from './';

export const setAuthToken = (token: string) => {
  // const strKeyTokenNodeJs = 'x-auth-token';
  const strKeyTokenBearer = 'Authorization';

  if (token) {
    //x-auth-token chắc là token của nodejs
    // tsApi.defaults.headers.common[strKeyTokenNodeJs] = token;
    tsApi.defaults.headers.common[strKeyTokenBearer] = "Bearer " + token;
  } else {
    // delete tsApi.defaults.headers.common[strKeyTokenNodeJs];
    delete tsApi.defaults.headers.common[strKeyTokenBearer];
  }
};