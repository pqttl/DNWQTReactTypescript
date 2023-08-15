import {
  STR_GET_ORDER_DETAIL_BY_ID_REQUEST,
  STR_GET_ORDER_DETAIL_BY_ID_SUCCESS,
  STR_GET_ORDER_DETAIL_BY_ID_FAILURE,
  typeOrderDetailActionTypes,
  STR_ADD_PRODUCT_TO_ORDER_REQUEST,
  STR_ADD_PRODUCT_TO_ORDER_SUCCESS,
  STR_ADD_PRODUCT_TO_ORDER_FAILURE,
  iInputAddProductToOrder,
  STR_DELETE_DETAIL_BY_ID_REQUEST,
  STR_DELETE_DETAIL_BY_ID_FAILURE,
  STR_DELETE_DETAIL_BY_ID_SUCCESS,
  iInputUpdateProductInOrder,
  STR_UPDATE_PRODUCT_IN_ORDER_REQUEST,
  STR_UPDATE_PRODUCT_IN_ORDER_FAILURE,
  STR_UPDATE_PRODUCT_IN_ORDER_SUCCESS
} from './types';

import { Dispatch } from 'react';
import { orderDetailService } from '../../servicesApi/orderDetail.service';
import { typePopupError, typePopupLoadingRequest, typePopupSuccessThenCallVoid } from '../popup/actions';
import { typePopupActionTypes } from '../popup/types';
import { ValueConstants } from '../../constants/valueConstants';



//Đây là cách 2 dùng axios api ngắn hơn

const voidGetOrderDetailByOrderId = async (dispatch: Dispatch<typeOrderDetailActionTypes>
  , intIdInput: number) => {
  try {
    dispatch({
      type: STR_GET_ORDER_DETAIL_BY_ID_REQUEST,
      mPayload: {
        intId: intIdInput,
      }
    });

    const response = await orderDetailService.voidGetOrderDetailByOrderId(intIdInput);

    dispatch({
      type: STR_GET_ORDER_DETAIL_BY_ID_SUCCESS,
      mPayload: response,
    });
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof TypeError) {
      message = error.stack as string;
    }
    dispatch({
      type: STR_GET_ORDER_DETAIL_BY_ID_FAILURE,
      mPayload: { strError: message },
    });
  }
};

export const voidDispatchGetOrderDetailByOrderId = (intIdInput: number) => {
  return async (dispatch: Dispatch<typeOrderDetailActionTypes>) => {
    voidGetOrderDetailByOrderId(dispatch, intIdInput);
  };
};

export const voidDispatchAddProductToOrder = (mInput: iInputAddProductToOrder) => {
  return async (dispatch: Dispatch<typeOrderDetailActionTypes | typePopupActionTypes>) => {
    try {
      dispatch({
        type: STR_ADD_PRODUCT_TO_ORDER_REQUEST,
      });
      dispatch(typePopupLoadingRequest("THÊM VỊ THUỐC", "", "80%"));

      const response = await orderDetailService.voidAddProductToOrder(mInput);

      const strMess = response.strMessage;
      if (response.blnIsSuccessed === false) {
        dispatch({
          type: STR_ADD_PRODUCT_TO_ORDER_FAILURE,
          mPayload: { strError: strMess },
        });
        dispatch(typePopupError(strMess));
        return;
      }

      dispatch({
        type: STR_ADD_PRODUCT_TO_ORDER_SUCCESS,
      });
      // dispatch(voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder));
      // voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder);
      voidGetOrderDetailByOrderId(dispatch, mInput.IntIdOrder);
      dispatch(typePopupSuccessThenCallVoid(strMess, ValueConstants.STR_CASE_JSXAddOrderDetail.BamNutNhapLai));

    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof TypeError) {
        message = error.stack as string;
      }
      dispatch({
        type: STR_ADD_PRODUCT_TO_ORDER_FAILURE,
        mPayload: { strError: message },
      });
      dispatch(typePopupError(message));
    }
  };
};

export const voidDispatchvoidUpdateProductInOrder = (mInput: iInputUpdateProductInOrder
  , intIdOrder: number) => {
  return async (dispatch: Dispatch<typeOrderDetailActionTypes | typePopupActionTypes>) => {
    try {
      dispatch({
        type: STR_UPDATE_PRODUCT_IN_ORDER_REQUEST,
      });
      dispatch(typePopupLoadingRequest("CẬP NHẬT VỊ THUỐC", "", "80%"));

      const response = await orderDetailService.voidUpdateProductInOrder(mInput);

      const strMess = response.strMessage;
      if (response.blnIsSuccessed === false) {
        dispatch({
          type: STR_UPDATE_PRODUCT_IN_ORDER_FAILURE,
          mPayload: { strError: strMess },
        });
        dispatch(typePopupError(strMess));
        return;
      }

      dispatch({
        type: STR_UPDATE_PRODUCT_IN_ORDER_SUCCESS,
      });
      // dispatch(voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder));
      // voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder);
      voidGetOrderDetailByOrderId(dispatch, intIdOrder);
      dispatch(typePopupSuccessThenCallVoid(strMess, ValueConstants.STR_CASE_JSXAddOrderDetail.BamNutNhapLai));

    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof TypeError) {
        message = error.stack as string;
      }
      dispatch({
        type: STR_UPDATE_PRODUCT_IN_ORDER_FAILURE,
        mPayload: { strError: message },
      });
      dispatch(typePopupError(message));
    }
  };
};

export const voidDispatchDeleteDetailById = (intId: number) => {
  return async (dispatch: Dispatch<typeOrderDetailActionTypes | typePopupActionTypes>) => {
    try {
      dispatch({
        type: STR_DELETE_DETAIL_BY_ID_REQUEST,
      });
      dispatch(typePopupLoadingRequest("XÓA VỊ THUỐC", "", "80%"));

      const response = await orderDetailService.voidDeleteDetailById(intId);

      const strMess = response.strMessage;
      if (response.blnIsSuccessed === false) {
        dispatch({
          type: STR_DELETE_DETAIL_BY_ID_FAILURE,
          mPayload: { strError: strMess },
        });
        dispatch(typePopupError(strMess));
        return;
      }

      dispatch({
        type: STR_DELETE_DETAIL_BY_ID_SUCCESS,
      });
      // dispatch(voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder));
      // voidDispatchGetOrderDetailByOrderId(mInput.IntIdOrder);
      // voidGetOrderDetailByOrderId(dispatch, mInput.IntIdOrder);
      dispatch(typePopupSuccessThenCallVoid("Thao tác xóa thành công!"
        , ValueConstants.STR_CASE_JSXOrderDetailById.voidDispatchGetOrderDetailByOrderId));

    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof TypeError) {
        message = error.stack as string;
      }
      dispatch({
        type: STR_DELETE_DETAIL_BY_ID_FAILURE,
        mPayload: { strError: message },
      });
      dispatch(typePopupError(message));
    }
  };
};
