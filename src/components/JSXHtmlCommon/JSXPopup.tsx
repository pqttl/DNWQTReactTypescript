import { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ValueConstants } from '../../constants/valueConstants';
import { typeAppState } from '../../storeRedux/indexExport';
import { typePopupCancelConfirm, typePopupHide } from '../../storeRedux/popup/actions';

type typeProps = {
  // strClassTextHeader: string;
  // HtmlHeaderTwo: JSX.Element;
};

//col-sm-8 col-md-6 col-lg-5 col-xl-4 
export const JSXPopup = (props: typeProps) => {

  const IStatePopupGlobal: any = useSelector<typeAppState>((state) => state.iStatePopupGlobal);
  const dispatch = useDispatch();

  const refButtonDongYSuccess = useRef<HTMLButtonElement>(null);
  const refButtonDongYFail = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (refButtonDongYSuccess.current !== null) {
      refButtonDongYSuccess.current.focus();
    }
    if (refButtonDongYFail.current !== null) {
      refButtonDongYFail.current.focus();
      refButtonDongYFail.current.blur();
    }

  }, [IStatePopupGlobal]);

  return (
    <Fragment>

      {
        (IStatePopupGlobal.strType !== ValueConstants.ARRAY_STR_TYPE_MESSAGE[3]
          && IStatePopupGlobal.strType !== ValueConstants.ARRAY_STR_TYPE_MESSAGE[5]
          && IStatePopupGlobal.strType !== ValueConstants.ARRAY_STR_TYPE_MESSAGE[8]
          && IStatePopupGlobal.strType !== null) && (
          <Fragment>

            <div className="modal fade show" data-bs-backdrop="static"
              data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLiveLabel"
              style={{ display: 'block' }} aria-modal="true" role="dialog">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                  {
                    (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[0]) && (
                      <Fragment>

                        <div className="modal-header d-flex justify-content-center py-2">
                          <h5 className="modal-title fw-bold text-primary">
                            {IStatePopupGlobal.strHeader}
                          </h5>
                        </div>

                        <div className="modal-body  d-flex justify-content-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <div className="spinner-border text-primary" style={{ width: 64, height: 64 }} role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <p className="d-flex justify-content-center text-primary my-1">
                              Đang xử lý...
                            </p>
                            <p className="d-flex justify-content-center text-primary my-1">
                              {IStatePopupGlobal.strPercent}
                            </p>

                            {
                              (("" + IStatePopupGlobal.strMessage) !== "") && (
                                <p className="d-flex justify-content-center text-primary my-1">
                                  {IStatePopupGlobal.strMessage}
                                </p>
                              )
                            }

                          </div>
                        </div>
                      </Fragment>
                    )
                  }

                  {
                    (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[1]
                      || IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[6]) && (
                      <Fragment>

                        <div className="modal-header d-flex justify-content-center py-2">
                          <h5 className="modal-title fw-bold text-success">
                            THÔNG BÁO
                          </h5>
                        </div>

                        <div className="modal-body  d-flex justify-content-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <span className="text-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}
                                  fill="currentColor" className="bi bi-check-circle-fill mb-1"
                                  viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>

                              </span>
                            </div>

                            {
                              (("" + IStatePopupGlobal.strMessage) === "") && (
                                <p className="d-flex justify-content-center text-success my-1">
                                  Thao tác thành công!
                                </p>
                              )
                            }

                            {
                              (("" + IStatePopupGlobal.strMessage) !== "") && (
                                <p className="d-flex justify-content-center text-success my-1">
                                  {IStatePopupGlobal.strMessage}
                                </p>
                              )
                            }

                          </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center py-1" >
                          <button type="button"
                            ref={refButtonDongYSuccess}
                            onClick={() => {
                              dispatch(typePopupHide());
                            }}
                            className="btn btn-primary btn-sm" >
                            Đồng ý
                          </button>
                        </div>

                      </Fragment>
                    )
                  }

                  {
                    (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[2]) && (
                      <Fragment>

                        <div className="modal-header d-flex justify-content-center py-2">
                          <h5 className="modal-title fw-bold text-danger">
                            THÔNG BÁO
                          </h5>
                        </div>

                        <div className="modal-body  d-flex justify-content-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <span className="text-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}
                                  fill="currentColor" className="bi bi-x-circle-fill mb-1" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>


                              </span>
                            </div>

                            {
                              (("" + IStatePopupGlobal.strMessage) === "") && (
                                <p className="d-flex justify-content-center text-danger my-1">
                                  Thao tác không thành công!
                                </p>
                              )
                            }

                            {
                              (("" + IStatePopupGlobal.strMessage) !== "") && (
                                <p className="d-flex justify-content-center text-danger my-1">
                                  {IStatePopupGlobal.strMessage}
                                </p>
                              )
                            }

                          </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center py-1" >
                          <button type="button"
                            ref={refButtonDongYFail}
                            onClick={() => {
                              dispatch(typePopupHide());
                            }}
                            className="btn btn-primary btn-sm" >
                            Đồng ý
                          </button>
                        </div>

                      </Fragment>
                    )
                  }

                  {
                    (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[4]) && (
                      <Fragment>

                        <div className="modal-header d-flex justify-content-center py-2">
                          <h5 className="modal-title fw-bold text-success">
                            THÔNG BÁO
                          </h5>
                        </div>

                        <div className="modal-body  d-flex justify-content-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <span className="text-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}
                                  fill="currentColor" className="bi bi-check-circle-fill mb-1"
                                  viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>

                              </span>
                            </div>

                            {
                              (("" + IStatePopupGlobal.strMessage) === "") && (
                                <p className="d-flex justify-content-center text-success my-1">
                                  Thao tác thành công!
                                </p>
                              )
                            }

                            {
                              (("" + IStatePopupGlobal.strMessage) !== "") && (
                                <p className="d-flex justify-content-center text-success my-1">
                                  {IStatePopupGlobal.strMessage}
                                </p>
                              )
                            }

                          </div>
                        </div>

                      </Fragment>
                    )
                  }

                  {
                    (IStatePopupGlobal.strType === ValueConstants.ARRAY_STR_TYPE_MESSAGE[7]) && (
                      <Fragment>

                        {/* <div className="modal-header d-flex justify-content-center py-2">
                          <h5 className="modal-title fw-bold text-danger">
                            THÔNG BÁO
                          </h5>
                        </div> */}

                        <div className="modal-body  d-flex justify-content-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <span className="text-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}
                                  fill="currentColor" className="bi bi-question-circle-fill mb-1"
                                  viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                </svg>



                              </span>
                            </div>

                            {/* {
                              (("" + IStatePopupGlobal.strMessage) === "") && (
                                <p className="d-flex justify-content-center text-danger my-1">
                                  Thao tác không thành công!
                                </p>
                              )
                            } */}

                            {
                              (("" + IStatePopupGlobal.strMessage) !== "") && (
                                <p
                                  dangerouslySetInnerHTML={
                                    { __html: ("" + IStatePopupGlobal.strMessage) }}
                                  className="d-flex justify-content-center text-info my-1">

                                </p>
                              )
                            }

                          </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center py-1" >

                          <button type="button"
                            ref={refButtonDongYFail}
                            onClick={() => {
                              dispatch(typePopupHide());
                            }}
                            className="btn btn-success btn-sm" >
                            Đồng ý
                          </button>

                          <button type="button"
                            ref={refButtonDongYFail}
                            onClick={() => {
                              dispatch(typePopupCancelConfirm());
                            }}
                            className="btn btn-danger btn-sm" >
                            Hủy bỏ
                          </button>

                        </div>

                      </Fragment>
                    )
                  }


                </div>
              </div>
            </div>

            {/* <div className="modal-backdrop fade show"></div> */}
            <div className="modal-backdrop bg-secondary"></div>

          </Fragment>
        )
      }
    </Fragment>
  )
}
