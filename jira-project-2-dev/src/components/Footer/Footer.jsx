import React from 'react';
import classes from "./Footer.module.scss"
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./../../assets/img/logo.svg";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.contentFooter}>
                <Logo/>
                <Link className={classes.layoutText} to="/informReport">
                    Сообщить об ошибке
                </Link>
                <Link className={classes.layoutText} to="/politicConf">
                    Политика конфиденциальности
                </Link>
                <Link className={classes.layoutText} to="/reportNoLogin">
                    О разработчике
                </Link>
                <p className={classes.copyText}>
                    © 2023 FullTime
                </p>
            </div>
        </div>
    );
};

export default Footer;