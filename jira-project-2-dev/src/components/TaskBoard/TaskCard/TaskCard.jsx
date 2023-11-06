import React, {useState} from 'react';
import classes from "./TaskCard.module.scss";
import Avatar from "@components/Avatar/Avatar.jsx";
import {ReactComponent as PlusIcon} from "@assets/img/plusIcon.svg";
import {slicer} from "@utils/textFormatFunctions.js";
import {progressToColor} from "@utils/ColorFuncs.js";

const TaskCard = ({taskName, userAvatarUrl, userName, userSurname, progress, hasSubtasks}) => {
    const [modalUserVisibility, setModalUserVisibility] = useState(false);
    const [modalProgressVisibility, setModalProgressVisibility] = useState(false);

    const avatarClickHandle = () => {
        setModalUserVisibility(prevState => !prevState);
    }

    const progressClickHandle = () => {
        setModalProgressVisibility(prevState => !prevState);
    }
    return (
        <div className={classes.taskCard}>
            <div className={classes.taskCard__titleBlock}>
                <span className={classes.taskCard__title}>{slicer(taskName, 40)}</span>
                <div onClick={avatarClickHandle} className={classes.taskCard__avatarContainer}>
                    <Avatar style={{width: "33px", height: "33px"}}/>
                    {modalUserVisibility &&
                        <div className={classes.taskCard__modalUser}>
                            <span>{userName} {userSurname}</span>
                        </div>}
                </div>
            </div>
            {hasSubtasks &&
                <div className={classes.taskCard__plusIconContainer}>
                    <PlusIcon width={"10px"} height={"10px"} opacity={"0.7"}/>
                </div>}
            <div onClick={!hasSubtasks && progressClickHandle} className={classes.taskCard__progressBlock}
                 style={{backgroundColor: hasSubtasks ? "rgba(255, 255, 255, 0.50)" : progressToColor(progress)}}>
                {modalProgressVisibility &&
                    <div className={classes.taskCard__progressModal}>
                        <span style={{color: progressToColor(progress)}}
                              className={classes.taskCard__modalProgress}>{progress * 100}%</span>
                    </div>}
            </div>

        </div>
    );
};

export default TaskCard;