import React from 'react';
import classes from "./Report.module.scss"
import Card from "@components/UI/Cards/Card.jsx";
import {ReactComponent as Diagram} from "@assets/img/diagramm.svg";
import {ReactComponent as ReportErrors} from "@assets/img/reportErrors.svg";
import {ReactComponent as Time} from "@assets/img/neTime.svg";

const Report = () => {
    return (
        <div className={classes.reportBlock}>
            <p className={classes.reportTitle}>
                Отчеты
            </p>
            <hr className={classes.reportLine}/>
            <div className={classes.reportBlockContent}>
                <div className={classes.reportBlockContentForBackground}>
                    <Card
                        linkTo={"efficiency"}
                        title={"Эффективность"}
                        images={<Diagram/>}
                        text={"Узнайте, сколько задач дошло до релиза"}
                    />
                    <Card
                        linkTo={"timeCheck"}
                        title={"Выработка часов"}
                        images={<Time/>}
                        text={"Сравните запланированное время с затраченным"}
                    />
                    <Card
                        linkTo={"errorsUser"}
                        title={"Ошибки исполнителя"}
                        images={<ReportErrors/>}
                        text={" Посмотрите, сколько задач вернулось на исправление"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Report;