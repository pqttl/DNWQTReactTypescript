//interface ở đây như 1 class property trong c#

import { PagedResultBase } from "./PagedResultBase";

export interface PagedResult<T> extends PagedResultBase{
    tOneItem: T;
    lstTItems: Array<T>;
    dicResult: object;
  }
  