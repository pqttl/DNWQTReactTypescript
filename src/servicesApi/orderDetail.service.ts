//import env from 'react-dotenv';
import { tsApi } from '../helpers';
import { ApiResult } from '../helpersQT/ApiResult';
import { PagedResult } from '../helpersQT/PagedResult';
import { iInputAddProductToOrder, iInputUpdateProductInOrder } from '../storeRedux/orderDetail/types';

const voidGetOrderDetailByOrderId = async (
  intId: number,
): Promise<ApiResult<PagedResult<any>>> => {
  const res = await tsApi
    .get<ApiResult<PagedResult<any>>>(
      `/Order/TARGetDetailOrderById?intId=${intId}`
    )
    .then((response) => {
      return response.data;
    });
  return res;
};

const voidAddProductToOrder = async (
  mInput: iInputAddProductToOrder,
): Promise<ApiResult<boolean>> => {
  const body = mInput;
  const res = await tsApi
    .post<ApiResult<boolean>>(
      `/Order/TARAddProductToOrder`, body
    )
    .then((response) => {
      return response.data;
    });
  return res;
};

const voidUpdateProductInOrder = async (
  mInput: iInputUpdateProductInOrder,
): Promise<ApiResult<boolean>> => {
  const body = mInput;
  const res = await tsApi
    .post<ApiResult<boolean>>(
      `/Order/TARUpdateProductInOrder`, body
    )
    .then((response) => {
      return response.data;
    });
  return res;
};

const voidDeleteDetailById = async (
  intId: number,
): Promise<ApiResult<boolean>> => {
  const body = intId;
  const res = await tsApi
    .post<ApiResult<boolean>>(
      `/Order/TARDeleteDetailOrderById`, body
    )
    .then((response) => {
      return response.data;
    });
  return res;
};

export const orderDetailService = {
  voidGetOrderDetailByOrderId,
  voidAddProductToOrder,
  voidUpdateProductInOrder,
  voidDeleteDetailById,
};