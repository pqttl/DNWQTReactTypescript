import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JSXGroupBoxAdvanced } from '../../../components/JSXHtmlCommon/JSXGroupBoxAdvanced';
import { JSXGroupBoxOneInput } from '../../../components/JSXHtmlCommon/JSXGroupBoxOneInput';
import { ValueConstants } from '../../../constants/valueConstants';
import { StrConvertNumberToCurrency } from '../../../helpers/functionCommon';
import { typeAppState } from '../../../storeRedux/indexExport';
import { voidDispatchvoidUpdateProductInOrder } from '../../../storeRedux/orderDetail/actions';

type typeProps = {
  voidOutsideComponentWithNameCase(strNameCase: string, anyParam: any): void;
  intIdOrder: number;
  intIdOrderDetail: number;
};

export const JSXUpdateOrderDetail = (props: typeProps) => {

  type typeRef = React.ElementRef<typeof JSXGroupBoxOneInput>;

  const refGrbInputQuantity = useRef<typeRef>(null);

  const refGrbInputPrice = useRef<typeRef>(null);

  const [StrQuantity, setStrQuantity] = useState("0");
  const [StrPrice, setStrPrice] = useState("0");

  const voidForChildComponent = (strNameCase: string, anyParam: any) => {

    const STR_JSXGroupBoxOneInput = "STR_JSXGroupBoxOneInput";
    {
      const strTemp = STR_JSXGroupBoxOneInput + "voidChangeStrTextChuan";
      if (strNameCase.startsWith(strTemp)) {
        // if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
        //   setStrName(anyParam);
        //   return;
        // }

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
        // if (refGrbInputName.current !== null) {
        //   if (strNameCase !== (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
        //     refGrbInputName.current.voidInsideComponentWithNameCase(strCaseInside, null);
        //   }
        // }

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
        // if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[0])) {
        //   if (refGrbInputQuantity.current !== null) {
        //     refGrbInputQuantity.current.voidInsideComponentWithNameCase(strCaseInside, null);
        //   }
        //   return;
        // }
        if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[1])) {
          if (refGrbInputPrice.current !== null) {
            refGrbInputPrice.current.voidInsideComponentWithNameCase(strCaseInside, null);
          }
          return;
        }

        // if (strNameCase === (strTemp + ValueConstants.ARRAY_STR_HEADER_INPUT[2])) {
        //   dispatch<any>(voidDispatchAddProductToOrder({
        //     StrNameProduct: StrName, StrQuantity: StrQuantity
        //     , StrPrice: StrPrice, IntIdOrder: props.intIdOrder
        //   }));
        //   return;
        // }

        return;
      }
    }

  }

  const dispatch = useDispatch();


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
                Sửa thành
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

  const voidFocusAndSelectTxt = () => {
    if (refGrbInputQuantity.current !== null) {
      // const STR_JSXGroupBoxOneInput = "STR_JSXGroupBoxOneInput";
      const strCaseInside = ValueConstants.STR_CASE_JSXGroupBoxOneInput.voidFocusAndSelect;
      refGrbInputQuantity.current.voidInsideComponentWithNameCase(strCaseInside, null);
    }
  }

  useEffect(() => {
    setStrQuantity("0");
    setStrPrice("0");
    voidFocusAndSelectTxt();

  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const IStatePopupGlobal: any = useSelector<typeAppState>((state) => state.iStatePopupGlobal);

  useEffect(() => {
    if (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[3]) {
      if (IStatePopupGlobal.strNameCase === ValueConstants.STR_CASE_JSXAddOrderDetail.BamNutNhapLai) {
        // dispatch<any>(voidDispatchGetAllProductJoinDepot());

        return;
      }
    }

  }, [IStatePopupGlobal]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>

      <form method="post">

        {JSXThanhTien}

        <div className="d-flex justify-content-center my-1">
          <a href="#!"
            onClick={() => {
              dispatch<any>(voidDispatchvoidUpdateProductInOrder({
                StrQuantity: StrQuantity
                , StrPrice: StrPrice, IntIdDetailOrder: props.intIdOrderDetail
              }, props.intIdOrder));
            }}
            style={{ width: 82 }}
            className="btn btn-primary btn-sm mx-1">Lưu lại</a>
          <a href="#!"
            style={{ width: 82 }}
            onClick={() => {
              props.voidOutsideComponentWithNameCase(
                ValueConstants.STR_CASE_JSXOrderDetailById.cancelUpdateOrderDetail, null);
            }}
            className="btn btn-danger btn-sm mx-1">Hủy bỏ</a>
        </div>



        <JSXGroupBoxOneInput strHeader={ValueConstants.ARRAY_STR_HEADER_INPUT[1]}
          ref={refGrbInputQuantity}
          arrayArrayStringGoiY={[
            // ["11", "0 Kg"],
          ]}
          voidOutsideComponentWithNameCase={voidForChildComponent}
          strPlaceholder='Nhập số lượng mới... (Kg)' />

        <JSXGroupBoxOneInput strHeader={ValueConstants.ARRAY_STR_HEADER_INPUT[2]}
          ref={refGrbInputPrice}
          arrayArrayStringGoiY={[
            // ["11", "0 Kg"],
          ]}
          voidOutsideComponentWithNameCase={voidForChildComponent}
          strPlaceholder='Nhập đơn giá mới... (vnđ)' />

        {JSXThanhTien}

      </form>


    </Fragment>
  )
}
