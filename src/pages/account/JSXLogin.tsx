import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { useLocation } from 'react-router';
import { typeLogout, voidDispatchLogin } from '../../storeRedux/account/actions';
import { typeAppState } from '../../storeRedux/indexExport';

export const JSXLogin = () => {

  //useState là như khai báo biến toàn cục trong 1 file c#
  const [MInputs, setInputs] = useState({
    StrEmail: '',
    StrPassword: '',
  });
  const [BlnSubmitted, setSubmitted] = useState(false);
  //const [BlnShowError, setBlnShowError] = useState(false);

  //useSelector để lấy giá trị state A ở file khác, nếu A bị thay đổi thì nó sẽ tự re-render lại
  //const blnLoading = useSelector<typeAppState>((state) => state.account.blnLoading);
  const strError = useSelector<typeAppState>((state) => state.iStateAccountGlobal.strError);

  const { StrEmail, StrPassword } = MInputs;

  //useDispatch để gọi hàm từ action
  const dispatch = useDispatch();
  //const location = useLocation();

  //useEffect có tham số thứ 2 là X
  //Nếu X là [] thì sẽ chỉ chạy hàm một lần sau khi componentDidUpdate(hay gọi là render component)
  //Nếu X là [parameterY] thì sẽ chạy khi componentDidUpdate và bất cứ khi nào Y thay đổi
  useEffect(() => {
    dispatch<any>(typeLogout());
  }, [dispatch]);


  const [htmlErrorLogin, sethtmlErrorLogin] = useState(<div />);
  useEffect(() => {
    sethtmlErrorLogin(<div />);
    // const blnTemp = (BlnSubmitted === true && StrPassword !== "" && StrEmail !== ""
    //     && strError !== "");

    // const strTemp = typeof strError === 'string' ? strError : "";
    // if (blnTemp === true && strTemp !== "") {
    //     setBlnShowError(blnTemp);
    //     sethtmlErrorLogin(<div className='invalid-feedback'
    //         dangerouslySetInnerHTML={{ __html: strTemp }}></div>);
    // }

    if (BlnSubmitted === true && (StrPassword === "" || StrEmail === "")) {
      sethtmlErrorLogin(<div className="text-danger validation-summary-errors"
        data-valmsg-summary="true">
        <ul>
          {StrEmail === "" && (<li>Tên đăng nhập không được để trống!</li>)}
          {StrPassword === "" && (<li>Mật khẩu không được để trống!</li>)}
        </ul>
      </div>);

      return;
    }

    const blnTemp = (BlnSubmitted === true && StrPassword !== "" && StrEmail !== ""
      && strError !== "");

    const strTemp = typeof strError === 'string' ? strError : "";
    if (blnTemp === true && strTemp !== "") {
      //setBlnShowError(blnTemp);
      sethtmlErrorLogin(<div className="text-danger validation-summary-errors"
        data-valmsg-summary="true">
        <ul>
          <li>{strTemp}</li>
        </ul>
      </div>);
    }

  }, [strError, BlnSubmitted, StrEmail, StrPassword]);

  const voidHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const navigate = useNavigate();

  const voidHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (StrEmail && StrPassword) {
      // const { from: strFrom } = location.state || { from: { pathname: '/' } };
      // dispatch<any>(voidDispatchLogin(StrEmail, StrPassword, strFrom));
      dispatch<any>(voidDispatchLogin(StrEmail, StrPassword, '/', navigate));
    }
  };

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg my-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  <a href="#!" className="link-dark text-decoration-none"
                    style={{ cursor: 'default' }}>Đăng nhập</a>
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={voidHandleSubmit}>

                  {
                    htmlErrorLogin
                  }

                  <div className="form-floating mb-3">
                    <input className="form-control" type="text"
                      placeholder="Nhập tên đăng nhập" data-val="true"
                      data-val-minlength="Tên đăng nhập phải từ 7 kí tự trở lên!" data-val-minlength-min={6}
                      data-val-required="Tên đăng nhập không được để trống!"
                      name="StrEmail"
                      onChange={voidHandleChange} />
                    <label>Tên đăng nhập</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" type="password"
                      placeholder="Password" data-val="true"
                      data-val-minlength="Mật khẩu phải từ 7 kí tự trở lên!"
                      data-val-minlength-min={6} data-val-required="Mật khẩu không được để trống!"
                      name="StrPassword"
                      onChange={voidHandleChange} />
                    <label>Mật khẩu</label>
                  </div>
                  {/* <div className="form-check mb-3 collapse">
                                        <input className="form-check-input" type="checkbox" data-val="true" data-val-required="The BlnRememberMe field is required." id="BlnRememberMe" name="BlnRememberMe" />
                                        <label className="form-check-label">Nhớ mật khẩu</label>
                                    </div> */}
                  <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                    {/* <a className="small collapse" href="/User/IARRegister">Đăng ký</a> */}
                    {/* <button className="btn btn-primary" type="submit">Đồng ý</button> */}
                    <button className="btn btn-primary">Đồng ý</button>
                  </div>
                  {/* <input name="__RequestVerificationToken" type="hidden" defaultValue="CfDJ8KTkcKeS6WNDmegeP-sDaLJI9Ov2pTPlbBEqYVQaCpCvSrSvZj8t_UDz9NnyqskNKrTi709gMTufLldsMh1LKFFZk5K2TU71uD82hm3N_qHDFo_eY9TbqVQ_3bY803RN2AMxE4dy19lZxcakM0P8PJE" /><input name="BlnRememberMe" type="hidden" defaultValue="false" /> */}
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
