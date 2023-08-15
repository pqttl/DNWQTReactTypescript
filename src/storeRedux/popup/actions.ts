import {
    STR_SHOW_MESSAGE_SUCCESS,
    typePopupActionTypes,
    STR_SHOW_MESSAGE_FAILURE,
    STR_SHOW_MESSAGE_REQUEST,
    STR_SHOW_MESSAGE_NONE,
    STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON,
    STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID,
    STR_SHOW_CONFIRM,
    STR_CANCEL_CONFIRM
} from './types';

const typePopupSuccess = (strMessage: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_MESSAGE_SUCCESS
        , mPayload: { strMessage }
    };
};

const typePopupSuccessNotHaveButton = (strMessage: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON
        , mPayload: { strMessage }
    };
};

const typePopupError = (strMessage: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_MESSAGE_FAILURE
        , mPayload: { strMessage }
    };
};

const typePopupLoadingRequest = (strHeader: string, strMessage: string
    , strPercent: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_MESSAGE_REQUEST
        , mPayload: { strHeader, strMessage, strPercent }
    };
};

const typePopupHide = (): typePopupActionTypes => {
    return { type: STR_SHOW_MESSAGE_NONE };
};

// const typePopupHideThenCallVoid = (strNameCase: string): typePopupActionTypes => {
//     return {
//         type: STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID
//         , mPayload: { strNameCase }
//     };
// };

const typePopupSuccessThenCallVoid = (strMessage: string, strNameCase: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID
        , mPayload: { strMessage, strNameCase }
    };
};

const typePopupConfirm = (strMessage: string, strNameCase: string, anyParam: string): typePopupActionTypes => {
    return {
        type: STR_SHOW_CONFIRM
        , mPayload: { strMessage, strNameCase, anyParam }
    };
};

const typePopupCancelConfirm = (): typePopupActionTypes => {
    return { type: STR_CANCEL_CONFIRM };
};

export {
    typePopupSuccess,
    typePopupSuccessNotHaveButton,
    typePopupError,
    typePopupLoadingRequest,
    typePopupHide,
    typePopupSuccessThenCallVoid,
    typePopupConfirm,
    typePopupCancelConfirm,
};
