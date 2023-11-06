import React from 'react';
import classes from "./LeftSide.module.scss";
import {ReactComponent as Ava} from "./../../../assets/img/defaultIconProfile.svg";


const LeftSide = () => {
    return (
        <div className={classes.profileLabelBlock}>
            <Ava style={{marginTop: "25px"}}/>
            <p className={classes.profileName}>
                Иван Иванов
            </p>
            <hr className={classes.profileNameLine}/>
            <div className={classes.generalBlock}>
                <p className={classes.generalNameStyle}>
                    Должность
                    <span className={classes.generalNameSpan}>
                            Backend-разработчик
                        </span>
                </p>
                <p className={classes.generalNameStyle}>
                    Почта
                    <span className={classes.generalNameSpanTwo}>
                            ivan_ivanov@mail.ru
                        </span>
                </p>
                <p className={classes.generalNameStyle}>
                    Полное имя
                    <span className={classes.generalNameSpanThree}>
                            Иван Иванов
                        </span>
                </p>
            </div>
        </div>
    );
};

export default LeftSide;