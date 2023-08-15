import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UrlConstants } from '../../constants/urlConstants';
import { typeLogout } from '../../storeRedux/account/actions';
import { typeAppState } from '../../storeRedux/indexExport';
//import { JSXHome } from './indexExport';


const JSXTheUl = (props: any) => {
  return (
    <Fragment>
      {
        (props.BlnShow
          ? <ul className={"dropdown-menu dropdown-menu-end show"}
            aria-labelledby="navbarDropdown" data-bs-popper="none">
            {props.HtmlAllTheLi}
          </ul>
          : <ul className={"dropdown-menu dropdown-menu-end"}
            aria-labelledby="navbarDropdown" >
            {props.HtmlAllTheLi}
          </ul>)
      }
    </Fragment>
  );
}

export const JSXAdmin = () => {
  const [BlnShowMenu, setBlnShowMenu] = useState(true);
  // const [BlnShowMenuThongKe, setBlnShowMenuThongKe] = useState(false);
  const [BlnShowMenuIconPeople, setBlnShowMenuIconPeople] = useState(false);
  const dispatch = useDispatch();

  const strUsername = useSelector<typeAppState>((state) => state.iStateAccountGlobal.strUsername);

  const navigate = useNavigate();

  return (
    // <Fragment>
    //   <div>{'JSXAdmin xin chào ' + strUsername}
    //     <Link
    //       className=''
    //       to='/'
    //     >Trang chủ</Link>
    //     <Link
    //       className=''
    //       to='/order'
    //     >Hóa đơn</Link>
    //     {/* <Link
    //       className=''
    //       to='/login' onClick={() => dispatch(typeLogout())}
    //     >Logout Kieu Nay Loi</Link>
    //     <Link
    //       className=''
    //       to='/login'
    //     >Logout Ko OnClick Loi</Link> */}
    //     <a href='#' onClick={() => dispatch(typeLogout())}>Logout Dung The A</a>
    //   </div>

    //   <Outlet />

    // </Fragment>

    <Fragment>




      <div className={"sb-nav-fixed " + (BlnShowMenu ? " " : " sb-sidenav-toggled ")}>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand*/}
          <Link className="navbar-brand ps-3" to='/'>Trang chủ</Link>
          {/* Sidebar Toggle*/}
          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            onClick={() => {
              setBlnShowMenu(!BlnShowMenu);
              setBlnShowMenuIconPeople(false);
            }}>
            <svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>{/* <i class="fas fa-bars"></i> Font Awesome fontawesome.com */}
          </button>
          <div className="d-none d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0">
          </div>
          {/* Navbar Search*/}
          {/* Navbar*/}
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a className={"nav-link dropdown-toggle " + (BlnShowMenuIconPeople ? "show" : " ")} id="navbarDropdown"
                href="#!" role="button" data-bs-toggle="dropdown"
                aria-expanded={BlnShowMenuIconPeople ? "true" : "false"}
                onClick={() => setBlnShowMenuIconPeople(!BlnShowMenuIconPeople)}>
                <svg className="svg-inline--fa fa-user fa-fw" aria-hidden="true"
                  focusable="false" data-prefix="fas" data-icon="user" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                  data-fa-i2svg>
                  <path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>{/* <i class="fas fa-user fa-fw"></i> Font Awesome fontawesome.com */}</a>
              {/* <ul className={"dropdown-menu dropdown-menu-end" + (BlnShowMenuIconPeople ? "show" : " ")}
                aria-labelledby="navbarDropdown" >
                <li>
                  <a className="dropdown-item" href="/Login">Đăng xuất</a>
                </li>
              </ul> */}

              <JSXTheUl BlnShow={BlnShowMenuIconPeople}
                HtmlAllTheLi={
                  <li>
                    <a className="dropdown-item" href='#!' onClick={() => dispatch(typeLogout())}>Đăng xuất</a>
                  </li>
                }></JSXTheUl>

            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">

                  <div className="sb-sidenav-menu-heading">Quản trị hệ thống</div>

                  {/* <a className="nav-link" href="#!">
                    <div className="sb-nav-link-icon">
                      <svg className="svg-inline--fa fa-table" aria-hidden="true" focusable="false"
                        data-prefix="fas" data-icon="table" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                        <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" />
                      </svg>
                    </div>
                    Quản lý Snippet
                  </a> */}

                  <a className="nav-link"
                    href='#!'
                    //  to={"/" + UrlConstants.STR_ORDER_PAGE_INDEX + ""}
                    onClick={() => {
                      setBlnShowMenu(true);
                      setBlnShowMenuIconPeople(false);
                      navigate("/" + UrlConstants.STR_ORDER_PAGE_INDEX);
                    }}>
                    <div className="sb-nav-link-icon">
                      <svg className="svg-inline--fa fa-table" aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="table" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                        <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" /></svg>{/* <i class="fas fa-table"></i> Font Awesome fontawesome.com */}</div>
                    Quản lý đơn hàng
                  </a>

                  {/* <div className="sb-sidenav-menu-heading">Biểu đồ</div>

                  <a className={"nav-link " + (BlnShowMenuThongKe ? "" : " collapsed ")}
                    href="#!" data-bs-toggle="collapse" data-bs-target="#collapseLayouts"
                    aria-expanded={BlnShowMenuThongKe ? "true" : "false"} aria-controls="collapseLayouts"
                    onClick={() => setBlnShowMenuThongKe(!BlnShowMenuThongKe)}>
                    <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-chart-area"
                      aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-area"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                      <path fill="currentColor" d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM128 320V236C128 228.3 130.8 220.8 135.9 214.1L215.3 124.2C228.3 109.4 251.4 109.7 263.1 124.8L303.2 171.8C312.2 182.7 328.6 183.4 338.6 173.4L359.6 152.4C372.7 139.3 394.4 140.1 406.5 154.2L472.3 231C477.3 236.8 480 244.2 480 251.8V320C480 337.7 465.7 352 448 352H159.1C142.3 352 127.1 337.7 127.1 320L128 320z" />
                    </svg>
                    </div>
                    Thống kê
                    <div className="sb-sidenav-collapse-arrow"><svg className="svg-inline--fa fa-angle-down"
                      aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg>
                      <path fill="currentColor" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                    </svg>
                    </div>
                  </a>

                  <div className={"collapse" + (BlnShowMenuThongKe ? " show " : "")} id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="#!">Theo số lượng</a>
                    </nav>
                  </div> */}

                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Xin chào:</div>
                <div>{strUsername as string}</div>
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">

                <Outlet />

              </div>
            </main>
            <footer className="py-4 bg-light mt-auto collapse">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">Copyright © DrugNorthQT 2022</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
