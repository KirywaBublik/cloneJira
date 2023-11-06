import React, {useState} from 'react';
import TaskCard from "@components/TaskBoard/TaskCard/TaskCard.jsx";
import classes from "./SidebarTask.module.scss";
import {ReactComponent as Arrow} from "@assets/img/arrow2.svg";
import {slicer} from "@utils/textFormatFunctions.js";
import {progressToColor} from "@utils/ColorFuncs.js";

const SidebarTask = ({taskName, userName, userAvatarUrl, userSurname, progress, subtasks}) => {
    const [subtasksVisibility, setSubtasksVisibility] = useState(false);

    const arrowClickHandle = () => {
        setSubtasksVisibility(prevState => !prevState);
    }
    return (
        <div>
            <div className={classes.sidebarTask__taskCardContainer}>
                <TaskCard
                    taskName={taskName}
                    userName={userName}
                    userAvatarUrl={userAvatarUrl}
                    userSurname={userSurname}
                    progress={progress}
                    hasSubtasks={!!subtasks.length}
                />
                {!!subtasks.length && (
                    <div
                        onClick={arrowClickHandle}
                        className={classes.sidebarTask__arrowContainer}
                        style={{transform: subtasksVisibility ? "rotate(180deg)" : "rotate(0)"}}
                    >
                        <Arrow/>
                    </div>
                )}
                {!!subtasks.length && (
                    <div
                        className={classes.sidebarTask__subtasksBase}
                        style={{borderRadius: subtasksVisibility ? "0" : "0 0 15px 15px"}}>
                    </div>
                )}
            </div>
            {!!subtasks.length && (
                <div className={classes.sidebarTask__subtasksContainer}
                     style={{height: subtasksVisibility ? `${77 * subtasks.length + 14}px` : "0px"}}>
                    <div className={classes.sidebarTask__subtasksBlock}>
                        {subtasks.map((subtask) => (
                            <div key={subtask.id} className={classes.sidebarTask__subtaskBlock}>
                                <span>{slicer(subtask.taskName, 60)}</span>
                                <div
                                    className={classes.sidebarTask__progressBlock}
                                    style={{backgroundColor: progressToColor(subtask.progress)}}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
};

export default SidebarTask;