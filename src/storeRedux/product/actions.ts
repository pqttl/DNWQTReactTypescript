import {
    typeProductActionTypes,
    STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST,
    STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS,
    STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE
} from './types';

import { Dispatch } from 'react';
import { productService } from '../../servicesApi/product.service';



//Đây là cách 2 dùng axios api ngắn hơn

export const voidDispatchGetAllProductJoinDepot = () => {
    return async (dispatch: Dispatch<typeProductActionTypes>) => {
        try {
            dispatch({
                type: STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST,
                mPayload: {
                    // intId: intIdInput,
                }
            });

            const res = await productService.voidGetAllProductJoinDepot();

            dispatch({
                type: STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS,
                mPayload: res,
            });
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof TypeError) {
                message = error.stack as string;
            }
            dispatch({
                type: STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE,
                mPayload: { strError: message },
            });
        }
    };
};
