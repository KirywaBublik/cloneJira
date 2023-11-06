import React, {useState} from 'react';
import classes from "./Security.module.scss";
import Button from "@components/UI/Button/Button.jsx";
import {completeSession, constSessions} from "@components/ProfileSides/RightSide/constRightSide.js";
import {useSelectedSessions} from "@hooks/useSelectedSession.js";

const Security = () => {

    const [sessions, setSessions] = useState(constSessions);

    const [selectedSessions, chooseSession, deleteSession] = useSelectedSessions(sessions, setSessions);

    return (
        <div>
            <p className={classes.securityTitle}>
                Текущий сеанс
            </p>
            <div className={classes.blockSession}>
                <div className={classes.sessionBlock}>
                    Браузер
                    <p className={classes.spanStyleSec}>
                        Chrome
                    </p>
                </div>
                <div className={classes.sessionBlock}>
                    Местоположение
                    <p className={classes.spanStyleSec}>
                        Россия, г. Санкт-Петербург
                    </p>
                </div>
                <div className={classes.sessionBlock}>
                    IP-адрес
                    <p className={classes.spanStyleSec}>
                        255.255.255.255
                    </p>
                </div>
            </div>
            <p className={classes.securityTitle}>
                Другие сеансы
            </p>
            <div className={classes.blockAnotherSession}>
                {
                    sessions.map(item => (
                        <div
                            onClick={() => chooseSession(item.id)}
                            className={classes.blockSession}
                            style={{
                                background: selectedSessions.includes(item.id) ? "rgba(255, 255, 255, 0.20" : "transparent",
                            }}
                            key={item.id}>
                            <div className={classes.sessionBlock}>
                                Браузер
                                <p className={classes.spanStyleSec}>
                                    {item.browser}
                                </p>
                            </div>
                            <div className={classes.sessionBlock}>
                                Местоположение
                                <p className={classes.spanStyleSec}>
                                    {item.sessionLocation}
                                </p>
                            </div>
                            <div className={classes.sessionBlock}>
                                IP-адрес
                                <p className={classes.spanStyleSec}>
                                    {item.ip}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Button
                onClick={deleteSession}
                styles={completeSession}>
                Завершить
            </Button>
        </div>
    );
};

export default Security;