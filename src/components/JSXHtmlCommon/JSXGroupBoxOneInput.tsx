import { ChangeEvent, forwardRef, Fragment, SyntheticEvent, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { ValueConstants } from '../../constants/valueConstants';
import { StrConvertNumberToCurrency, StrTextChuanSpaceUpper } from '../../helpers/functionCommon';
import { JSXGroupBoxAdvanced } from './JSXGroupBoxAdvanced';

type typeProps = {
  voidOutsideComponentWithNameCase(strNameCase: string, anyParam: any): void;
  strHeader: string;
  strPlaceholder: string;
  arrayArrayStringGoiY: [string, string][];
};

type typeRef = {
  voidInsideComponentWithNameCase(strNameCase: string, anyParam: any): void;
  // MMMM(): void;
};

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
export const JSXGroupBoxOneInput = forwardRef((props: typeProps, ref: React.Ref<typeRef>) => {

  const [BlnFocusTxtInput, setBlnFocusTxtInput] = useState(false);
  // const [StrTxtInput, setStrTxtInput] = useState("");
  const [StrTextChuan, setStrTextChuan] = useState("");



  const [JSXABC, setJSXABC] = useState(
    <Fragment></Fragment>
  );

  const strClassBgSelected = "bg-info";
  const strClassBgMouseOver = "bg-secondary";
  const strClassBgMouseLeave = "bg-white";
  const voidRemove2ClassBg = (event: SyntheticEvent) => {
    event.currentTarget.classList.remove(strClassBgMouseOver);
    event.currentTarget.classList.remove(strClassBgMouseLeave);
  }

  const voidChangeToClassBgMouseHover = (event: SyntheticEvent) => {
    if (event.currentTarget.classList.contains(strClassBgSelected)) {
      return;
    }

    voidRemove2ClassBg(event);
    event.currentTarget.classList.add(strClassBgMouseOver);
  }

  const voidChangeToClassBgMouseUnHover = (event: SyntheticEvent) => {
    if (event.currentTarget.classList.contains(strClassBgSelected)) {
      return;
    }

    voidRemove2ClassBg(event);
    event.currentTarget.classList.add(strClassBgMouseLeave);
  }





  const voidChangeStrTextChuan = (strInput: string) => {
    setIntIndexSelectedAutoComplete(-1);
    let strTextChuan = "";

    strTextChuan = StrTextChuanSpaceUpper(strInput);

    if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[1]) {
      strTextChuan = StrConvertNumberToCurrency(Number(strTextChuan), "", "", 3);
    }

    if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) {
      strTextChuan = StrConvertNumberToCurrency(Number(strTextChuan), "", "", 0);
    }

    if (strTextChuan === "NaN") {
      strTextChuan = "0";
    }

    setStrTextChuan(strTextChuan);
    props.voidOutsideComponentWithNameCase(
      STR_JSXGroupBoxOneInput + "voidChangeStrTextChuan" + props.strHeader, strTextChuan);

  }

  const voidOnChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    voidChangeStrTextChuan("" + e.target.value);
  };

  const [IntIndexSelectedAutoComplete, setIntIndexSelectedAutoComplete] = useState(-1);

  const refInputTextbox = useRef<HTMLInputElement>(null);

  const voidChangeTenViThuocAndFocus = (strInput: string) => {
    // setStrTenVithuoc(strInput);

    if (refInputTextbox.current !== null) {
      refInputTextbox.current.focus();
      refInputTextbox.current.value = strInput;
      voidChangeStrTextChuan(strInput);
    }

  }

  const STR_JSXGroupBoxOneInput = "STR_JSXGroupBoxOneInput";

  useImperativeHandle(ref, () => {
    return {
      voidInsideComponentWithNameCase: (strNameCase: string, anyParam: any) => {
        if (strNameCase === ValueConstants.STR_CASE_JSXGroupBoxOneInput.voidFocusAndSelect) {
          if (refInputTextbox.current !== null) {
            refInputTextbox.current.focus();
            refInputTextbox.current.select();
          }
          return;
        }
        if (strNameCase === ValueConstants.STR_CASE_JSXGroupBoxOneInput.setBlnFocusTxtInput) {
          setBlnFocusTxtInput(false);
          return;
        }

      },
      // MMMM: () => {
      //   MMMM();
      // },
    }
  });

  const [NumAllItemShowComplete, setNumAllItemShowComplete] = useState(0);
  const [StrValueSelectedAutoComplete, setStrValueSelectedAutoComplete] = useState("");

  const voidForChildComponent = (strNameCase: string, anyParam: any) => {
    if (strNameCase === "setStrValueSelectedAutoComplete") {
      setStrValueSelectedAutoComplete(anyParam);
      return;
    }
    if (strNameCase === "setNumAllItemShowComplete") {
      setNumAllItemShowComplete(anyParam);
      return;
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (IntIndexSelectedAutoComplete > -1) {
        // setStrTenVithuoc(StrValueSelectedAutoComplete);
        if (refInputTextbox.current !== null) {
          // refInputTenVithuoc.current.focus();
          refInputTextbox.current.value = StrValueSelectedAutoComplete;
          // refInputTenVithuoc.current.onchange();
          voidChangeStrTextChuan(StrValueSelectedAutoComplete);

          // const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          // nativeInputValueSetter.call(refInputTenVithuoc.current, '');
          // const inputEvent = new Event('onchange', { bubbles: true });
          // refInputTenVithuoc.current.dispatchEvent(inputEvent);
        }

        return;
      }

      if (IntIndexSelectedAutoComplete === -1) {
        props.voidOutsideComponentWithNameCase(
          STR_JSXGroupBoxOneInput + "onClick" + props.strHeader, null);
      }

      return;
    }

    if (event.key === 'ArrowDown') {
      let intTemp = IntIndexSelectedAutoComplete + 1;
      if (intTemp >= NumAllItemShowComplete) {
        intTemp = 0;
      }

      setIntIndexSelectedAutoComplete(intTemp);
      return;
    }

    if (event.key === 'ArrowUp') {
      let intTemp = IntIndexSelectedAutoComplete - 1;
      if (intTemp < 0) {
        intTemp = NumAllItemShowComplete - 1;
      }

      setIntIndexSelectedAutoComplete(intTemp);
      return;
    }

    if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) {
      if (event.key === 'n') {
        event.preventDefault();
        voidChangeOrAddText("000", true);
        return;
      }
    }

  }

  const voidChangeOrAddText = (strInput: string, blnAddText: boolean) => {
    if (refInputTextbox.current !== null) {
      if (blnAddText === false) {
        refInputTextbox.current.value = "";
        voidChangeStrTextChuan("");
        refInputTextbox.current.focus();
        setNumAllItemShowComplete(0);
        return;
      }

      let strTemp = "" + refInputTextbox.current.value;
      if (strTemp.includes(strInput) && strInput === ".") {
        return;
      }
      strTemp += "" + strInput;
      strTemp = strTemp.substring(0, 10);
      refInputTextbox.current.value = strTemp;
      voidChangeStrTextChuan(strTemp);
      refInputTextbox.current.focus();
    }
  }

  const [StrClassTextHeader, setStrClassTextHeader] = useState(" text-danger ");

  useEffect(() => {
    let strClassText = " text-danger ";
    if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[0]) {
      if (StrTextChuan !== "") {
        strClassText = " text-success ";
      }
    }

    if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[1]
      || props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) {
      if (StrTextChuan !== "0" && StrTextChuan !== "NaN") {
        strClassText = " text-success ";
      }
    }

    setStrClassTextHeader(strClassText);

  }, [StrTextChuan]);// eslint-disable-line react-hooks/exhaustive-deps

  let StrDonVi = "";
  if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[1]) {
    StrDonVi = "Kg";
  }
  if (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) {
    StrDonVi = "vnđ";
  }

  useEffect(() => {

    setJSXABC(<Fragment />);

    if (BlnFocusTxtInput === true && StrTextChuan.trim().length > 0
      && props.arrayArrayStringGoiY.length !== 0) {
      let intIndexIncrease = -1;

      setJSXABC(
        <div className={"autocomplete-items mx-2"}>

          {
            props.arrayArrayStringGoiY.map(
              (tupleItem, intIndexArrayCurrent) => {
                const strTextInput = StrTextChuan.trim();
                const strTextInList = tupleItem[0];
                if (strTextInList.length < strTextInput.length) {
                  return (null);
                }

                const strTextBold = strTextInList.substring(0, strTextInput.length);
                if (strTextBold.toUpperCase() !== strTextInput.toUpperCase()) {
                  return (null);
                }

                const strKey = "divAutocomplete_" + intIndexArrayCurrent;
                let strClassRow = strClassBgMouseLeave;
                if ((++intIndexIncrease) === IntIndexSelectedAutoComplete) {
                  strClassRow = strClassBgSelected;
                  // props.voidOutsideComponentWithNameCase("setStrValueSelectedAutoComplete", strTextInList);
                  voidForChildComponent("setStrValueSelectedAutoComplete", strTextInList);
                }
                strClassRow = "border-bottom p-1 " + strClassRow;
                // props.voidOutsideComponentWithNameCase("setNumAllItemShowComplete", intIndexIncrease + 1);
                voidForChildComponent("setNumAllItemShowComplete", intIndexIncrease + 1);

                return (
                  <div key={strKey} className={strClassRow}
                    onClick={() => {
                      voidChangeTenViThuocAndFocus(strTextInList);
                      // props.voidOutsideComponent(strTextInList);
                    }}
                    onMouseOver={voidChangeToClassBgMouseHover}
                    onMouseLeave={voidChangeToClassBgMouseUnHover} role={"button"} >
                    <div className="d-flex justify-content-between">
                      <div><strong>{strTextBold}</strong>{strTextInList.substring(strTextInput.length)}</div>
                      <div>{tupleItem[1]}</div>
                    </div>
                  </div>
                );
              }
            )
          }

        </div>
      );

      // setJSXABC(
      //   <JSXAutoCompleteList strText={StrTextChuan}
      //     strAddClass=" mx-2 "
      //     intIndexSelected={IntIndexSelectedAutoComplete}
      //     voidOutsideComponent={voidChangeTenViThuocAndFocus}
      //     voidOutsideComponentWithNameCase={voidForChildComponent}
      //     arrayAllTupleNameQuantity={props.arrayArrayStringGoiY} />
      // );
    }

  }, [StrTextChuan, BlnFocusTxtInput, IntIndexSelectedAutoComplete]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Fragment>

      <JSXGroupBoxAdvanced
        strClassDivChild={" py-1 px-1 "}
        strClassDivParent=""
        HtmlHeader={
          <Fragment >

            <h6 className={"bg-white px-1 text-info"} style={{ marginLeft: 6, width: 100 }}>
              {props.strHeader + ((StrTextChuan === "" ? "" : (": ")))}
            </h6>

            {
              ((StrTextChuan + (StrTextChuan === "" ? "" : (" " + StrDonVi))) !== "") && (
                <Fragment>
                  <h6 className={"bg-white px-1 " + StrClassTextHeader}>
                    {StrTextChuan}
                  </h6>
                  <h6 className={"bg-white px-1 " + StrClassTextHeader}>
                    {(" " + StrDonVi)}
                  </h6>
                </Fragment>
              )
            }

          </Fragment>
        }

        HtmlOtherHeader={
          <Fragment />
        }

        HtmlChild={

          <Fragment>

            <div>
              <div className="input-group my-1">

                {
                  (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[0]) && (
                    <input className="form-control border-info border-end-0" type="text"
                      onKeyDown={handleKeyPress}
                      ref={refInputTextbox}
                      onChange={voidOnChangeInputText}
                      onFocus={() => {
                        setBlnFocusTxtInput(true);
                        props.voidOutsideComponentWithNameCase(
                          STR_JSXGroupBoxOneInput + "onFocus" + props.strHeader, null);
                      }}
                      placeholder={props.strPlaceholder} />
                  )
                }

                {
                  (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[1]) && (
                    <input className="form-control border-info border-end-0" pattern="[0-9]*"
                      inputMode="numeric"
                      type="text" min={0} max={99999} maxLength={9}
                      onKeyDown={handleKeyPress}
                      ref={refInputTextbox}
                      onChange={voidOnChangeInputText}
                      onFocus={() => {
                        setBlnFocusTxtInput(true);
                        props.voidOutsideComponentWithNameCase(
                          STR_JSXGroupBoxOneInput + "onFocus" + props.strHeader, null);
                      }}
                      placeholder={props.strPlaceholder} />
                  )
                }

                {
                  (props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) && (
                    <input className="form-control border-info border-end-0" pattern="[0-9]*"
                      inputMode="numeric" step={500} type="text" min={1000} max={999999500} maxLength={10}
                      onKeyDown={handleKeyPress}
                      ref={refInputTextbox}
                      onChange={voidOnChangeInputText}
                      onFocus={() => {
                        setBlnFocusTxtInput(true);
                        props.voidOutsideComponentWithNameCase(
                          STR_JSXGroupBoxOneInput + "onFocus" + props.strHeader, null);
                      }}
                      placeholder={props.strPlaceholder} />
                  )
                }

                {
                  (BlnFocusTxtInput === true && NumAllItemShowComplete > 0) && (
                    <button className="btn btn-outline-secondary border-info border-start-0"
                      type="button"
                      title="Ẩn danh sách gợi ý hiện tại"
                      onClick={() => {
                        setBlnFocusTxtInput(false);
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                        fill="currentColor" className="bi bi-eye-slash-fill mb-1" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                      </svg>

                    </button>
                  )
                }

                {
                  (BlnFocusTxtInput === true && props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[1]) && (
                    <button className="btn btn-secondary" type="button"
                      style={{ width: 42 }}
                      title="Thêm dấu chấm '.'"
                      onClick={() => {
                        voidChangeOrAddText(".", true);
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                        fill="currentColor" className="bi bi-dot mb-1" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>


                    </button>
                  )
                }

                {
                  (BlnFocusTxtInput === true && props.strHeader === ValueConstants.ARRAY_STR_HEADER_INPUT[2]) && (
                    <button className="btn btn-secondary px-0" type="button"
                      style={{ width: 42 }}
                      title="Bấm vào đây hoặc bấm phím 'n' để thêm 3 số 0 nhanh"
                      onClick={() => {
                        voidChangeOrAddText("000", true);
                      }}>000</button>
                  )
                }

                {
                  (BlnFocusTxtInput === true && StrTextChuan !== "" && StrTextChuan !== "0") && (
                    <button className="btn btn-success" type="button"
                      title="Xuống ô chữ bên dưới và bôi đen luôn"
                      onClick={() => {
                        props.voidOutsideComponentWithNameCase(
                          STR_JSXGroupBoxOneInput + "onClick" + props.strHeader, null);
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                        fill="currentColor" className="bi bi-check-lg mb-1" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>

                    </button>
                  )
                }


                <button className="btn btn-danger" type="button"
                  title="Xóa chữ ở ô gõ chữ"
                  onClick={() => {
                    voidChangeOrAddText("", false);
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                    fill="currentColor" className="bi bi-x-lg mb-1" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>

                </button>

              </div>

              {/* {
                (BlnFocusTxtInput === true) && (
                  <JSXAutoCompleteList strText={StrTextChuan}
                    strAddClass=" mx-2 "
                    intIndexSelected={IntIndexSelectedAutoComplete}
                    voidOutsideComponent={voidChangeTenViThuocAndFocus}
                    voidOutsideComponentWithNameCase={voidForChildComponent}
                    arrayAllTupleNameQuantity={props.arrayArrayStringGoiY} />)
              } */}

              {JSXABC}

            </div>

          </Fragment>

        }></JSXGroupBoxAdvanced>

    </Fragment>
  )
})
