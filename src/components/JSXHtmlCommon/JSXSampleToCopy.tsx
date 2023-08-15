import React, { Fragment } from 'react'

type typeProps = {
  strInput: string;
  strInput2: string;
};

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
export const JSXSampleToCopy = (props: typeProps) => {

  return (
    <Fragment>

      <div className={""+props.strInput}>
      </div>

    </Fragment>
  )
}
