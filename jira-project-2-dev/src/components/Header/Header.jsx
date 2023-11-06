import React from 'react';
import classes from "./Header.module.scss";
import {ReactComponent as Logo} from "@assets/img/logo.svg";
import {ReactComponent as NotificationIcon} from "@assets/img/notification-icon.svg";
import {ReactComponent as ExitIcon} from "@assets/img/exit-icon.svg";
import {Link} from "react-router-dom";
import Avatar from "@components/Avatar/Avatar.jsx";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header__leftBlock}>
                    <div className={classes.header__logoBlock}>
                        <Logo/>
                    </div>
                    <nav className={classes.header__navigationBlock}>
                        <ul>
                            <li><Link to={"/work/work-table"}>Рабочий стол</Link></li>
                            <li><Link to={"/work/all-boards"}>Все Доски</Link></li>
                            <li><Link to={"/work/my-tasks"}>Мои Задачи</Link></li>
                            <li><Link to={"/work/report"}>Отчёт</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.header__iconBlock}>
                    <NotificationIcon/>
                    <Link to={"/work/profile"}><Avatar/></Link>
                    <ExitIcon/>
                </div>
            </div>
        </header>
    );
};

export default Header;
