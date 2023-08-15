import React, { Fragment } from 'react'

type typeProps = {
  strClassDivParent: string;
  strClassDivChild: string;
  HtmlChild: JSX.Element;
  HtmlOtherHeader: JSX.Element;
  HtmlHeader: JSX.Element;
};

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
export const JSXGroupBoxAdvanced = (props: typeProps) => {

  return (
    <Fragment>

      <div className={"card my-3 position-relative " + (props.strClassDivParent || "")}>
        <div className="position-absolute top-0 start-0  translate-middle-y d-flex justify-content-start">

          {props.HtmlHeader || <Fragment />}

        </div>

        {props.HtmlOtherHeader || <Fragment />}

        <div className={"card-body " + (props.strClassDivChild || "")} style={{ marginTop: 5 }}>

          {props.HtmlChild || <Fragment />}

        </div>
      </div>

    </Fragment>
  )
}
