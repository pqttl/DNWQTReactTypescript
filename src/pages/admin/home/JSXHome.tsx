import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UrlConstants } from '../../../constants/urlConstants';

export const JSXHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/" + UrlConstants.STR_ORDER_PAGE_INDEX);
    // setTimeout(() => {
    //   navigate("/" + UrlConstants.STR_ORDER_PAGE_INDEX);
    // }, 3000);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>Đây là trang chủ</div>
  )
}
