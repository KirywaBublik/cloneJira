import React from 'react';
import {ReactComponent as Error505} from "@assets/img/ErrorBack.svg";
import classes from "./ErrorBack.module.scss"

const ErrorBack = () => {
    return (
        <div>
            <div>
                <Error505/>
            </div>
            <div className={classes.ErrorBlock}>
                <p className={classes.ErrorText}>
                    Такой страницы не существует :(
                </p>
            </div>
        </div>
    );
};

export default ErrorBack;