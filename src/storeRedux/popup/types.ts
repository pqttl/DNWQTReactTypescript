
export const STR_SHOW_MESSAGE_REQUEST = 'STR_SHOW_MESSAGE_REQUEST';

interface iShowMessageRequest {
  type: typeof STR_SHOW_MESSAGE_REQUEST;
  mPayload: {
    // strType: string;
    strHeader: string;
    strMessage: string;
    strPercent: string;
  };
}

export const STR_SHOW_MESSAGE_SUCCESS = 'STR_SHOW_MESSAGE_SUCCESS';

interface iShowMessageSuccess {
  type: typeof STR_SHOW_MESSAGE_SUCCESS;
  mPayload: {
    // strType: string;
    strMessage: string;
  };
}

export const STR_SHOW_MESSAGE_FAILURE = 'STR_SHOW_MESSAGE_FAILURE';

interface iShowMessageFailure {
  type: typeof STR_SHOW_MESSAGE_FAILURE;
  mPayload: {
    // strType: string;
    strMessage: string;
  };
}

export const STR_SHOW_MESSAGE_NONE = 'STR_SHOW_MESSAGE_NONE';

interface iShowMessageNone {
  type: typeof STR_SHOW_MESSAGE_NONE;
  // mPayload: {
  //   strType: string;
  // };
}

export const STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON = 'STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON';

interface iShowMessageSuccessNotHaveButton {
  type: typeof STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON;
  mPayload: {
    // strType: string;
    strMessage: string;
  };
}

// export const STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID = 'STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID';

// interface iShowMessageNoneThenCallVoid {
//   type: typeof STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID;
//   mPayload: {
//     strNameCase: string;
//   };
// }

export const STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID = 'STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID';

interface iShowMessageSuccessThenCallVoid {
  type: typeof STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID;
  mPayload: {
    // strType: string;
    strMessage: string;
    strNameCase: string;
  };
}

export const STR_SHOW_CONFIRM = 'STR_SHOW_CONFIRM';

interface iShowConfirm {
  type: typeof STR_SHOW_CONFIRM;
  mPayload: {
    // strType: string;
    strMessage: string;
    strNameCase: string;
    anyParam: any;
  };
}

export const STR_CANCEL_CONFIRM = 'STR_CANCEL_CONFIRM';

interface iCancelConfirm {
  type: typeof STR_CANCEL_CONFIRM;
  // mPayload: {
  //   strType: string;
  // };
}

export interface iPopupState {
  strType: string | null;
  strHeader: string | null;
  strMessage: string | null;
  strPercent: string | null;
  strNameCase: string | null;
  blnLoading: boolean;
  anyParam: any;
}

export type typePopupActionTypes =
  | iShowMessageRequest
  | iShowMessageSuccess
  | iShowMessageFailure
  | iShowMessageNone
  | iShowMessageSuccessNotHaveButton
  // | iShowMessageNoneThenCallVoid
  | iShowMessageSuccessThenCallVoid
  | iShowConfirm
  | iCancelConfirm
  ;
