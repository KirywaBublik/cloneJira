import React from 'react';
import {Outlet} from "react-router";
import Footer from "@components/Footer/Footer.jsx";

const LayoutGeneral = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutGeneral;