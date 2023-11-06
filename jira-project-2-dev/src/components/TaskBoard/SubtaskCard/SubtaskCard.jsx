import React, {useState} from 'react';
import classes from "./SubtaskCard.module.scss";
import Avatar from "@components/Avatar/Avatar.jsx";
import {slicer} from "@utils/textFormatFunctions.js";
import {progressToColor} from "@utils/ColorFuncs.js";

const SubtaskCard = ({taskName, subtaskName, userAvatarUrl, userName, userSurname, progress}) => {

    const [userModalVisibility, setUserModalVisibility] = useState(false);

    const avatarClickHandle = () => {
        setUserModalVisibility(prevState => !prevState);
    }


    return (
        <div className={classes.subtaskCard}>
            <div className={classes.subtaskCard__titleBlock}>
                <span className={classes.subtaskCard__title}>{slicer(taskName, 20)}</span>
                <div onClick={avatarClickHandle} className={classes.subtaskCard__avatarContainer}>
                    <Avatar style={{width: "33px", height: "33px"}}/>
                    {userModalVisibility &&
                        <div className={classes.subtaskCard__userModal}>
                            <span>{userName} {userSurname}</span>
                        </div>
                    }
                </div>
            </div>
            <div className={classes.subtaskCard__contentBlock}>
                <span className={classes.subtaskCard__subtask}>{slicer(subtaskName, 60)}</span>
                <div
                    className={classes.subtaskCard__progressBlock}
                    style={{backgroundColor: progressToColor(progress)}}
                ></div>
            </div>
        </div>
    );
};

export default SubtaskCard;