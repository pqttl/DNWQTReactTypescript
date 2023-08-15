import { Fragment, useEffect } from 'react';
import { JSXOneRadioButton } from './JSXOneRadioButton';

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
//export const JSXGroupRadioButton = React.forwardRef(props, ref) => {
export const JSXGroupRadioButton = ((props: {
  strNameGroup: string, strIdCheckedDefault: string, arrayStringId: string[], arrayArrayText: string[][],
  voidOutsideComponent(event: any): void
}) => {
  //let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
  // let arrayParam: Array<string | number | boolean> = ['Apple', 2, 'Orange', 3, 4, 'Banana', true];
  // arrayParam = [];
  // arrayParam.push(props.strId || "");
  // arrayParam.push(props.strNameGroupRadio || "");
  // arrayParam.push(props.strText || "");
  // arrayParam.push(props.blnChecked || false);
  //const strId=props.strId||"";

  const strNameGroup = props.strNameGroup || "nameGroupRadioButton";
  //let intIndexIncrease = -1;
  // const [IntTemp, setIntTemp] = useState(-1);
  // const IntIndexIncrease = (intInput: number) => {
  //   setIntTemp(intInput + 1);
  //   return (intInput + 1);
  // }

  // const [IntTemp, setIntTemp] = useState("-1");
  // useImperativeHandle(ref
  //   , () => ({ getMyState: ():string => { return IntTemp } })
  //   , [IntTemp]);

  const strIdCheckedDefault = props.strIdCheckedDefault;
  const arrayStringId = props.arrayStringId;
  const arrayArrayText = props.arrayArrayText;

  useEffect(() => {
    let strTemp = "Không tìm thấy id '" + strIdCheckedDefault + "' trong arrayStringId";
    for (var strIndex in arrayStringId) {
      if (arrayStringId[strIndex] === strIdCheckedDefault) {
        strTemp = arrayArrayText[strIndex][0] as string;
        break;
      }
    }
    let event = {
      target: {
        id: strIdCheckedDefault,
        value: strTemp,
      }
    };
    props.voidOutsideComponent(event);
    //setStrCodeTypesTS(StrCodeByTwoParameter(StrSnakeCaseX,StrValueX));
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Fragment>

      <div className="d-flex flex-wrap my-1">
        {
          (arrayArrayText as Array<Array<string | number | boolean>>)
            .map((itemArrayChild, intIndex) => {
              let intIndexIncrease = -1;
              // const strId = strNameGroup + "_Id" + intIndex;
              const strId = arrayStringId[intIndex];

              return (
                <JSXOneRadioButton key={intIndex}
                  voidOutsideComponent={props.voidOutsideComponent}
                  strId={strId}
                  strNameGroupRadio={strNameGroup}
                  strText={itemArrayChild[++intIndexIncrease] as string}
                  blnChecked={strId === strIdCheckedDefault}
                />
              );
            })
        }
      </div>

    </Fragment>
  )
})
