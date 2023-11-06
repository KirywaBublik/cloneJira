import React, {useState} from 'react';
import classes from "./Calendar.module.scss";
import {ReactComponent as VectorUp} from "@assets/img/vectodUp.svg";
import {ReactComponent as VectorDown} from "@assets/img/vectorDown.svg";

const Calendar = () => {
    const [stateCalendar, setStateCalendar] = useState(false)
    return (
        <>
            <div className={classes.childrenGeneralBlock} onClick={() => setStateCalendar(!stateCalendar)}>
                <span className={classes.spanChildren}>
                    {stateCalendar ? <VectorUp/> :<VectorDown/> }
                </span>
                Выбрать временной промежуток
            </div>
        </>
  );
};

export default Calendar;