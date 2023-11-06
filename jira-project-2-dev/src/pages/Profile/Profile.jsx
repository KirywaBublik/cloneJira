import React from 'react';
import classes from "./Profile.module.scss";
import LeftSide from "@components/ProfileSides/LeftSide/LeftSide.jsx";
import RightSide from "@components/ProfileSides/RightSide/RightSide.jsx";

const Profile = () => {

    return (
        <div className={classes.profileBlock}>
            <p className={classes.profileTitle}>
                Профиль
            </p>
            <hr className={classes.profileLine}/>
            <div className={classes.generalProfileBlock}>
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
        ;
};

export default Profile;