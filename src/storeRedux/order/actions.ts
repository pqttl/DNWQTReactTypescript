import {
  typeOrderActionTypes,
  STR_GET_ORDER_PAGING_REQUEST,
  STR_GET_ORDER_PAGING_SUCCESS,
  STR_GET_ORDER_PAGING_FAILURE,
} from './types';

import { Dispatch } from 'react';
import { orderService } from '../../servicesApi/order.service';
import env from 'react-dotenv';



//Đây là cách 2 dùng axios api ngắn hơn

export const voidDispatchGetOrderPaging = (intCurrentIndexPage: number) => {
  return async (dispatch: Dispatch<typeOrderActionTypes>) => {
    try {
      dispatch({
        type: STR_GET_ORDER_PAGING_REQUEST,
        mPayload: {
          intPageIndex: intCurrentIndexPage,
          intPageSize: env.INT_SO_ROW_1PAGE_ORDER
        }
      });

      const res = await orderService.voidGetOrderPaging(intCurrentIndexPage);

      dispatch({
        type: STR_GET_ORDER_PAGING_SUCCESS,
        mPayload: res,
      });
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof TypeError) {
        message = error.stack as string;
      }
      dispatch({
        type: STR_GET_ORDER_PAGING_FAILURE,
        mPayload: { strError: message },
      });
    }
  };
};
