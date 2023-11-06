import React from 'react';
import {ReactComponent as PurpleLine} from "@assets/img/purpleLine.svg";
import {ReactComponent as WhiteLine} from "@assets/img/whiteLine.svg";
import classes from "./SelectedErrorUser.module.scss"
import {Link} from "react-router-dom";
import {selectedErrorsUser} from "@pages/Report/ErrorsUser/SelectedUserError/constSelectedErrorsUser.js";

const SelectedErrorsUser = () => {

    let percentMassive = []
    for (let i = 1; i <= 100; i++) {
        const percentMass = selectedErrorsUser.dashArray * (i / 100)
        percentMassive.push(percentMass)
    }

    const progress = {
        strokeDasharray: selectedErrorsUser.dashArray,
        strokeDashoffset: selectedErrorsUser.dashArray - percentMassive[selectedErrorsUser.percentBottomNumber - 1],
        transform: `rotate(${selectedErrorsUser.dynamicDegMin}deg)`,
    }

    let colorTop = selectedErrorsUser.percentBottomNumber >= selectedErrorsUser.percentTopNumber ? "red" : "none"

    const percentNumberStyle = {
        color: colorTop
    }

    return (
        <div className={classes.errorUserBlock}>
            <div>
                <PurpleLine className={classes.purpleLine}/>
                <p style={percentNumberStyle} className={classes.percentTopNumber}>
                    {selectedErrorsUser.percentTopNumber}%
                </p>
                <p className={classes.percentTopText}>
                    Столько Вы выполнили задач без ошибок за рассматриваемый временной промежуток
                </p>
            </div>
            <div>
                <svg width="438" height="438">
                    <circle r="190" cx="219" cy="219" className={classes.track}></circle>
                    <circle r="190" cx="219" cy="219" style={progress} className={classes.progress}></circle>
                </svg>
            </div>
            <div>
                <p style={percentNumberStyle} className={classes.percentBottomNumber}>
                    {selectedErrorsUser.percentBottomNumber}%
                </p>
                <p className={classes.percentBottomText}>
                    Столько ошибок Вы совершили
                    во время работы за рассматриваемый период
                </p>
                <WhiteLine className={classes.whiteLine}/>
            </div>
            <Link to="allUserErrors">
                Ошибки всех пользователей
            </Link>
        </div>
    );
};

export default SelectedErrorsUser;