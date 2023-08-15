import { ApiResult } from "../../helpersQT/ApiResult";
import { PagedResult } from "../../helpersQT/PagedResult";

export const STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST = 'STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST';

interface iGetAllproductJoinDepotRequest {
  type: typeof STR_GET_ALLPRODUCT_JOIN_DEPOT_REQUEST;
  mPayload: {
    // strEmail: string;
    // strPassword: string;
  };
}

export const STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS = 'STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS';

interface iGetAllproductJoinDepotSuccess {
  type: typeof STR_GET_ALLPRODUCT_JOIN_DEPOT_SUCCESS;
  mPayload: ApiResult<PagedResult<any>>;
}

export const STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE = 'STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE';

interface iGetAllproductJoinDepotFailure {
  type: typeof STR_GET_ALLPRODUCT_JOIN_DEPOT_FAILURE;
  mPayload: {
    strError: string;
  };
}

export type typeProductActionTypes =
  | iGetAllproductJoinDepotRequest
  | iGetAllproductJoinDepotSuccess
  | iGetAllproductJoinDepotFailure
  ;
