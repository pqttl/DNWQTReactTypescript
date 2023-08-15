import React, { Fragment } from 'react'

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
export const JSXOneRadioButton = (props: {
  strId: string, strNameGroupRadio: string, strText: string, blnChecked: boolean,
  voidOutsideComponent(event: any): void
}) => {
  //let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
  let arrayParam: Array<string | number | boolean> = ['Apple', 2, 'Orange', 3, 4, 'Banana', true];
  arrayParam = [];
  arrayParam.push(props.strId || "");
  arrayParam.push(props.strNameGroupRadio || "");
  arrayParam.push(props.strText || "");
  arrayParam.push(props.blnChecked || false);
  //const strId=props.strId||"";

  return (
    <Fragment>

      <div className="form-check mx-1 my-auto">
        {((arrayParam[3] as boolean) === true
          ? <input className="form-check-input" type="radio" name={arrayParam[1] as string}
            onChange={event => props.voidOutsideComponent(event)}
            id={arrayParam[0] as string} value={arrayParam[2] as string} defaultChecked />
          : <input className="form-check-input" type="radio" name={arrayParam[1] as string}
            onChange={event => props.voidOutsideComponent(event)}
            id={arrayParam[0] as string} value={arrayParam[2] as string} />)}
        <label className="form-check-label" htmlFor={arrayParam[0] as string}>{arrayParam[2] as string}</label>
      </div>

    </Fragment>
  )
}
