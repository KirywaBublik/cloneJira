import React from 'react';
import classes from "./TasksSidebar.module.scss";
import TaskItem from "../TaskItem/TaskItem.jsx";

const TasksSidebar = ({tasks, onClick, activeTaskIndex}) => {
    return (
        <div className={classes.tasksSidebar}>
            <div className={classes.tasksSidebar__scrollable}>
                {tasks.map((task, index) => (
                    <div className={classes.tasksSidebar__item}>
                        <TaskItem
                            key={index}
                            id={task.id}
                            boardName={task.boardName}
                            taskName={task.taskName}
                            comment={task.comment}
                            type={task.type}
                            active={activeTaskIndex === index ? !task.active : task.active}
                            onClick={onClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksSidebar;
