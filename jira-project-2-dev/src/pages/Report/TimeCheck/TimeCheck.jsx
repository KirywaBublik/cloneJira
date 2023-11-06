import React from 'react';
import classes from "./TimeCheck.module.scss"
import {timeCheck} from "@pages/Report/TimeCheck/constTimeCheck.js";

const TimeCheck = () => {
    const time = {
        color: "#FFF",
    }
    if (timeCheck.numOfPlan > timeCheck.numOfWasted) {
        timeCheck.widthFirstDiagram = 993
        timeCheck.widthSecondDiagram = Math.floor((timeCheck.numOfWasted / timeCheck.numOfPlan) * 100) * 10
        time.color = "#F00"
    } else if (timeCheck.numOfWasted > timeCheck.numOfPlan) {
        timeCheck.widthSecondDiagram = 993
        timeCheck.widthFirstDiagram = Math.floor((timeCheck.numOfPlan / timeCheck.numOfWasted) * 100) * 10
    } else {
        timeCheck.widthSecondDiagram = 993
        timeCheck.widthFirstDiagram = 993
        time.color = "#F00"
    }
    const diagramFirst = {
        width: timeCheck.widthFirstDiagram + "px",
    }
    const diagramSecond = {
        width: timeCheck.widthSecondDiagram + "px",
    }

    return (
        <div className={classes.timeCheckBlock}>
            <div className={classes.timeCheckContent}>
                <div className={classes.timeCheckContentBlock}>
                    <p className={classes.timeCheckText}>
                        Запланированное время
                    </p>
                    <div style={diagramFirst} className={classes.diagram}>
                        <p style={time} className={classes.time}>
                            {timeCheck.numOfPlan}ч
                        </p>
                    </div>
                </div>
                <div className={classes.timeCheckContentBlock}>
                    <p className={classes.timeCheckText}>
                        Фактически затраченное время
                    </p>
                    <div style={diagramSecond} className={classes.diagram}>
                        <p style={time} className={classes.time}>
                            {timeCheck.numOfWasted}ч
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeCheck;