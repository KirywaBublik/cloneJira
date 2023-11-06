import React, {useState} from 'react';
import classes from "./RightSide.module.scss";
import {profileButton} from "@components/ProfileSides/RightSide/constRightSide.js";
import Security from "@components/ProfileSides/RightSide/Security/Security.jsx";
import ChangeProfile from "@components/ProfileSides/RightSide/ChangeProfile/ChangeProfile.jsx";

const RightSide = () => {
        const [profileState, setProfileState] = useState(true)

        const changeState = () => {
            setProfileState(!profileState)
        }

        return (
            <div className={classes.profileLabelBlock}>
                <div className={classes.buttonBlockStyle}>
                    <button
                        style={profileState ? profileButton : {}}
                        className={classes.btnStyles}
                        onClick={changeState}>
                        Редактирование
                    </button>
                    <button
                        style={!profileState ? profileButton : {}}
                        className={classes.btnStyles}
                        onClick={changeState}
                    >
                        Безопасность
                    </button>
                </div>
                {profileState
                    ?
                    <ChangeProfile/>
                    :
                    <Security/>
                }
            </div>
        );
    }
;

export default RightSide;