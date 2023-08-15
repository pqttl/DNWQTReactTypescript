import { Fragment, useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { JSXBreadcrumb } from '../../../components/JSXHtmlCommon/JSXBreadcrumb';
import { JSXPaginationWithLink } from '../../../components/JSXHtmlCommon/JSXPaginationWithLink';
import { UrlConstants } from '../../../constants/urlConstants';
import { typeAppState } from '../../../storeRedux/indexExport';
import { voidDispatchGetOrderPaging } from '../../../storeRedux/order/actions';

type typeProps = {
  intIndexPage: number;
  blnRedirectToMaxIndexPage: boolean;
};

export const JSXOrderByIndexPage = (props: typeProps) => {

  const AnyArrayObjRows = useSelector((state: typeAppState) => state.iStateOrderGlobal.tOneItem);
  const IntTotalItems = useSelector((state: typeAppState) => state.iStateOrderGlobal.intTotalRecords);
  const BlnLoading = useSelector((state: typeAppState) => state.iStateOrderGlobal.blnLoading);
  const StrError = useSelector((state: typeAppState) => state.iStateOrderGlobal.strError);
  const IStateOrderGlobal = useSelector((state: typeAppState) => state.iStateOrderGlobal);

  const dispatch = useDispatch();
  const IntCurrentIndexPage = props.intIndexPage;
  // const [IntCurrentIndexPage, setIntCurrentIndexPage] = useState(props.intIndexPage);

  useEffect(() => {
    dispatch<any>(voidDispatchGetOrderPaging(IntCurrentIndexPage));
  }, [dispatch, IntCurrentIndexPage]);

  // const voidOnPageChanged = (intIndexPageNumber: number) => {
  //   setIntCurrentIndexPage(intIndexPageNumber);
  //   setIntIndexRowHighlightCurrent(intIndexRowKhongTheTrung);
  //   dispatch<any>(voidDispatchGetOrderPaging(intIndexPageNumber));
  // };

  const [JSXStatePhanTrang, setJSXStatePhanTrang] = useState(
    <Fragment>

      <div className="d-flex flex-row-reverse">

        <JSXPaginationWithLink
          intTotalRecords={IntTotalItems}
          intPageLimit={2}
          intPageSize={env.INT_SO_ROW_1PAGE_ORDER}
          //FunctionOnPageChanged={return null;}
          intCurrentIndexPage={IntCurrentIndexPage}
        ></JSXPaginationWithLink>

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
        let strTemp = tupleItem[0];
        strTemp = strTemp[0].toUpperCase() + strTemp.substring(1);
        arrayStringColumnNameTemp.push(strTemp);
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

          <JSXPaginationWithLink
            intTotalRecords={IntTotalItems}
            intPageLimit={2}
            intPageSize={env.INT_SO_ROW_1PAGE_ORDER}
            //FunctionOnPageChanged={voidOnPageChanged}
            intCurrentIndexPage={IntCurrentIndexPage}
          ></JSXPaginationWithLink>

        </div>

      </Fragment>
    );
  }, [IntCurrentIndexPage, IntTotalItems]);// eslint-disable-line react-hooks/exhaustive-deps

  const JSXGhiChu = () => {
    return (
      <Fragment>
        <p>* Cột 2 : Tổng số vị thuốc - Tổng khối lượng - Tổng giá trị</p>
        <p>* Bấm vào thông tin đơn hàng ở cột 2 để xem chi tiết đơn hàng đó</p>
      </Fragment>
    );
  }

  const intIndexRowKhongTheTrung = 1311;
  //1311 là số để không có index nào trùng
  const [IntIndexRowHighlightCurrent, setIntIndexRowHighlightCurrent] = useState(intIndexRowKhongTheTrung);

  const navigate = useNavigate();

  useEffect(() => {
    if (BlnLoading === false
      && props.blnRedirectToMaxIndexPage === true
      // && props.intIndexPage === 0
    ) {
      const intMaxIndexPage = IStateOrderGlobal.intSumPage - 1;
      if (intMaxIndexPage > 0) {
        navigate("/" + UrlConstants.STR_ORDER_PAGE_INDEX + intMaxIndexPage);
      }
    }
  }, [dispatch, IStateOrderGlobal]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>

      {(StrError === null) && (
        <Fragment>



          {(BlnLoading === false) && (

            <Fragment>

              <JSXBreadcrumb arrayTuple2StringLinkText={
                [
                  ["/", "Trang chủ"],
                  ["",
                    `Danh sách ${IntTotalItems} đơn hàng 
                    - ${IStateOrderGlobal.intSumPage} trang 
                    (${IStateOrderGlobal.intPageSize} dữ liệu/ 1 trang)`],
                ]
              } />

              <div className="container-fluid">

                <div className="row">

                  <div className="col">

                  </div>

                  <div className="card my-1 px-0 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4">

                    {/* <div className="card-header">
                      <a className="btn btn-primary btn-sm" href="#idAAddNew" id="idAAddNew">Thêm đơn hàng</a>
                    </div> */}

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

                                const intIndexColumnMaDuLieu = 3;
                                let strIdRow = "";
                                strIdRow = "" + (arrayTupleStringAnyTemp[intIndexColumnMaDuLieu])[1];
                                const strLinkRow = "/" + UrlConstants.STR_DETAIL_ORDER_ID + "" + strIdRow;

                                return (
                                  <tr className={"align-middle "
                                    + ((intIndexArrayCurrent === IntIndexRowHighlightCurrent) && "highlight")}
                                    onClick={() => setIntIndexRowHighlightCurrent(intIndexArrayCurrent)}
                                    key={`order_${intIndexArrayCurrent}`}>
                                    <td style={{ textAlign: 'center' }}>{"" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])}</td>
                                    <td style={{ textAlign: 'right' }}>
                                      <Link to={strLinkRow}
                                        state={{ intCurrentIndexPageOrder: IntCurrentIndexPage }}
                                        className="text-decoration-none"
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

                  <div className="col">

                  </div>

                </div>
              </div>
            </Fragment>)}

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



        </Fragment>)}


      {(StrError !== null) && (
        <Fragment>
          <div className="mt-1">
            <div className="d-flex justify-content-center" data-toggle="tooltip" data-placement="bottom" title={"" + StrError}>
              <strong className="text-primary">Tải dữ liệu không thành công, bạn vui lòng quay lại trang chủ để thử lại!</strong>
            </div>
          </div>
        </Fragment>)}

    </Fragment>
  )
}
