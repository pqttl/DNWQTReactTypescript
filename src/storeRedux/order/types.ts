//Bắt buộc phải dùng 3 const string vì (dùng string + string thì lỗi) + (dùng biến + string cũng lỗi)

import { ApiResult } from "../../helpersQT/ApiResult";
import { PagedResult } from "../../helpersQT/PagedResult";






//Bắt buộc dùng biến tên type thay vì strType vì trong file index của redux mặc định dùng biến type
//payload tiếng anh nghĩa là khối hàng

export const STR_GET_ORDER_PAGING_REQUEST = 'STR_GET_ORDER_PAGING_REQUEST';

interface iGetOrderPagingRequest {
  type: typeof STR_GET_ORDER_PAGING_REQUEST;
  mPayload: {
    intPageIndex: number;
    intPageSize: number;
  };
}

export const STR_GET_ORDER_PAGING_SUCCESS = 'STR_GET_ORDER_PAGING_SUCCESS';

interface iGetOrderPagingSuccess {
  type: typeof STR_GET_ORDER_PAGING_SUCCESS;
  mPayload: ApiResult<PagedResult<any>>;
}

export const STR_GET_ORDER_PAGING_FAILURE = 'STR_GET_ORDER_PAGING_FAILURE';

interface iGetOrderPagingFailure {
  type: typeof STR_GET_ORDER_PAGING_FAILURE;
  mPayload: {
    strError: string;
  };
}




export type typeOrderActionTypes =
  | iGetOrderPagingRequest
  | iGetOrderPagingSuccess
  | iGetOrderPagingFailure;