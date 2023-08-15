import {
  typeAccountActionTypes,
  iAccountState,
  STR_LOGIN_FAILURE,
  STR_LOGIN_REQUEST,
  STR_LOGIN_SUCCESS,
  STR_LOG_OUT,
  STR_LOAD_CURRENT_LOGIN_USER_REQUEST,
  STR_LOAD_CURRENT_LOGIN_USER_SUCCESS,
  STR_LOAD_CURRENT_LOGIN_USER_FAILURE,
} from './types';

const iInitialState: iAccountState = {
  iUser: null,
  blnLoading: false,
  strError: null,
  strToken: null,
  strUsername: "null",
};

const iAccountStateReducer = (
  iState: iAccountState = iInitialState,
  typeAction: typeAccountActionTypes
): iAccountState => {
  switch (typeAction.type) {


    case STR_LOGIN_REQUEST: {
      return {
        ...iState,
        strError: null,
        blnLoading: true
      };
    }
    case STR_LOGIN_SUCCESS: {
      return {
        ...iState,
        blnLoading: false,
        strError: null,
        strToken: typeAction.mPayload.strToken,
        strUsername: typeAction.mPayload.strUsername,
      };
    }
    case STR_LOGIN_FAILURE: {
      return {
        ...iState,
        blnLoading: false,
        strError: typeAction.mPayload.strError,
      };
    }


    case STR_LOG_OUT: {
      return {
        ...iState,
        iUser: null,
        strToken: null,
        strError: null,
      };
    }


    case STR_LOAD_CURRENT_LOGIN_USER_REQUEST: {
      return { ...iState, blnLoading: true };
    }
    case STR_LOAD_CURRENT_LOGIN_USER_SUCCESS: {
      return {
        ...iState,
        blnLoading: false,
        iUser: typeAction.mPayload.iUser,
      };
    }
    case STR_LOAD_CURRENT_LOGIN_USER_FAILURE: {
      return {
        ...iState,
        blnLoading: false,
        strError: typeAction.mPayload.strError,
      };
    }


    default:
      return iState;
  }
};
export { iAccountStateReducer };