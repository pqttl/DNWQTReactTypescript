//interface ở đây như 1 class property trong c#

import { PagingRequestBase } from "./PagingRequestBase";

export interface PagedResultBase extends PagingRequestBase {
  intTotalRecords: number;
  intSumPage: number ;
};
