import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { voidDispatchLogin, typeLogout } from '../../storeRedux/account/actions';
import { useDispatch, useSelector } from 'react-redux';

import { typeAppState } from '../../storeRedux/indexExport';
//import { typeAppState } from '../../storeRedux';
import { useLocation } from 'react-router';

export const JSXLoginDangNhap = () => {

  //useState là như khai báo biến toàn cục trong 1 file c#
  const [MInputs, setInputs] = useState({
    StrEmail: '',
    StrPassword: '',
  });
  const [BlnSubmitted, setSubmitted] = useState(false);
  const [BlnShowError, setBlnShowError] = useState(false);

  //useSelector để lấy giá trị state A ở file khác, nếu A bị thay đổi thì nó sẽ tự re-render lại
  //const blnLoading = useSelector<typeAppState>((state) => state.account.blnLoading);
  const strError = useSelector<typeAppState>((state) => state.iStateAccountGlobal.strError);

  const { StrEmail, StrPassword } = MInputs;

  //useDispatch để gọi hàm từ action
  const dispatch = useDispatch();
  const location = useLocation();

  //useEffect có tham số thứ 2 là X
  //Nếu X là [] thì sẽ chỉ chạy hàm một lần sau khi componentDidUpdate(hay gọi là render component)
  //Nếu X là [parameterY] thì sẽ chạy khi componentDidUpdate và bất cứ khi nào Y thay đổi
  useEffect(() => {
    dispatch<any>(typeLogout());
  }, [dispatch]);

  
  const [htmlErrorLogin, sethtmlErrorLogin] = useState(<div/>);
  useEffect(() => {
    sethtmlErrorLogin(<div/>);
    const blnTemp = (BlnSubmitted === true && StrPassword !== "" && StrEmail !== "" && strError !== "");

    const strTemp = typeof strError === 'string' ? strError : "";
    if (blnTemp === true && strTemp !== "") {
      setBlnShowError(blnTemp);
      sethtmlErrorLogin(<div className='invalid-feedback' dangerouslySetInnerHTML={{ __html: strTemp }}></div>);
    }
  }, [strError]);

  const voidHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const voidHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (StrEmail && StrPassword) {
      // const { from: strFrom } = location.state || { from: { pathname: '/' } };
      // dispatch<any>(voidDispatchLogin(StrEmail, StrPassword, strFrom));
      //dispatch<any>(voidDispatchLogin(StrEmail, StrPassword, '/'));
    }
  };

  return (


    //     <form className="modal-content animate" action="/action_page.php" method="post">
    //   <div className="imgcontainer">
    //     <span className="close" title="Close Modal">×</span>
    //     <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    //   </div>
    //   <div className="container">
    //     <label htmlFor="uname"><b>Username</b></label>
    //     <input type="text" placeholder="Enter Username" name="uname" required />
    //     <label htmlFor="psw"><b>Password</b></label>
    //     <input type="password" placeholder="Enter Password" name="psw" required />
    //     <button type="submit">Login</button>
    //     <label>
    //       <input type="checkbox" name="remember" /> Remember me
    //     </label>
    //   </div>
    //   <div className="container" style={{backgroundColor: '#f1f1f1'}}>
    //     <button type="button" className="cancelbtn">Cancel</button>
    //     <span className="psw">Forgot <a href="#">password?</a></span>
    //   </div>
    // </form>




    <div className='container'>
      {/* Outer Row */}
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              {/* Nested Row within Card Body */}
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-login-image' />
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                    </div>

                    <form className='user' onSubmit={voidHandleSubmit}>
                      <div className='form-group'>
                        <input
                          type='text'
                          className={
                            'form-control form-control-user ' +
                            ((BlnSubmitted && !StrEmail) || BlnShowError === true ? 'is-invalid' : '')
                          }
                          id='exampleInputEmail'
                          aria-describedby='emailHelp'
                          onChange={voidHandleChange}
                          placeholder='Enter Email Address...'
                          name='StrEmail'
                        />
                        {BlnSubmitted && !StrEmail && (
                          <div className='invalid-feedback'>
                            Email is required
                          </div>
                        )}
                      </div>

                      <div className='form-group'>
                        <input
                          type='password'
                          className={
                            'form-control form-control-user ' +
                            ((BlnSubmitted && !StrPassword) || BlnShowError === true ? 'is-invalid' : '')
                          }
                          id='exampleInputPassword'
                          placeholder='Password'
                          onChange={voidHandleChange}
                          name='StrPassword'
                        />

                        {BlnSubmitted && !StrPassword && (
                          <div className='invalid-feedback'>
                            Password is required
                          </div>
                        )}

                        {
                          htmlErrorLogin
                        }

                      </div>

                      {/* <div className='form-group'>

                        {BlnSubmitted && StrPassword && StrEmail && strError && (
                          <div className='invalid-feedback'>
                            strError
                          </div>
                        )}

                      </div> */}

                      <div className='form-group'>
                        <button className='btn btn-primary'>

                          Login
                        </button>


                      </div>
                    </form>

                    <hr />
                    <div className='text-center'>
                      <a className='small' href='forgot-password.html'>
                        Forgot Password?
                      </a>
                    </div>
                    <div className='text-center'>
                      <a className='small' href='register.html'>
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
