import { IStatePagedBase } from '../../helpersQT/IStatePagedBase';
import {
  typeOrderActionTypes,
  STR_GET_ORDER_PAGING_REQUEST,
  STR_GET_ORDER_PAGING_SUCCESS,
  STR_GET_ORDER_PAGING_FAILURE,
} from './types';

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

const iOrderStateReducer = (
  iState: IStatePagedBase = iInitialState,
  typeAction: typeOrderActionTypes
): IStatePagedBase => {
  switch (typeAction.type) {


    case STR_GET_ORDER_PAGING_REQUEST: {
      return {
        ...iState,
        strError: null,
        blnLoading: true
      };
    }
    case STR_GET_ORDER_PAGING_SUCCESS: {
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
      };
    }
    case STR_GET_ORDER_PAGING_FAILURE: {
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
export { iOrderStateReducer };