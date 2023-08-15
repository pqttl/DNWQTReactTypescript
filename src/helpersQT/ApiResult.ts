//interface ở đây như 1 class property trong c#

export interface ApiResult<T> {
    blnIsSuccessed: boolean;
    strMessage: string;
    strDetailMessage: string;
    tResultObj: T;
    dicResult: object;
  }
  