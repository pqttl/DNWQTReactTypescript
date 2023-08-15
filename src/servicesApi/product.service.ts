//import env from 'react-dotenv';
import { tsApi } from '../helpers';
import { ApiResult } from '../helpersQT/ApiResult';
import { PagedResult } from '../helpersQT/PagedResult';

const voidGetAllProductJoinDepot = async (
  // intId: number,
): Promise<ApiResult<PagedResult<any>>> => {
  const res = await tsApi
    .get<ApiResult<PagedResult<any>>>(
      `/Order/TARGetAllProductLeftJoinDepot`
    )
    .then((response) => {
      return response.data;
    });
  return res;
};

export const productService = {
  voidGetAllProductJoinDepot,
};