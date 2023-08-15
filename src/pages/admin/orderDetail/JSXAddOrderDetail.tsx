import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JSXGroupBox } from '../../../components/JSXHtmlCommon/JSXGroupBox';
import { JSXGroupBoxAdvanced } from '../../../components/JSXHtmlCommon/JSXGroupBoxAdvanced';
import { JSXGroupBoxOneInput } from '../../../components/JSXHtmlCommon/JSXGroupBoxOneInput';
import { ValueConstants } from '../../../constants/valueConstants';
import { StrConvertNumberToCurrency } from '../../../helpers/functionCommon';
import { typeAppState } from '../../../storeRedux/indexExport';
import { voidDispatchAddProductToOrder } from '../../../storeRedux/orderDetail/actions';
import { voidDispatchGetAllProductJoinDepot } from '../../../storeRedux/product/actions';

type typeProps = {
  intIdOrder: number;
};

export const JSXAddOrderDetail = (props: typeProps) => {

  type typeRef = React.ElementRef<typeof JSXGroupBoxOneInput>;
  const refGrbInputName = useRef<typeRef>(null);

  const refGrbInputQuantity = useRef<typeRef>(null);

  const refGrbInputPrice = useRef<typeRef>(null);

  const [StrName, setStrName] = useState("");
  const [StrQuantity, setStrQuantity] = useState("0");
  const [StrPrice, setStrPrice] = useState("0");

  const voidForChildComponent = (strNameCase: string, anyParam: any) => {

    const STR_JSXGroupBoxOneInput = "STR_JSXGroupBoxOneInput";
    {
      const strTemp = STR_JSXGroupBoxOneInput + "voidChangeStrTextChuan";
      if (strNameCase.startsWith(strTemp)) {
        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
          setStrName(anyParam);
          return;
        }

        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[1])) {
          setStrQuantity(anyParam);
          return;
        }

        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[2])) {
          setStrPrice(anyParam);
          return;
        }

        return;
      }
    }

    {
      const strTemp = STR_JSXGroupBoxOneInput + "onFocus";
      if (strNameCase.startsWith(strTemp)) {
        const strCaseInside = ValueConstants.STR_CASE_JSXGroupBoxOneInput.setBlnFocusTxtInput;
        if (refGrbInputName.current !== null) {
          if (strNameCase !== (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
            refGrbInputName.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
        }

        if (refGrbInputQuantity.current !== null) {
          if (strNameCase !== (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[1])) {
            refGrbInputQuantity.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
        }

        if (refGrbInputPrice.current !== null) {
          if (strNameCase !== (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[2])) {
            refGrbInputPrice.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
        }

        return;
      }
    }

    {
      const strTemp = STR_JSXGroupBoxOneInput + "onClick";
      if (strNameCase.startsWith(strTemp)) {
        const strCaseInside = ValueConstants.STR_CASE_JSXGroupBoxOneInput.voidFocusAndSelect;
        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
          if (refGrbInputQuantity.current !== null) {
            refGrbInputQuantity.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
          return;
        }
        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[1])) {
          if (refGrbInputPrice.current !== null) {
            refGrbInputPrice.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
          return;
        }

        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[2])) {
          dispatch<any>(voidDispatchAddProductToOrder({
            StrNameProduct: StrName, StrQuantity: StrQuantity
            , StrPrice: StrPrice, IntIdOrder: props.intIdOrder
          }));
          return;
        }

        return;
      }
    }

  }

  const AnyArrayObjRows = useSelector((state: typeAppState) => state.iStateProductGlobal.tOneItem);
  // const IntTotalItems = useSelector((state: typeAppState) => state.iStateProductGlobal.intTotalRecords);
  const BlnLoading = useSelector((state: typeAppState) => state.iStateProductGlobal.blnLoading);
  const StrError = useSelector((state: typeAppState) => state.iStateProductGlobal.strError);

  const [ArrayAllTupleNameQuantity, setArrayAllTupleNameQuantity] = useState<[string, string][]>([]);
  const [BlnShowDivMain, setBlnShowDivMain] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const STR_TEN_VI_THUOC = "tenViThuoc";
    const STR_QUANTITY_CURRENT = "quantityCurrent";
    let arrayStringColumnNameTemp: [string, string][] = [
    ];
    const arrayTemp = AnyArrayObjRows as Array<object>;
    if (arrayTemp.length > 0) {
      arrayTemp.forEach((objectItem) => {
        let arrayStringTemp: string[] = [];
        let arrayTupleStringAnyTemp = Object.entries(objectItem);
        arrayTupleStringAnyTemp.forEach((tupleItem) => {
          if (tupleItem[0] === STR_TEN_VI_THUOC) {
            let strTemp = "";
            if (tupleItem[1] !== null) {
              strTemp = "" + tupleItem[1];
            }
            arrayStringTemp.push(strTemp);
            return;
          }
          if (tupleItem[0] === STR_QUANTITY_CURRENT) {
            let strTemp = "";
            if (tupleItem[1] !== null) {
              strTemp = "" + tupleItem[1] + " Kg";
            }
            arrayStringTemp.push(strTemp);
            return;
          }
        });
        arrayStringColumnNameTemp.push([arrayStringTemp[0], arrayStringTemp[1]]);
      });

    }

    setArrayAllTupleNameQuantity(arrayStringColumnNameTemp);
    // if (IntTotalItems > 0) {

    // }


  }, [AnyArrayObjRows]);

  const [JSXThanhTien, setJSXThanhTien] = useState(<Fragment />);

  useEffect(() => {
    let numThanhTien = 1;
    {
      const numTemp = parseFloat(StrQuantity.replaceAll(",", ""));
      numThanhTien *= numTemp;
    }
    {
      const numTemp = Number(StrPrice.replaceAll(",", ""));
      numThanhTien *= numTemp;
    }
    let strThanhTien = "";
    strThanhTien = StrConvertNumberToCurrency(numThanhTien, "", "", 0);

    const strPhepTinh = `${StrQuantity} x ${StrPrice} = ${strThanhTien}`;
    let strClassText = " text-danger ";
    if (strThanhTien !== "0" && strThanhTien !== "NaN") {
      strClassText = " text-success ";
    }

    setJSXThanhTien(
      <Fragment>

        <JSXGroupBoxAdvanced
          strClassDivChild={" py-1 px-1 "}
          strClassDivParent=""
          HtmlHeader={
            <Fragment >

              <h6 className={"bg-white px-1 text-info"} style={{ marginLeft: 6, width: 100 }}>
                Thành tiền
              </h6>

              <Fragment>
                <h6 className={"bg-white px-1 " + strClassText}>
                  {strThanhTien}
                </h6>
                <h6 className={"bg-white px-1 " + strClassText}>
                  {" vnđ"}
                </h6>
              </Fragment>

            </Fragment>
          }

          HtmlOtherHeader={
            <Fragment />
          }

          HtmlChild={

            <Fragment>

              <div className="input-group my-1">

                <div className="form-control" style={{ textAlign: 'center', backgroundColor: '#e9ecef' }}>
                  <p className="my-auto">{strPhepTinh}</p>
                </div>

              </div>

            </Fragment>

          }></JSXGroupBoxAdvanced>

      </Fragment>
    );
  }, [StrQuantity, StrPrice]);// eslint-disable-line react-hooks/exhaustive-deps

  const voidFocusAndSelectTxtName = () => {
    if (refGrbInputName.current !== null) {
      // const STR_JSXGroupBoxOneInput = "STR_JSXGroupBoxOneInput";
      const strCaseInside = ValueConstants.STR_CASE_JSXGroupBoxOneInput.voidFocusAndSelect;
      refGrbInputName.current.voidInsideComponentWithNameCase(strCaseInside, null);
    }
  }

  useEffect(() => {
    if (BlnShowDivMain === true && BlnLoading === false) {
      setStrName("");
      setStrQuantity("0");
      setStrPrice("0");
      voidFocusAndSelectTxtName();
    }

  }, [BlnLoading]);// eslint-disable-line react-hooks/exhaustive-deps

  const IStatePopupGlobal: any = useSelector<typeAppState>((state) => state.iStatePopupGlobal);

  useEffect(() => {
    if (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[3]) {
      if (IStatePopupGlobal.strNameCase === ValueConstants.STR_CASE_JSXAddOrderDetail.BamNutNhapLai) {
        dispatch<any>(voidDispatchGetAllProductJoinDepot());

        return;
      }
    }

  }, [IStatePopupGlobal]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>

      {(StrError === null || true) && (
        <Fragment>



          {(BlnLoading === false) && (

            <Fragment>

              {
                (BlnShowDivMain === false) && (
                  <div className="container-fluid">
                    <div className="row">

                      <div className="col">

                      </div>

                      <div className="card my-1 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 ">

                        <div className="d-flex flex-row mx-2">
                          <a href="#!" className="link-info"
                            onClick={() => {
                              setBlnShowDivMain(true);
                              dispatch<any>(voidDispatchGetAllProductJoinDepot());
                            }}
                            title="Hiện có ... sản phẩm">Thêm vị thuốc</a>

                        </div>

                      </div>

                      <div className="col">

                      </div>

                    </div>
                  </div>
                )
              }

              {
                (BlnShowDivMain === true) && (
                  <Fragment>

                    <div className="container-fluid">
                      <div className="row">

                        <div className="col">

                        </div>

                        <JSXGroupBox
                          strHeader="Thêm vị thuốc"
                          strClassTextHeader=' '
                          strClassDivChild={" py-0 px-1 "}
                          strClassDivParent=" px-0 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 border-primary "
                          HtmlHeaderTwo={
                            <Fragment />
                          }

                          HtmlOtherHeader={
                            <Fragment>
                              <div className="position-absolute top-0 end-0  translate-middle-y d-flex justify-content-start">

                                <button className="btn btn-primary btn-sm"
                                  type="button"
                                  style={{ marginRight: 6 }}
                                  title="Ẩn hiển thị thêm vị thuốc"
                                  onClick={() => {
                                    setBlnShowDivMain(false);
                                  }}>
                                  Thu gọn
                                </button>

                              </div>
                            </Fragment>
                          }

                          HtmlChild={

                            <Fragment>

                              <div>

                                <form method="post" action="/fg/fgf">

                                  {JSXThanhTien}

                                  <div className="d-flex justify-content-center my-1">
                                    <a href="#!"
                                      onClick={() => {
                                        dispatch<any>(voidDispatchAddProductToOrder({
                                          StrNameProduct: StrName, StrQuantity: StrQuantity
                                          , StrPrice: StrPrice, IntIdOrder: props.intIdOrder
                                        }));
                                      }}
                                      style={{ width: 82 }}
                                      className="btn btn-primary btn-sm mx-1">Thêm mới</a>
                                    <a href="#!"
                                      style={{ width: 82 }}
                                      onClick={() => {
                                        // voidFocusAndSelectTxtName();
                                        // setBlnShowDivMain(true);
                                        dispatch<any>(voidDispatchGetAllProductJoinDepot());
                                      }}
                                      className="btn btn-danger btn-sm mx-1">Nhập lại</a>
                                  </div>


                                  <JSXGroupBoxOneInput strHeader={ValueConstants.ARRAY_STR_HEADER_INPUT[0]}
                                    ref={refGrbInputName}
                                    arrayArrayStringGoiY={ArrayAllTupleNameQuantity}
                                    voidOutsideComponentWithNameCase={voidForChildComponent}
                                    strPlaceholder='Nhập tên vị thuốc...' />

                                  <JSXGroupBoxOneInput strHeader={ValueConstants.ARRAY_STR_HEADER_INPUT[1]}
                                    ref={refGrbInputQuantity}
                                    arrayArrayStringGoiY={[
                                      // ["11", "0 Kg"],
                                    ]}
                                    voidOutsideComponentWithNameCase={voidForChildComponent}
                                    strPlaceholder='Nhập số lượng... (Kg)' />

                                  <JSXGroupBoxOneInput strHeader={ValueConstants.ARRAY_STR_HEADER_INPUT[2]}
                                    ref={refGrbInputPrice}
                                    arrayArrayStringGoiY={[
                                      // ["11", "0 Kg"],
                                    ]}
                                    voidOutsideComponentWithNameCase={voidForChildComponent}
                                    strPlaceholder='Nhập đơn giá... (vnđ)' />

                                  {JSXThanhTien}

                                </form>
                              </div>

                            </Fragment>

                          }></JSXGroupBox>

                        <div className="col">

                        </div>

                      </div>
                    </div>


                  </Fragment>
                )
              }

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


      {(StrError !== null && false) && (
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
