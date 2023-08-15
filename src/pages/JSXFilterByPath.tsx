import { useParams } from 'react-router-dom';
import { UrlConstants } from '../constants/urlConstants';
import { JSXOrderByIndexPage } from './admin/order/JSXOrderByIndexPage';
import { JSXOrderDetailById } from './admin/orderDetail/JSXOrderDetailById';
import { JSX404NotFound } from './JSX404NotFound';

export const JSXFilterByPath = () => {
    const params = useParams();

    let strNumber = "";
    let strTextLeft = "";
    if (params.strPath !== undefined) {
        const strInput = params.strPath as string;
        var regex = /\d+/g;
        var arraymatches = strInput.match(regex);
        // var arraymatches = regex.exec(strInput);
        if (arraymatches !== null && arraymatches.length > 0) {
            strNumber = arraymatches[0];
            const intTemp = strInput.indexOf(strNumber);
            strTextLeft = strInput.substring(0, intTemp);
        } else {
            strTextLeft = strInput;
        }
    }

    if (strTextLeft === UrlConstants.STR_ORDER_PAGE_INDEX) {
        if (strNumber !== "") {
            const intInput = parseInt(strNumber);
            return (
                <JSXOrderByIndexPage intIndexPage={intInput}
                    blnRedirectToMaxIndexPage={false} />
            );
        }

        if (strNumber === "") {
            // const intInput = parseInt(strNumber);
            return (
                <JSXOrderByIndexPage intIndexPage={0}
                    blnRedirectToMaxIndexPage={true} />
            );
        }

        // return (
        //     <JSXOrder />
        // );
    }

    if (strTextLeft === UrlConstants.STR_DETAIL_ORDER_ID) {
        if (strNumber !== "") {
            const intInput = parseInt(strNumber);
            return (
                <JSXOrderDetailById intId={intInput} />
            );
        }

        // return (
        //     <JSXOrder />
        // );
    }

    return (
        <JSX404NotFound />
    )
}
