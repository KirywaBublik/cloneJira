import React, {useState} from 'react';
import {ReactComponent as Tick} from "@assets/img/tickIcon.svg";
import {ReactComponent as Plus} from "@assets/img/plusIcon.svg";
import classes from "./AddButton.module.scss";

const AddButton = ({onClick}) => {
    const [isTickVisible, setIsTickVisible] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }

        setIsTickVisible(!isTickVisible);
    };

    return (
        <button onClick={handleClick} className={classes.button}>
            {isTickVisible ? <Tick/> : <Plus/>}
        </button>
    );
};

export default AddButton;
