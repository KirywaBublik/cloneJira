import React from 'react';
import classes from "@pages/Report/Report.module.scss";
import {Link} from "react-router-dom";

const Card = ({title, text, images, linkTo}) => {
    return (
        <Link to={linkTo}>
            <div className={classes.cards}>
                <p className={classes.cardTitle}>
                    {title}
                </p>
                {images}
                <p className={classes.cardText}>
                    {text}
                </p>
            </div>
        </Link>
    );
};

export default Card;