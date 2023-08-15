//interface ở đây như 1 class property trong c#

import { IStateBase } from "./IStateBase";
import { PagedResult } from "./PagedResult";

export interface IStatePagedBase extends IStateBase, PagedResult<any> {
};
