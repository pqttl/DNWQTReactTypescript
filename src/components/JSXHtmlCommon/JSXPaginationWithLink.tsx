// import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UrlConstants } from '../../constants/urlConstants';

type PaginationProps = {
  //FunctionOnPageChanged: Function;
  intTotalRecords: number;
  intPageSize: number;
  intPageLimit: number;
  intCurrentIndexPage: number;
};

export const JSXPaginationWithLink = (props: PaginationProps) => {
  const { intTotalRecords, intPageLimit, intPageSize, intCurrentIndexPage } = props;
  // const intIndexPageDefault = 44;
  // const [IntCurrentIndexPage, setIntCurrentIndexPage] = useState(intIndexPageDefault);

  // const refButtonToFocusWhenClick = useRef<HTMLButtonElement>(null);

  // const voidHandleClick = (pageNumber: number) => {
  //   // setIntCurrentIndexPage(pageNumber);

  //   if (refButtonToFocusWhenClick.current !== null) {
  //     refButtonToFocusWhenClick.current.focus();
  //   }

  //   props.FunctionOnPageChanged(pageNumber);
  // };

  const intTotalPages = Math.ceil(intTotalRecords / intPageSize);

  const intMinPageShow = 1;
  const intCurrentPageShow = intCurrentIndexPage + 1;
  var intStartPageShow = Math.max(intCurrentPageShow - intPageLimit, intMinPageShow);
  var intEndPageShow = Math.min(intCurrentPageShow + intPageLimit, intTotalPages);

  const arrayNumberRange = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };
  const arrayNumberPages = arrayNumberRange(intStartPageShow, intEndPageShow);

  const strLink = "/" + UrlConstants.STR_ORDER_PAGE_INDEX;

  return (

    <ul className='pagination pagination-sm'>

      {
        (intCurrentIndexPage > 2) && (
          <li className={`page-item`}>
            <Link
              className='page-link'
              to={strLink + "0"}
            >
              |&lt;
            </Link>
          </li>
        )
      }

      {
        (intCurrentIndexPage > 0) && (
          <li className={`page-item`}>
            <Link
              className='page-link'
              to={strLink + (intCurrentIndexPage - 1)}
            >
              &lt;
            </Link>
          </li>
        )
      }

      {
        arrayNumberPages.map((intPageShow, intIndex) => {
          const intPageIdForLink = intPageShow - 1;
          if (intCurrentIndexPage === intPageIdForLink) {
            return (
              <li
                key={intIndex}
                className={` page-item active `}
              >
                <Link
                  className='page-link'
                  to={strLink + (intPageIdForLink)}
                //ref={refButtonToFocusWhenClick}
                >
                  {intPageShow}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={intIndex}
              className={` page-item `}
            >
              <Link
                className='page-link'
                to={strLink + (intPageIdForLink)}>
                {intPageShow}
              </Link>
            </li>
          );
        })
      }

      {
        (intCurrentIndexPage < intTotalPages - 1) && (
          <li className={`page-item`}>
            <Link
              className='page-link'
              to={strLink + (intCurrentIndexPage + 1)}
            >
              &gt;
            </Link>
          </li>
        )
      }

      {
        (intCurrentIndexPage < intTotalPages - 3) && (
          <li className={`page-item`}>
            <Link
              className='page-link'
              to={strLink + (intTotalPages - 1)}
            >
              &gt;|
            </Link>
          </li>
        )
      }

    </ul>
  );
};
