import React from 'react';
import {ReactComponent as Error404} from "@assets/img/Error404.svg";
import classes from "./NotFoundPage.module.scss"

const NotFoundPage = () => {
    return (
        <div>
            <Error404 className={classes.ErrorImg}/>
            <p className={classes.ErrorText}>
                Такой страницы не существует :(
            </p>
        </div>
    );
};

export default NotFoundPage;