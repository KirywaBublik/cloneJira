import React from "react";
import classes from "./Form.module.scss"
import {ReactComponent as LogoAuth} from "./../../assets/img/logoAuth.svg"
import Authorization from "@pages/Authorization/Authorization.jsx";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const Form = () => {
    return (
        <div className={classes.block}>
            <div className={classes.authBack}>
                <div className={classes.authBlock}>
                    <Link to="/login">
                        <LogoAuth
                            className={classes.authLogo}
                        />
                    </Link>
                    <div className={classes.authText}>
                        <Outlet>
                            <Authorization/>
                        </Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;