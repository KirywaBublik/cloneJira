import React, {useState} from 'react';
import classes from "./MyTasks.module.scss";
import TasksSidebar from "@components/MyTasks/TasksSidebar/TasksSidebar.jsx";
import TaskItem from "@components/MyTasks/TaskItem/TaskItem.jsx";
import SearchInput from "@components/UI/SearchInput/SearchInput.jsx";

const MyTasks = () => {

    const [selectedTask, setSelectedTask] = useState(null);

    const tasks = [
        {
            id: 0,
            boardName: "Board 1",
            taskName: "Task 1",
            comment: "Comment 1",
            type: "default",
            active: false,
        },
        {
            id: 1,
            boardName: "Board 2",
            taskName: "Task 2",
            comment: "Comment 2",
            type: "default",
            active: false,
        },
        {
            id: 2,
            boardName: "Board 3",
            taskName: "Task 3",
            comment: "Comment 3",
            type: "default",
            active: false,
        },
        {
            id: 3,
            boardName: "Board 4",
            taskName: "Task 4",
            comment: "Comment 4",
            type: "default",
            active: false,
        },
        {
            id: 4,
            boardName: "Board 5",
            taskName: "Task 5",
            comment: "Comment 5",
            type: "default",
            active: false,
        },
        {
            id: 5,
            boardName: "Board 6",
            taskName: "Task 6",
            comment: "Comment 6",
            type: "default",
            active: false,
        },
        {
            id: 6,
            boardName: "Board 7",
            taskName: "Task 7",
            comment: "Comment 7",
            type: "default",
            active: false,
        },
        {
            id: 7,
            boardName: "Board 8",
            taskName: "Task 8",
            comment: "Comment 8",
            type: "default",
            active: false,
        },
        {
            id: 8,
            boardName: "Board 9",
            taskName: "Task 9",
            comment: "Comment 9",
            type: "default",
            active: false,
        },
        {
            id: 9,
            boardName: "Board 10",
            taskName: "Task 10",
            comment: "Comment 10",
            type: "default",
            active: false,
        },
    ];

    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const handleSearch = (query) => {
        const filtered = tasks.filter(task =>
            task.boardName.toLowerCase().includes(query.toLowerCase()) ||
            task.taskName.toLowerCase().includes(query.toLowerCase()) ||
            task.comment.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredTasks(filtered);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    return (
        <div className={classes.myTasks}>
            <div className={classes.myTasks__container}>
                <div className={classes.myTasks__inputContainer}>
                    <SearchInput onSearch={handleSearch}/>
                </div>
                <span className={classes.myTasks__title}>Мои задачи</span>
                <hr className={classes.myTasks__line}/>
                <div>
                    {tasks.length ? (
                        <div className={classes.myTasks__content}>
                            <div>
                                <TasksSidebar tasks={filteredTasks} onClick={handleTaskClick}
                                              activeTaskIndex={selectedTask ? filteredTasks.findIndex((task) => task.id === selectedTask.id) : -1}/>
                            </div>
                            <div>
                                {selectedTask !== null &&
                                    <TaskItem
                                        type={'big'}
                                        taskName={selectedTask.taskName}
                                        boardName={selectedTask.boardName}
                                        comment={selectedTask.comment}
                                    />
                                }
                            </div>
                        </div>
                    ) : (
                        <div className={classes.myTasks__emptyContainer}>
                            <span className={classes.myTasks__emptyText}>Вам не назначены задачи. Чтобы создать задачу нужно открыть доску и нажать на соответствующую кнопку</span>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTasks;