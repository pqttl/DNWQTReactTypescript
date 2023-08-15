import {
    typeAccountActionTypes,
    STR_LOGIN_FAILURE,
    STR_LOGIN_REQUEST,
    STR_LOGIN_SUCCESS,
    STR_LOG_OUT,
    STR_LOAD_CURRENT_LOGIN_USER_FAILURE,
    STR_LOAD_CURRENT_LOGIN_USER_SUCCESS,
    STR_LOAD_CURRENT_LOGIN_USER_REQUEST,
} from './types';

import { Dispatch } from 'react';
//import { browserHistory } from '../../helpers';
import { userService } from './../../servicesApi/user.service';
import { NavigateFunction } from 'react-router-dom';
import { typePopupActionTypes } from '../popup/types';
import { typePopupError, typePopupHide, typePopupLoadingRequest, typePopupSuccessNotHaveButton } from '../popup/actions';
//import axios from 'axios';



//Đây là cách 1 dùng fetch của javascript để gọi api

// export const voidDispatchLogin = (email: string, password: string, from: string) => {
//     return (dispatch: Dispatch<typeAccountActionTypes>) => {
//         dispatch({
//             strType: STR_LOGIN_REQUEST,
//             type: STR_LOGIN_REQUEST,
//             mPayload: {
//                 strEmail: email,
//                 strPassword: password,
//             },
//         });

//         userService.voidLogin(email, password).then(
//             (res) => {

//                 const arrayTemp = Object.values(res.DataTable);
//                 if (arrayTemp.length == 0) {
//                     dispatch({
//                         strType: STR_LOGIN_FAILURE,
//                         type: STR_LOGIN_FAILURE,
//                         mPayload: { strError: "Tên đăng nhập hoặc mật khẩu không đúng!" },
//                     });

//                     return;
//                 }

//                 const strTemp = "" + res['string.strJwtTokenForLogin'];

//                 dispatch({
//                     strType: STR_LOGIN_SUCCESS,
//                     type: STR_LOGIN_SUCCESS,
//                     mPayload: { strToken: strTemp },
//                 });
//                 // dispatch({
//                 //     strType: STR_LOGIN_SUCCESS,
//                 //     type: STR_LOGIN_SUCCESS,
//                 //     mPayload: res,
//                 // });
//                 browserHistory.push(from);
//             },
//             (error) => {
//                 dispatch({
//                     strType: STR_LOGIN_FAILURE,
//                     type: STR_LOGIN_FAILURE,
//                     mPayload: { strError: error.toString() },
//                 });
//             }
//         );
//     };
// };

// export const typeLogout = (): typeAccountActionTypes => {
//     return { strType: STR_LOG_OUT, type: STR_LOG_OUT };
// };



//Đây là cách 2 dùng axios api ngắn hơn

export const voidDispatchLogin = (email: string, password: string
    , from: string, navigateParam: NavigateFunction) => {
    return async (dispatch: Dispatch<typeAccountActionTypes | typePopupActionTypes>) => {
        dispatch({
            type: STR_LOGIN_REQUEST,
            mPayload: {
                strEmail: email,
                strPassword: password,
            },
        });
        dispatch(typePopupLoadingRequest("ĐĂNG NHẬP", "", "80%"));

        try {
            //response hiện đang là 1 object
            const response = await userService.voidLogin(email, password);

            // let arrayNumTemp: Number[] = [];
            // let response = {
            //     DataTable: arrayNumTemp,
            //     'string.strJwtTokenForLogin': 'tokenabc',
            // };
            // if (email === 'phamthile' && password === email) {
            //     response = {
            //         DataTable: [1, 2],
            //         'string.strJwtTokenForLogin': 'tokenabc',
            //     };
            // }

            const arrayTemp = Object.values(response.DataTable);
            if (arrayTemp.length === 0) {
                const strLoi = "Tên đăng nhập hoặc mật khẩu không đúng!";
                dispatch({
                    type: STR_LOGIN_FAILURE,
                    mPayload: { strError: strLoi },
                });
                dispatch(typePopupError(strLoi));

                return;
            }

            // const min = 1;
            // const max = 10000;
            // const rand = min + Math.random() * (max - min);
            // const strTemp = ""+rand + response['string.strJwtTokenForLogin'];
            const strTemp = "" + response['string.strJwtTokenForLogin'];

            dispatch({
                type: STR_LOGIN_SUCCESS,
                mPayload: { strToken: strTemp, strUsername: email },
            });

            // dispatch({
            //     strType: STR_LOGIN_SUCCESS,
            //     type: STR_LOGIN_SUCCESS,
            //     mPayload: response,
            // });

            //Nếu dùng lệnh này nó sẽ chuyển đường dẫn address về from(nhưng nội dung thì về link trước khi logout --> nên ko dùng), ko dùng thì mặc định về link trước khi logout
            //browserHistory.push(from);
            navigateParam(from);
            dispatch(typePopupSuccessNotHaveButton("Đăng nhập thành công! Đang tải trang chủ..."));
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof TypeError) {
                message = error.stack as string;
            }
            // const strTemp = (error !== null) 
            // ? error?.toString() : "typeof error !== 'object'";
            // let strTemp = "!axios.isAxiosError(error)";
            // if (axios.isAxiosError(error)) {
            //   //const errResp = error.response;
            //   // Handle your error type safe here
            //   strTemp=error.stack as string;
            // } else {
            //   // Handle the unknown
            //   strTemp=error!.toString();
            // }
            dispatch({
                type: STR_LOGIN_FAILURE,
                mPayload: { strError: message },
            });
            dispatch(typePopupError(message));
        }

        setTimeout(() => {
            dispatch(typePopupHide());
        }, 3000);

    };
};

export const typeLogout = (): typeAccountActionTypes => {
    return { type: STR_LOG_OUT };
};

export const getCurrentLoginUser = () => {
    return async (dispatch: Dispatch<typeAccountActionTypes>) => {
        dispatch({
            type: STR_LOAD_CURRENT_LOGIN_USER_REQUEST,
        });
        try {
            const response = await userService.getCurrentLoginUser();
            dispatch({
                type: STR_LOAD_CURRENT_LOGIN_USER_SUCCESS,
                mPayload: { iUser: response },
            });
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof TypeError) {
                message = error.stack as string;
            }
            dispatch({
                type: STR_LOAD_CURRENT_LOGIN_USER_FAILURE,
                mPayload: { strError: message },
            });
        }
    };
};
