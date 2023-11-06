import React from 'react';
import classes from "./WorkTable.module.scss";
import {taskConst} from "@pages/WorkTable/const.js";
import Sidebar from "@components/TaskBoard/Sidebar/Sidebar.jsx";

const WorkTable = () => {

    return (
        <div className={classes.workTable}>
            <div style={{marginBottom: "30px"}}>
                <Sidebar
                    tasks={[taskConst, taskConst]}
                />
            </div>
        </div>
    );
};

export default WorkTable;