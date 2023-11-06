import React from 'react';
import classes from "./EfficiencyUser.module.scss"
import {ReactComponent as BackButton} from "@assets/img/buttonBack.svg";
import {Link, useNavigate} from "react-router-dom";

const EfficiencyUser = () => {
    const navigate = useNavigate()
    return (
        <>
            <Link onClick={() => navigate(-1)} to="">
                <BackButton className={classes.textEffectBtnBack}/>
            </Link>
            <p className={classes.textEffect}>
                Вы не являетесь администратором ни одной доски
            </p>
            <Link to="allUserEfficiency">
                Эффективность
            </Link>
        </>
    );
};

export default EfficiencyUser;