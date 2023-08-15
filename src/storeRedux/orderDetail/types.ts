import { ApiResult } from "../../helpersQT/ApiResult";
import { PagedResult } from "../../helpersQT/PagedResult";

export const STR_GET_ORDER_DETAIL_BY_ID_REQUEST = 'STR_GET_ORDER_DETAIL_BY_ID_REQUEST';

interface iGetOrderDetailByIdRequest {
  type: typeof STR_GET_ORDER_DETAIL_BY_ID_REQUEST;
  mPayload: {
    intId: number;
  };
}

export const STR_GET_ORDER_DETAIL_BY_ID_SUCCESS = 'STR_GET_ORDER_DETAIL_BY_ID_SUCCESS';

interface iGetOrderDetailByIdSuccess {
  type: typeof STR_GET_ORDER_DETAIL_BY_ID_SUCCESS;
  mPayload: ApiResult<PagedResult<any>>;
}

export const STR_GET_ORDER_DETAIL_BY_ID_FAILURE = 'STR_GET_ORDER_DETAIL_BY_ID_FAILURE';

interface iGetOrderDetailByIdFailure {
  type: typeof STR_GET_ORDER_DETAIL_BY_ID_FAILURE;
  mPayload: {
    strError: string;
  };
}



export interface iInputAddProductToOrder {
  StrNameProduct: string;
  StrQuantity: string;
  StrPrice: string;
  IntIdOrder: number;
}

export const STR_ADD_PRODUCT_TO_ORDER_REQUEST = 'STR_ADD_PRODUCT_TO_ORDER_REQUEST';

interface iAddProductToOrderRequest {
  type: typeof STR_ADD_PRODUCT_TO_ORDER_REQUEST;
}

export const STR_ADD_PRODUCT_TO_ORDER_SUCCESS = 'STR_ADD_PRODUCT_TO_ORDER_SUCCESS';

interface iAddProductToOrderSuccess {
  type: typeof STR_ADD_PRODUCT_TO_ORDER_SUCCESS;
}

export const STR_ADD_PRODUCT_TO_ORDER_FAILURE = 'STR_ADD_PRODUCT_TO_ORDER_FAILURE';

interface iAddProductToOrderFailure {
  type: typeof STR_ADD_PRODUCT_TO_ORDER_FAILURE;
  mPayload: {
    strError: string;
  };
}




export const STR_DELETE_DETAIL_BY_ID_REQUEST = 'STR_DELETE_DETAIL_BY_ID_REQUEST';

interface iDeleteDetailByIdRequest {
  type: typeof STR_DELETE_DETAIL_BY_ID_REQUEST;
}

export const STR_DELETE_DETAIL_BY_ID_SUCCESS = 'STR_DELETE_DETAIL_BY_ID_SUCCESS';

interface iDeleteDetailByIdSuccess {
  type: typeof STR_DELETE_DETAIL_BY_ID_SUCCESS;
}

export const STR_DELETE_DETAIL_BY_ID_FAILURE = 'STR_DELETE_DETAIL_BY_ID_FAILURE';

interface iDeleteDetailByIdFailure {
  type: typeof STR_DELETE_DETAIL_BY_ID_FAILURE;
  mPayload: {
    strError: string;
  };
}




export interface iInputUpdateProductInOrder {
  StrQuantity: string;
  StrPrice: string;
  IntIdDetailOrder: number;
}

export const STR_UPDATE_PRODUCT_IN_ORDER_REQUEST = 'STR_UPDATE_PRODUCT_IN_ORDER_REQUEST';

interface iUpdateProductInOrderRequest {
  type: typeof STR_UPDATE_PRODUCT_IN_ORDER_REQUEST;
  // mPayload: {
  //   strEmail: string;
  //   strPassword: string;
  // };
}

export const STR_UPDATE_PRODUCT_IN_ORDER_SUCCESS = 'STR_UPDATE_PRODUCT_IN_ORDER_SUCCESS';

interface iUpdateProductInOrderSuccess {
  type: typeof STR_UPDATE_PRODUCT_IN_ORDER_SUCCESS;
  // mPayload: {
  //   strToken: string;
  //   strUsername: string;
  // };
}

export const STR_UPDATE_PRODUCT_IN_ORDER_FAILURE = 'STR_UPDATE_PRODUCT_IN_ORDER_FAILURE';

interface iUpdateProductInOrderFailure {
  type: typeof STR_UPDATE_PRODUCT_IN_ORDER_FAILURE;
  mPayload: {
    strError: string;
  };
}



export type typeOrderDetailActionTypes =
  | iGetOrderDetailByIdRequest
  | iGetOrderDetailByIdSuccess
  | iGetOrderDetailByIdFailure

  | iAddProductToOrderRequest
  | iAddProductToOrderSuccess
  | iAddProductToOrderFailure

  | iDeleteDetailByIdRequest
  | iDeleteDetailByIdSuccess
  | iDeleteDetailByIdFailure

  | iUpdateProductInOrderRequest
  | iUpdateProductInOrderSuccess
  | iUpdateProductInOrderFailure
  ;
