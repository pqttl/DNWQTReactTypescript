import { ValueConstants } from "../../constants/valueConstants";
import { iPopupState, STR_CANCEL_CONFIRM, STR_SHOW_CONFIRM, STR_SHOW_MESSAGE_FAILURE, STR_SHOW_MESSAGE_NONE, STR_SHOW_MESSAGE_REQUEST, STR_SHOW_MESSAGE_SUCCESS, STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON, STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID, typePopupActionTypes } from "./types";

const iInitialState: iPopupState = {
  strType: null,
  strHeader: null,
  strMessage: null,
  strPercent: null,
  strNameCase: null,
  blnLoading: false,
  anyParam: null,
};

const iPopupStateReducer = (
  iState: iPopupState = iInitialState,
  typeAction: typePopupActionTypes
): iPopupState => {
  switch (typeAction.type) {


    case STR_SHOW_MESSAGE_REQUEST: {
      return {
        ...iState,
        // strError: null,
        blnLoading: true,
        strHeader: typeAction.mPayload.strHeader,
        strMessage: typeAction.mPayload.strMessage,
        strPercent: typeAction.mPayload.strPercent,
        strNameCase: null,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[0],
      };
    }
    case STR_SHOW_MESSAGE_SUCCESS: {
      return {
        ...iState,
        blnLoading: false,
        // strError: null,
        strMessage: typeAction.mPayload.strMessage,
        strNameCase: null,
        // strUsername: typeAction.mPayload.strUsername,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[1],
      };
    }
    case STR_SHOW_MESSAGE_FAILURE: {
      return {
        ...iState,
        blnLoading: false,
        // strError: typeAction.mPayload.strError,
        strMessage: typeAction.mPayload.strMessage,
        strNameCase: null,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[2],
      };
    }

    case STR_SHOW_MESSAGE_NONE: {
      return {
        ...iState,
        blnLoading: false,
        // strError: typeAction.mPayload.strError,
        // strMessage: typeAction.mPayload.strMessage,
        // strNameCase: null,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[3],
      };
    }

    case STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON: {
      return {
        ...iState,
        blnLoading: false,
        // strError: null,
        strMessage: typeAction.mPayload.strMessage,
        strNameCase: null,
        // strUsername: typeAction.mPayload.strUsername,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[4],
      };
    }

    // case STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID: {
    //   return {
    //     ...iState,
    //     blnLoading: false,
    //     // strError: typeAction.mPayload.strError,
    //     // strMessage: typeAction.mPayload.strMessage,
    //     strNameCase: typeAction.mPayload.strNameCase,
    //     strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[5],
    //   };
    // }

    case STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID: {
      return {
        ...iState,
        blnLoading: false,
        // strError: null,
        strMessage: typeAction.mPayload.strMessage,
        strNameCase: typeAction.mPayload.strNameCase,
        // strUsername: typeAction.mPayload.strUsername,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[6],
      };
    }

    case STR_SHOW_CONFIRM: {
      return {
        ...iState,
        blnLoading: false,
        // strError: null,
        strMessage: typeAction.mPayload.strMessage,
        strNameCase: typeAction.mPayload.strNameCase,
        anyParam: typeAction.mPayload.anyParam,
        // strUsername: typeAction.mPayload.strUsername,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[7],
      };
    }

    case STR_CANCEL_CONFIRM: {
      return {
        ...iState,
        blnLoading: false,
        // strError: typeAction.mPayload.strError,
        // strMessage: typeAction.mPayload.strMessage,
        strNameCase: null,
        anyParam: null,
        strType: ValueConstants.ARRAY_STR_TYPE_MESSAGE[8],
      };
    }

    default:
      return iState;
  }
};
export { iPopupStateReducer };