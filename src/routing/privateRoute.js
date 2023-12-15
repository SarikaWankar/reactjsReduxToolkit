import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const PrivateOutlet = () => {
    const auth = useSelector((state) => state.auth.loginData);

    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
};

export default PrivateOutlet;
