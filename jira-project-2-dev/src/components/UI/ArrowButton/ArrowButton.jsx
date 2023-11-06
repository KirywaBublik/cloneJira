import React from 'react';
import {ReactComponent as Arrow} from "@assets/img/arrow.svg";
import classes from "./ArrowButton.module.scss";

const ArrowButton = ({pos, onClick, disabled}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classes.arrowButton}>
            <Arrow style={{transform: pos === 'right' ? 'rotate(180deg)' : 'none'}}/>
        </button>
    );
};

export default ArrowButton;