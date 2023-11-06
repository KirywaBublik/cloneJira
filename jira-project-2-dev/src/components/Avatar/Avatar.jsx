import React from 'react';
import classes from "./Avatar.module.scss";
import defaultIcon from "@assets/img/defaultIconProfile.svg"

const Avatar = ({src, ...props}) => {
    return (
        <div className={classes.avatarContainer} {...props}>
            <img className={classes.avatarImg} src={src || defaultIcon} alt={"avatar icon"}/>
        </div>
    );
};

export default Avatar;
