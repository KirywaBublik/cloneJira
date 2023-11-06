import React from 'react';
import classes from "./TaskItem.module.scss";

const TaskItem = ({id, boardName, taskName, onClick, comment, type, active}) => {
    const isBigType = type === "big";
    const isActive = active && type === "default";

    const taskItemClass = [
        classes.taskItem,
        isBigType && classes.taskItem_big,
        isActive && classes.taskItem_active,
    ].filter(Boolean).join(' ');

    const titleClass = [
        classes.taskItem__title,
        isBigType && classes.taskItem__title_big,
    ].filter(Boolean).join(' ');

    const subtitleClass = [
        classes.taskItem__subtitle,
        isBigType && classes.taskItem__subtitle_big,
    ].filter(Boolean).join(' ');

    const handleItemClick = () => {
        if (type === "default") {
            onClick({id, boardName, taskName, onClick, comment, type, active});
        }
    };

    return (
        <div onClick={handleItemClick} className={taskItemClass}>
            <span className={subtitleClass}>{boardName}</span>
            <span className={titleClass}>{taskName}</span>
            {isBigType && <p className={classes.taskItem__text}>{comment}</p>}
        </div>
    );
};

export default TaskItem;
