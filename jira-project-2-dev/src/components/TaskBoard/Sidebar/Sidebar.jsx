import React from 'react';
import classes from "./Sidebar.module.scss";
import SidebarTask from "@components/TaskBoard/SidebarTask/SidebarTask.jsx";
import {ReactComponent as ExitIcon} from "@assets/img/plusIcon.svg";

const Sidebar = ({tasks}) => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__exitIconContainer}>
                <ExitIcon width={"20px"} height={"20px"}/>
            </div>
            <div className={classes.sidebar__titleBlock}>
                <span className={classes.sidebar__title}>Глобальные задачи</span>
                <hr className={classes.sidebar__underTitleLine}/>
            </div>
            <div className={classes.sidebar__tasksBlock}>
                {tasks.map((task) => (
                    <div className={classes.sidebar__taskBlock}>
                        <SidebarTask
                            key={task.id}
                            taskName={task.taskName}
                            progress={task.progress}
                            userAvatarUrl={task.userAvatarUrl}
                            userName={task.userName}
                            userSurname={task.userSurname}
                            subtasks={task.subtasks}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;