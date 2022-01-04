import React from 'react'
import {Outlet} from "react-router-dom";
import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainLayout
