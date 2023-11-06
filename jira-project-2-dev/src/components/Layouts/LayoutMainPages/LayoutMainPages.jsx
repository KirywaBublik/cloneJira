import React from 'react';
import {Outlet} from "react-router";
import Header from "@components/Header/Header.jsx";
import classes from "./LayoutMainPages.module.scss"

const LayoutMainPages = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default LayoutMainPages;