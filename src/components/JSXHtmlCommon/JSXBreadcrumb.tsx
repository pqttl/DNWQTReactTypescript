import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

type typeProps = {
    arrayTuple2StringLinkText: [string, string][];
};

export const JSXBreadcrumb = (props: typeProps) => {
    return (
        <Fragment>
            <ol className="breadcrumb my-1">

                {
                    props.arrayTuple2StringLinkText.map(
                        (tupleItem, intIndexArrayCurrent) => {
                            const strKey = "li_breadcrumb_" + intIndexArrayCurrent;
                            const strPath = "" + tupleItem[0];
                            if (strPath === "") {
                                return (
                                    <li key={strKey} className="breadcrumb-item active">
                                        {tupleItem[1]}
                                    </li>
                                );
                            }

                            return (
                                <li key={strKey} className="breadcrumb-item">
                                    <Link to={strPath}>{tupleItem[1]}</Link>
                                </li>
                            );
                        }
                    )
                }

            </ol>
        </Fragment>
    )
}
