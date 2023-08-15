import React, { Fragment, SyntheticEvent } from 'react'

type typeProps = {
  voidOutsideComponent(anyParam: any): void;
  voidOutsideComponentWithNameCase(strNameCase: string, anyParam: any): void;
  strAddClass: string;
  strText: string;
  intIndexSelected: number;
  arrayAllTupleNameQuantity: [string, string][];
};

export const JSXAutoCompleteList = (props: typeProps) => {
  // const strTextInput = props.strText.trim();
  // if (strTextInput.length < 1 || props.arrayAllTupleNameQuantity.length === 0) {
  //   return (
  //     <Fragment></Fragment>
  //   );
  // }

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

  let intIndexIncrease = -1;

  return (
    <Fragment>

      {
        (props.strText.trim().length > 0 && props.arrayAllTupleNameQuantity.length !== 0) && (
          <div className={"autocomplete-items " + props.strAddClass}>

            {
              props.arrayAllTupleNameQuantity.map(
                (tupleItem, intIndexArrayCurrent) => {
                  const strTextInput = props.strText.trim();
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
                  if ((++intIndexIncrease) === props.intIndexSelected) {
                    strClassRow = strClassBgSelected;
                    props.voidOutsideComponentWithNameCase("setStrValueSelectedAutoComplete", strTextInList);
                  }
                  strClassRow = "border-bottom p-1 " + strClassRow;
                  props.voidOutsideComponentWithNameCase("setNumAllItemShowComplete", intIndexIncrease + 1);

                  return (
                    <div key={strKey} className={strClassRow}
                      onClick={() => props.voidOutsideComponent(strTextInList)}
                      onMouseOver={voidChangeToClassBgMouseHover}
                      onMouseLeave={voidChangeToClassBgMouseUnHover} role={"button"} >
                      <div className="d-flex justify-content-between">
                        <div><strong>{strTextBold}</strong>{strTextInList.substring(strTextInput.length)}</div>
                        <div>{tupleItem[1]}</div>
                      </div>
                      {/* <input type="hidden" defaultValue={strTextInList} /> */}
                    </div>
                  );
                }
              )
            }

          </div>
        )
      }

    </Fragment>
  )
}
