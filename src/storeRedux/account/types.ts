//Bắt buộc phải dùng 3 const string vì (dùng string + string thì lỗi) + (dùng biến + string cũng lỗi)

import { IStateBase } from "../../helpersQT/IStateBase";






export interface iAuthenticatedUser {
  _id: string;
  strFirst_name: string;
  strLast_name: string;
  strEmail: string;
  strAvatar: string;
}

export interface iAccountState extends IStateBase {
  iUser: iAuthenticatedUser | null;
  strToken: string | null;
  strUsername: string | null;
}


//Bắt buộc dùng biến tên type thay vì strType vì trong file index của redux mặc định dùng biến type
//payload tiếng anh nghĩa là khối hàng

export const STR_LOGIN_REQUEST = 'STR_LOGIN_REQUEST';

interface iLoginRequest {
  type: typeof STR_LOGIN_REQUEST;
  mPayload: {
    strEmail: string;
    strPassword: string;
  };
}

export const STR_LOGIN_SUCCESS = 'STR_LOGIN_SUCCESS';

interface iLoginSuccess {
  type: typeof STR_LOGIN_SUCCESS;
  mPayload: {
    strToken: string;
    strUsername: string;
  };
}

export const STR_LOGIN_FAILURE = 'STR_LOGIN_FAILURE';

interface iLoginFailure {
  type: typeof STR_LOGIN_FAILURE;
  mPayload: {
    strError: string;
  };
}


export const STR_LOG_OUT = 'STR_LOG_OUT';

interface iLogout {
  type: typeof STR_LOG_OUT;
}


export const STR_LOAD_CURRENT_LOGIN_USER_REQUEST =
  'STR_LOAD_CURRENT_LOGIN_USER_REQUEST';

interface iLoadCurrentLoginUserRequest {
  type: typeof STR_LOAD_CURRENT_LOGIN_USER_REQUEST;
}

export const STR_LOAD_CURRENT_LOGIN_USER_SUCCESS =
  'STR_LOAD_CURRENT_LOGIN_USER_SUCCESS';

interface iLoadCurrentLoginUserSuccess {
  type: typeof STR_LOAD_CURRENT_LOGIN_USER_SUCCESS;
  mPayload: {
    iUser: iAuthenticatedUser;
  };
}

export const STR_LOAD_CURRENT_LOGIN_USER_FAILURE =
  'STR_LOAD_CURRENT_LOGIN_USER_FAILURE';

interface iLoadCurrentLoginUserFailure {
  type: typeof STR_LOAD_CURRENT_LOGIN_USER_FAILURE;
  mPayload: {
    strError: string;
  };
}


export type typeAccountActionTypes =
  | iLoginRequest
  | iLoginSuccess
  | iLoginFailure
  | iLogout
  | iLoadCurrentLoginUserRequest
  | iLoadCurrentLoginUserSuccess
  | iLoadCurrentLoginUserFailure;