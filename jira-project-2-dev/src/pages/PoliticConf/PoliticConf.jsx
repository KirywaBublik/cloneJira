import React from 'react';
import classes from "./PoliticConf.module.scss"
import {ReactComponent as Logo} from "@assets/img/logo.svg";
import {ReactComponent as NotificationIcon} from "@assets/img/notification-icon.svg";
import {ReactComponent as ExitIcon} from "@assets/img/exit-icon.svg";
import {ReactComponent as ButtonBack} from "@assets/img/buttonBack.svg";
import Avatar from "@components/Avatar/Avatar.jsx";
import {Link, useNavigate} from "react-router-dom";

const PoliticConf = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.politicBlock}>
                        <Logo/>
                        <div className={classes.headerIcon}>
                            <NotificationIcon/>
                            <Link to={"/work/profile"}><Avatar/></Link>
                            <ExitIcon/>
                        </div>
                    </div>
                    <p className={classes.timeCheckTitle}>
                        Политика конфиденциальности
                    </p>
                    <hr className={classes.timeCheckLine}/>
                    <div className={classes.grayBlock}>
                        <Link onClick={handleClick} to="" className={classes.buttonBack}>
                            <ButtonBack/>
                        </Link>
                        <div className={classes.politicBlockText}>
                            <p className={classes.politicText}>
                                Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering, asa till
                                planade.
                                Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon
                                krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i divobel bas.
                                Fagt
                                nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering, asa till
                                planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes.Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes. Lörem ipsum antide vaska fanyll. Managon krogen anana. Disk transfiering,
                                asa
                                till planade. Tetrassade gigaledes i divobel bas. Fagt nes. Lörem ipsum antide vaska
                                fanyll.
                                Managon krogen anana. Disk transfiering, asa till planade. Tetrassade gigaledes i
                                divobel
                                bas. Fagt nes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliticConf;