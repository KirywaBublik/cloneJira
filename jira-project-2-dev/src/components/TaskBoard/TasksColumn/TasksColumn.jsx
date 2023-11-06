import React, {useState} from 'react';
import classes from "./TasksColumn.module.scss";
import TaskCard from "@components/TaskBoard/TaskCard/TaskCard.jsx";
import {calculateProgress} from "@utils/timeUtils.js";
import SubtaskCard from "@components/TaskBoard/SubtaskCard/SubtaskCard.jsx";
import {ReactComponent as DeleteColumnIcon} from "@assets/img/deleteColumnIcon.svg";

const TasksColumn = ({title, tasks, type}) => {

    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);

    const handleBucketClick = () => {
        setDeleteModalVisibility(prevState => !prevState);
    }
    return (
        <div className={classes.tasksColumn}>
            <div className={classes.tasksColumn__titleBlock}>
                <span className={classes.tasksColumn__title}>{title}</span>
                {type === "format" && (
                    <div className={classes.tasksColumn__deleteIconContainer}>
                        <DeleteColumnIcon onClick={handleBucketClick} className={classes.tasksColumn__deleteIcon}/>
                        {deleteModalVisibility &&
                            <div className={classes.modalColumnDelete}>
                                <span className={classes.modalColumnDelete__title}>Уверены?</span>
                                <div className={classes.modalColumnDelete__contentBlock}>
                                    <span className={classes.modalColumnDelete__button}>Да</span>
                                    <span className={classes.modalColumnDelete__button}
                                          onClick={handleBucketClick}>Нет</span>
                                </div>
                            </div>
                        }

                    </div>
                )}
            </div>
            <div className={classes.tasksColumn__tasksBlock}>
                {tasks.map((task) => (
                    <div className={classes.tasksColumn__taskContainer}>
                        <TaskCard
                            index={task.id}
                            taskName={task.title}
                            progress={calculateProgress(task.estimatedTime, task.spentTime)}
                            hasSubtasks={task.subtasks.length !== 0}
                            userName={task.createdByUser.name}
                            userSurname={task.createdByUser.surname}
                            userAvatarUrl={task.createdByUser.avatar}
                        />
                        {task.subtasks.length !== 0 &&
                            (task.subtasks.map((subtask) => (
                                <div className={classes.tasksColumn__subtaskContainer}>
                                    <SubtaskCard
                                        index={subtask.id}
                                        taskName={task.title}
                                        subtaskName={subtask.title}
                                        progress={calculateProgress(subtask.estimatedTime, subtask.spentTime)}
                                        userName={subtask.createdByUser.name}
                                        userSurname={subtask.createdByUser.surname}
                                        userAvatarUrl={subtask.createdByUser.avatar}
                                    />
                                </div>
                            )))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksColumn;