import { Fragment, useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { JSXPaginationNotState } from '../../../components/JSXHtmlCommon/JSXPaginationNotState';
import { UrlConstants } from '../../../constants/urlConstants';
import { typeAppState } from '../../../storeRedux/indexExport';
import { voidDispatchGetOrderPaging } from '../../../storeRedux/order/actions';

export const JSXOrder = () => {
  const intIndexRowKhongTheTrung = 1311;

  const AnyArrayObjRows = useSelector((state: typeAppState) => state.iStateOrderGlobal.tOneItem);
  const IntTotalItems = useSelector((state: typeAppState) => state.iStateOrderGlobal.intTotalRecords);
  const BlnLoading = useSelector((state: typeAppState) => state.iStateOrderGlobal.blnLoading);
  const IStateOrderGlobal = useSelector((state: typeAppState) => state.iStateOrderGlobal);

  const dispatch = useDispatch();
  const [IntCurrentIndexPage, setIntCurrentIndexPage] = useState(43);

  useEffect(() => {
    dispatch<any>(voidDispatchGetOrderPaging(IntCurrentIndexPage));
  }, [dispatch]);// eslint-disable-line react-hooks/exhaustive-deps

  const voidOnPageChanged = (intIndexPageNumber: number) => {
    setIntCurrentIndexPage(intIndexPageNumber);
    setIntIndexRowHighlightCurrent(intIndexRowKhongTheTrung);
    dispatch<any>(voidDispatchGetOrderPaging(intIndexPageNumber));
  };

  const [JSXStatePhanTrang, setJSXStatePhanTrang] = useState(
    <Fragment>

      <div className="d-flex flex-row-reverse">

        <JSXPaginationNotState
          intTotalRecords={IntTotalItems}
          intPageLimit={2}
          intPageSize={env.INT_SO_ROW_1PAGE_ORDER}
          FunctionOnPageChanged={voidOnPageChanged}
          intCurrentIndexPage={IntCurrentIndexPage}
        ></JSXPaginationNotState>

      </div>

    </Fragment>
  );

  const [JSXStateTrAllColoumnName, setJSXStateTrAllColoumnName] = useState(
    <Fragment>
    </Fragment>
  );

  const STR_MA_DU_LIEU = "mã dữ liệu";

  useEffect(() => {
    let arrayStringColumnNameTemp: string[] = [
    ];
    const arrayTemp = AnyArrayObjRows as Array<object>;
    if (arrayTemp.length > 0) {
      let arrayTupleStringAnyTemp = Object.entries(arrayTemp[0]);
      arrayTupleStringAnyTemp.forEach((tupleItem) => {
        if (tupleItem[0] === STR_MA_DU_LIEU) {
          return;
        }
        arrayStringColumnNameTemp.push(tupleItem[0]);
      });
      setJSXStateTrAllColoumnName(
        <Fragment>
          <tr className="text-center align-middle">
            {
              arrayStringColumnNameTemp.map((strName, intIndexArrayCurrent) => {
                // let intIndexIncrease = -1;
                return (<th key={`th_${intIndexArrayCurrent}`}
                  dangerouslySetInnerHTML={{ __html: strName }} ></th>);
              })
            }
          </tr>
        </Fragment>
      );

    }

    setJSXStatePhanTrang(
      <Fragment>

        <div className="d-flex flex-row-reverse">

          <JSXPaginationNotState
            intTotalRecords={IntTotalItems}
            intPageLimit={2}
            intPageSize={env.INT_SO_ROW_1PAGE_ORDER}
            FunctionOnPageChanged={voidOnPageChanged}
            intCurrentIndexPage={IntCurrentIndexPage}
          ></JSXPaginationNotState>

        </div>

      </Fragment>
    );
  }, [IntCurrentIndexPage, IntTotalItems]);// eslint-disable-line react-hooks/exhaustive-deps

  const JSXGhiChu = () => {
    return (<p>* Cột 2 : Tổng số vị thuốc - Tổng khối lượng - Tổng giá trị</p>);
  }

  //1311 là số để không có index nào trùng
  const [IntIndexRowHighlightCurrent, setIntIndexRowHighlightCurrent] = useState(intIndexRowKhongTheTrung);
  return (
    <Fragment>


      {(BlnLoading === true) && (
        <Fragment>
          <div className="mt-1">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="text-primary">Đang tải dữ liệu...</strong>
            </div>
          </div>
        </Fragment>)}

      {(BlnLoading === false) && (

        <Fragment>
          <ol className="breadcrumb my-1">
            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
            <li className="breadcrumb-item active">{
              `Danh sách ${IntTotalItems} đơn hàng - ${IStateOrderGlobal.intSumPage} trang (${IStateOrderGlobal.intPageSize} dữ liệu/ 1 trang)`}</li>
          </ol>

          <div className="card my-1">
            <div className="card-header">
              <a className="btn btn-primary" href="#idAAddNew" id="idAAddNew">Thêm đơn hàng</a>
            </div>
            <div className="card-body p-1">
              {JSXStatePhanTrang}

              <JSXGhiChu />
              <div className="table-responsive">
                <table className="table table-bordered table-sm table-striped" id="infoTable">
                  <thead>
                    {JSXStateTrAllColoumnName}
                  </thead>
                  <tbody>
                    {
                      (AnyArrayObjRows as Array<object>).map((objItem, intIndexArrayCurrent) => {
                        let intIndexIncrease = -1;
                        let arrayTupleStringAnyTemp = Object.entries(objItem);
                        const strLinkRow = "/" + UrlConstants.STR_ORDER_DETAIL + "/" + intIndexArrayCurrent;

                        return (
                          <tr className={"align-middle "
                            + ((intIndexArrayCurrent === IntIndexRowHighlightCurrent) && "highlight")}
                            onClick={() => setIntIndexRowHighlightCurrent(intIndexArrayCurrent)}
                            key={`order_${intIndexArrayCurrent}`}>
                            <td style={{ textAlign: 'center' }}>{"" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])}</td>
                            <td style={{ textAlign: 'right' }}>
                              <Link to={strLinkRow} className="text-decoration-none"
                                dangerouslySetInnerHTML={{ __html: ("" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])) }} >

                              </Link>
                            </td>
                            <td style={{ textAlign: 'center' }}>{"" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])}</td>
                          </tr>
                        );
                      })
                    }

                  </tbody>
                  <tfoot>
                    {JSXStateTrAllColoumnName}
                  </tfoot>
                </table>
              </div>
              <JSXGhiChu />
              {JSXStatePhanTrang}
            </div>
          </div>
        </Fragment>)}




    </Fragment>

  )
}
