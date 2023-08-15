import { IStatePagedBase } from "../../helpersQT/IStatePagedBase";
import { STR_GET_ORDER_DETAIL_BY_ID_FAILURE, STR_GET_ORDER_DETAIL_BY_ID_REQUEST, STR_GET_ORDER_DETAIL_BY_ID_SUCCESS, typeOrderDetailActionTypes } from "./types";

const iInitialState: IStatePagedBase = {
  blnLoading: false,
  strError: null,
  dicResult: {},
  tOneItem: [],
  lstTItems: [],
  intTotalRecords: 0,
  intSumPage: 1,
  intPageIndex: 0,
  intPageSize: 10,
  strTypeDevice: "",

};

const iOrderDetailStateReducer = (
  iState: IStatePagedBase = iInitialState,
  typeAction: typeOrderDetailActionTypes
): IStatePagedBase => {
  switch (typeAction.type) {


    case STR_GET_ORDER_DETAIL_BY_ID_REQUEST: {
      return {
        ...iState,
        strError: null,
        blnLoading: true
      };
    }
    case STR_GET_ORDER_DETAIL_BY_ID_SUCCESS: {
      const intTotalRecordsCurrent = typeAction.mPayload.tResultObj.intTotalRecords;
      const intPageSizeCurrent = typeAction.mPayload.tResultObj.intPageSize;
      const intSumPageCurrent = Math.ceil(intTotalRecordsCurrent / intPageSizeCurrent);
      return {
        ...iState,
        blnLoading: false,
        strError: null,
        tOneItem: typeAction.mPayload.tResultObj.tOneItem,
        intTotalRecords: intTotalRecordsCurrent,
        intPageIndex: typeAction.mPayload.tResultObj.intPageIndex,
        intPageSize: intPageSizeCurrent,
        intSumPage: intSumPageCurrent,

        dicResult: typeAction.mPayload.dicResult,
      };
    }
    case STR_GET_ORDER_DETAIL_BY_ID_FAILURE: {
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
export { iOrderDetailStateReducer };