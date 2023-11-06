import React from 'react';
import {ReactComponent as LogoError} from "@assets/img/LogoError.svg";
import classes from "./BackError.module.scss";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import NotFoundPage from "@pages/ErrorPages/NotFoundedPage/NotFoundPage.jsx";

const BackError = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.errorBlock}>
                    <Link to="/login">
                        <LogoError className={classes.logoClass}/>
                    </Link>
                    <div className={classes.errorContent}>
                        <Outlet>
                            <NotFoundPage/>
                        </Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BackError;