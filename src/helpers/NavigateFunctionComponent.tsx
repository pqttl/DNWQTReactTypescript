import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SetupInterceptors } from './tsApi';

export const NavigateFunctionComponent = () => {
    const navigate = useNavigate();
    const [ran, setRan] = useState(false);


    // useEffect(()=>{
    //   if (!ran) {
    //     SetupInterceptors(navigate);
    //     setRan(true);
    //   }
    // },[])
    if (!ran) {
        SetupInterceptors(navigate);
        setRan(true);
    }
    return (
        <Fragment></Fragment>
    )
}
