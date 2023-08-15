import { useRef } from 'react';

type PaginationProps = {
  FunctionOnPageChanged: Function;
  intTotalRecords: number;
  intPageSize: number;
  intPageLimit: number;
  intCurrentIndexPage: number;
};

export const JSXPaginationNotState = (props: PaginationProps) => {
  const { intTotalRecords, intPageLimit, intPageSize, intCurrentIndexPage } = props;
  // const intIndexPageDefault = 44;
  // const [IntCurrentIndexPage, setIntCurrentIndexPage] = useState(intIndexPageDefault);

  const refButtonToFocusWhenClick = useRef<HTMLButtonElement>(null);

  const voidHandleClick = (pageNumber: number) => {
    // setIntCurrentIndexPage(pageNumber);

    if (refButtonToFocusWhenClick.current !== null) {
      refButtonToFocusWhenClick.current.focus();
    }

    props.FunctionOnPageChanged(pageNumber);
  };

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

  return (

    <ul className='pagination pagination-sm'>

      {
        (intCurrentIndexPage > 2) && (
          <li className={`page-item`}>
            <button
              className='page-link'
              onClick={() => voidHandleClick(0)}
            >
              |&lt;
            </button>
          </li>
        )
      }

      {
        (intCurrentIndexPage > 0) && (
          <li className={`page-item`}>
            <button
              className='page-link'
              onClick={() => voidHandleClick(intCurrentIndexPage - 1)}
            >
              &lt;
            </button>
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
                <button onClick={() => voidHandleClick(intPageIdForLink)} className='page-link'
                  ref={refButtonToFocusWhenClick}>
                  {intPageShow}
                </button>
              </li>
            );
          }

          return (
            <li
              key={intIndex}
              className={` page-item `}
            >
              <button onClick={() => voidHandleClick(intPageIdForLink)} className='page-link'>
                {intPageShow}
              </button>
            </li>
          );
        })
      }

      {
        (intCurrentIndexPage < intTotalPages - 1) && (
          <li className={`page-item`}>
            <button
              className='page-link'
              onClick={() => voidHandleClick(intCurrentIndexPage + 1)}
            >
              &gt;
            </button>
          </li>
        )
      }

      {
        (intCurrentIndexPage < intTotalPages - 3) && (
          <li className={`page-item`}>
            <button
              className='page-link'
              onClick={() => voidHandleClick(intTotalPages - 1)}
            >
              &gt;|
            </button>
          </li>
        )
      }

    </ul>
  );
};
