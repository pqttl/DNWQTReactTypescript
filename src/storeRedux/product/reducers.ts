import { IStatePagedBase } from "../../helpersQT/IStatePagedBase";
import { STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE, STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST, STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS, typeProductActionTypes } from "./types";

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

const iProductStateReducer = (
  iState: IStatePagedBase = iInitialState,
  typeAction: typeProductActionTypes
): IStatePagedBase => {
  switch (typeAction.type) {


    case STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST: {
      return {
        ...iState,
        strError: null,
        blnLoading: true,
      };
    }
    case STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS: {
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
    case STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE: {
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
export { iProductStateReducer };