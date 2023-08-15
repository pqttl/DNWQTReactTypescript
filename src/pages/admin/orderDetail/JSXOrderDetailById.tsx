import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { JSXBreadcrumb } from '../../../components/JSXHtmlCommon/JSXBreadcrumb';
import { JSXGroupBox } from '../../../components/JSXHtmlCommon/JSXGroupBox';
import { UrlConstants } from '../../../constants/urlConstants';
import { ValueConstants } from '../../../constants/valueConstants';
import { typeAppState } from '../../../storeRedux/indexExport';
import { voidDispatchDeleteDetailById, voidDispatchGetOrderDetailByOrderId } from '../../../storeRedux/orderDetail/actions';
import { typePopupConfirm } from '../../../storeRedux/popup/actions';
import { JSXAddOrderDetail } from './JSXAddOrderDetail';
import { JSXUpdateOrderDetail } from './JSXUpdateOrderDetail';

type typeProps = {
  intId: number;
};


export const JSXOrderDetailById = (props: typeProps) => {

  const AnyArrayObjRows = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal.tOneItem);
  const IntTotalItems = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal.intTotalRecords);
  // const BlnLoading = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal.blnLoading);
  // const StrError = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal.strError);
  // const IStateOrderDetailGlobal = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(voidDispatchGetOrderDetailByOrderId(props.intId));
  }, [dispatch, props.intId]);


  const intIndexRowKhongTheTrung = 1311;
  //1311 là số để không có index nào trùng
  const [IntIndexRowHighlightCurrent, setIntIndexRowHighlightCurrent] = useState(intIndexRowKhongTheTrung);

  const objDicResult = useSelector((state: typeAppState) => state.iStateOrderDetailGlobal.dicResult);
  const [TupleStringQuantitySumPrice, setTupleStringQuantitySumPrice] = useState(
    ["0", "0"]
  );
  const [JSXQuantitySumPrice, setHtmlQuantitySumPrice] = useState(
    <Fragment></Fragment>
  );

  const [IntIndexRowSelected, setIntIndexRowSelected] = useState(-1);
  const [IntIdOrderDetailSelected, setIntIdOrderDetailSelected] = useState(-1);

  useEffect(() => {
    setIntIndexRowSelected(-1);
    setIntIdOrderDetailSelected(-1);

    if (objDicResult === null) {
      return;
    }

    let arrayTupleStringAnyDicResult = Object.entries(objDicResult);
    if (arrayTupleStringAnyDicResult.length === 0) {
      return;
    }
    let arrayTupleStringAnyQuantitySumPrice = Object.entries(arrayTupleStringAnyDicResult[0][1]);
    const strQuantity = arrayTupleStringAnyQuantitySumPrice[0][1] as string;
    const strSumPrice = arrayTupleStringAnyQuantitySumPrice[1][1] as string;
    setTupleStringQuantitySumPrice([strQuantity, strSumPrice]);
    setHtmlQuantitySumPrice(
      <Fragment>
        <div className="d-flex justify-content-end mt-3">
          <h3>{`(${strQuantity} Kg) `}</h3>
          <h3 className="font-weight-bold text-danger ml-4">{`${strSumPrice}`}</h3>
        </div>
      </Fragment>
    );
  }, [objDicResult]);

  // let { state } = useLocation();
  // let tupleStrLinkAndText: [string, string] = ["/" + UrlConstants.STR_ORDER_PAGE_INDEX, "Danh sách đơn hàng mới nhất"];
  // if (state != null && state.intCurrentIndexPageOrder != null) {
  //   tupleStrLinkAndText = ["/" + UrlConstants.STR_ORDER_PAGE_INDEX + state.intCurrentIndexPageOrder
  //     , "Danh sách đơn hàng trang " + (state.intCurrentIndexPageOrder + 1)];
  // }
  const [TupleStrLinkAndText, setTupleStrLinkAndText] = useState<[string, string]>(["/" + UrlConstants.STR_ORDER_PAGE_INDEX, "Danh sách đơn hàng mới nhất"]);

  let { state } = useLocation();
  useEffect(() => {
    if (state != null && state.intCurrentIndexPageOrder != null) {
      setTupleStrLinkAndText(["/" + UrlConstants.STR_ORDER_PAGE_INDEX + state.intCurrentIndexPageOrder
        , "Danh sách đơn hàng trang " + (state.intCurrentIndexPageOrder + 1)]);
    }

  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  const IStatePopupGlobal: any = useSelector<typeAppState>((state) => state.iStatePopupGlobal);

  useEffect(() => {
    if (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[3]) {
      if (IStatePopupGlobal.strNameCase
        === ValueConstants.STR_CASE_JSXOrderDetailById.AcceptDelete) {
        const strIdOrder = "" + IStatePopupGlobal.anyParam;
        dispatch<any>(voidDispatchDeleteDetailById(Number(strIdOrder)));
        return;
      }
      if (IStatePopupGlobal.strNameCase
        === ValueConstants.STR_CASE_JSXOrderDetailById.voidDispatchGetOrderDetailByOrderId) {

        dispatch<any>(voidDispatchGetOrderDetailByOrderId(props.intId));
        return;
      }
    }

  }, [IStatePopupGlobal]);// eslint-disable-line react-hooks/exhaustive-deps

  const JSX3Td = (arrayTupleStringAnyTemp: [string, any][]) => {
    let intIndexIncrease = -1;
    return (
      <Fragment>
        <td style={{ textAlign: 'center' }}>{"" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])}</td>
        <td style={{ textAlign: 'right' }}
          dangerouslySetInnerHTML={
            { __html: ("" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])) }}>

        </td>
        <td style={{ textAlign: 'right' }}
          dangerouslySetInnerHTML={
            { __html: ("" + ((arrayTupleStringAnyTemp[++intIndexIncrease])[1])) }}>

        </td>
      </Fragment>
    );
  }

  const voidForChildComponent = (strNameCase: string, anyParam: any) => {
    if (strNameCase === "") {

    }
    {
      const strTemp = ValueConstants.STR_CASE_JSXOrderDetailById.cancelUpdateOrderDetail;
      if (strNameCase.startsWith(strTemp)) {
        setIntIndexRowSelected(-1);

        return;
      }
    }

  }

  const arrayTupleHuongDan: [string, string[]][] = [];
  arrayTupleHuongDan.push(
    ["* Thêm nhanh trên máy tính không dùng chuột"
      , [
        "Bấm 'Thêm vị thuốc'",
        "GÕ TÊN VỊ THUỐC rồi bấm phím 'lên' 'xuống' để chọn trong danh sách gợi ý -> Bấm 'ENTER' -> 'ENTER'",
        "GÕ SỐ LƯỢNG -> Bấm 'ENTER'",
        "GÕ ĐƠN GIÁ (Bấm 'n' = thêm 3 số 0) -> 'ENTER'",
        "Hiển thị thông báo thành công -> Bấm 'ENTER' -> Lặp lại bước 2 đến khi xong!",
        // "Lặp lại bước 2 cho đến khi xong đơn hàng!",
      ]]);
  arrayTupleHuongDan.push(
    ["* Thêm nhanh trên điện thoại: Dùng nút 'tích' màu xanh"
      , [
        // "Bấm 'Thêm vị thuốc'",
      ]]);

  const [BlnShowHuongDan, setBlnShowHuongDan] = useState(false);

  return (
    <Fragment>
      <div>

        <JSXBreadcrumb arrayTuple2StringLinkText={
          [
            ["/", "Trang chủ"],
            TupleStrLinkAndText,
            ["", `Chi tiết hóa đơn (${IntTotalItems} vị thuốc 
              - ${TupleStringQuantitySumPrice[0]} Kg 
              - ${TupleStringQuantitySumPrice[1]})`],
          ]
        } />

        <div className="container-fluid">

          {
            (BlnShowHuongDan === true) && (
              <div className="row">

                <div className="col">

                </div>

                <JSXGroupBox
                  strHeader="Hướng dẫn"
                  strClassTextHeader=' '
                  strClassDivChild={" py-0 px-1 "}
                  strClassDivParent=" px-0 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 border-info "
                  HtmlHeaderTwo={
                    <Fragment />
                  }

                  HtmlOtherHeader={
                    <Fragment>
                      <div className="position-absolute top-0 end-0  translate-middle-y d-flex justify-content-start">

                        <button className="btn btn-success btn-sm"
                          type="button"
                          style={{ marginRight: 6 }}
                          title="Thu gọn"
                          onClick={() => {
                            setBlnShowHuongDan(false);
                          }}>
                          Thu gọn
                        </button>

                      </div>
                    </Fragment>
                  }

                  HtmlChild={

                    <Fragment>
                      <div className='my-3'>

                        {
                          arrayTupleHuongDan.map((itemChildTuple, intIndex) => {
                            return (
                              <Fragment key={intIndex}>
                                <p className="d-flex justify-content-start text-primary my-1 mb-0 fw-bold"
                                  style={{ lineHeight: 1, textIndent: 0 }} >
                                  <small>{itemChildTuple[0]}</small>
                                </p>

                                <p className="mb-0" style={{ lineHeight: 1, textIndent: 0 }} >
                                  {
                                    itemChildTuple[1].map((itemChildString, intIndexChild) => {
                                      return (
                                        <Fragment key={intIndexChild}>
                                          <small>{`+ B${intIndexChild + 1}: ` + itemChildString}</small>

                                          {
                                            (intIndexChild < itemChildTuple[1].length - 1) && (
                                              <br />
                                            )
                                          }
                                        </Fragment>
                                      );
                                    })
                                  }
                                </p>

                              </Fragment>
                            );
                          })
                        }

                      </div>

                    </Fragment>

                  }></JSXGroupBox>

                <div className="col">

                </div>

              </div>
            )
          }

        </div>

        <JSXAddOrderDetail intIdOrder={props.intId} />

        <div className="container-fluid">

          <div className="row">

            <div className="col">

            </div>

            <JSXGroupBox
              strHeader="Chi tiết đơn hàng"
              strClassTextHeader=' '
              strClassDivChild={" py-0 px-1 "}
              strClassDivParent=" px-0 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 border-success "
              HtmlHeaderTwo={
                <Fragment />
              }

              HtmlOtherHeader={
                <Fragment>
                  {
                    (BlnShowHuongDan === false) && (
                      <div className="position-absolute top-0 end-0  translate-middle-y d-flex justify-content-start">

                        <button className="btn btn-success btn-sm"
                          type="button"
                          style={{ marginRight: 6 }}
                          title="Hướng dẫn thêm nhanh"
                          onClick={() => {
                            setBlnShowHuongDan(true);
                          }}>
                          Hướng dẫn thêm nhanh
                        </button>

                      </div>
                    )
                  }
                </Fragment>
              }

              HtmlChild={

                <Fragment>

                  {
                    ((AnyArrayObjRows as Array<object>).length === 0) && (
                      <Fragment>
                        <div className='mt-3'>
                          <h6 className=" px-1 d-flex justify-content-center text-primary ">Đơn hàng này hiện chưa có vị thuốc nào!</h6>
                          <h6 className=" px-1 d-flex justify-content-center text-primary ">Bấm 'Thêm vị thuốc' để bắt đầu!</h6>
                        </div>

                      </Fragment>
                    )
                  }

                  {
                    ((AnyArrayObjRows as Array<object>).length > 0) && (
                      <div>

                        {JSXQuantitySumPrice}

                        <div className="table-responsive">
                          <table className="table table-bordered table-sm table-striped" id="infoTable">
                            <thead>
                              <tr className="text-center align-middle">
                                <th>STT</th>
                                <th>Tên vị thuốc<br />Số lượng</th>
                                <th>Đơn giá<br />Thành tiền</th>
                                <th>Thao<br />tác</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                (AnyArrayObjRows as Array<object>).map((objItem, intIndexArrayCurrent) => {
                                  // let intIndexIncrease = -1;
                                  let arrayTupleStringAnyTemp = Object.entries(objItem);
                                  const strIdDetail = "" + (arrayTupleStringAnyTemp[3])[1];

                                  return (
                                    <tr className={"align-middle "
                                      + ((intIndexArrayCurrent === IntIndexRowHighlightCurrent) && "highlight")}
                                      onClick={() => setIntIndexRowHighlightCurrent(intIndexArrayCurrent)}
                                      key={`orderDetail_${intIndexArrayCurrent}`}>

                                      {JSX3Td(arrayTupleStringAnyTemp)}

                                      <td>
                                        <div className="d-flex justify-content-center">
                                          <a href="#!"
                                            onClick={() => {
                                              setIntIndexRowSelected(-1);
                                              setIntIdOrderDetailSelected(-1);
                                              setTimeout(() => {
                                                setIntIndexRowSelected(intIndexArrayCurrent);
                                                setIntIdOrderDetailSelected(Number(strIdDetail));
                                              }, 300);
                                            }}
                                            className="text-decoration-none" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}
                                              fill="currentColor" className="bi bi-pencil-square mx-1" viewBox="0 0 16 16">
                                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                          </a>
                                          <a href="#!"
                                            onClick={() => {
                                              let strMess = "";
                                              strMess += "Vị thuốc bạn chọn sẽ bị xóa khỏi đơn hàng này!<br>";
                                              strMess += "Tổng giá đơn hàng sẽ giảm đi tương ứng!<br>";
                                              strMess += "Bạn chắc chắn muốn thực hiện thao tác này?";
                                              dispatch<any>(typePopupConfirm(strMess
                                                , ValueConstants.STR_CASE_JSXOrderDetailById.AcceptDelete, strIdDetail));
                                            }}
                                            className="text-decoration-none" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}
                                              fill="orange" className="bi bi-trash3-fill mx-1"
                                              viewBox="0 0 16 16">
                                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                          </a>
                                        </div>
                                      </td>

                                    </tr>
                                  );
                                })
                              }

                            </tbody>
                          </table>
                        </div>

                        {JSXQuantitySumPrice}

                      </div>
                    )
                  }

                </Fragment>

              }></JSXGroupBox>

            <div className="col">

            </div>

          </div>

          {
            (IntIndexRowSelected > -1 && IntIdOrderDetailSelected > -1) && (

              <div className="row">

                <div className="col">

                </div>

                <JSXGroupBox
                  strHeader="Sửa vị thuốc"
                  strClassTextHeader=' '
                  strClassDivChild={" py-0 px-1 "}
                  strClassDivParent=" px-0 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 border-info "
                  HtmlHeaderTwo={
                    <Fragment />
                  }

                  HtmlOtherHeader={
                    <Fragment>

                    </Fragment>
                  }

                  HtmlChild={

                    <Fragment>

                      <div>


                        <div className="table-responsive mt-1">
                          <table className="table table-bordered table-sm table-striped" id="infoTable">
                            <tbody>

                              <tr className={"align-middle "}
                                key={`orderDetail_${IntIndexRowSelected}`}>

                                {JSX3Td(Object.entries((AnyArrayObjRows as Array<object>)[IntIndexRowSelected]))}

                              </tr>

                            </tbody>
                          </table>
                        </div>

                        <JSXUpdateOrderDetail
                          voidOutsideComponentWithNameCase={voidForChildComponent}
                          intIdOrderDetail={IntIdOrderDetailSelected}
                          intIdOrder={props.intId} />

                      </div>

                    </Fragment>

                  }></JSXGroupBox>

                <div className="col">

                </div>

              </div>

            )
          }
        </div>


      </div>

    </Fragment>
  )
}
