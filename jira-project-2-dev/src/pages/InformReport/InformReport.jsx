import React from 'react';
import classes from "./InformReport.module.scss"
import {ReactComponent as Logo} from "@assets/img/logo.svg";
import {ReactComponent as NotificationIcon} from "@assets/img/notification-icon.svg";
import {ReactComponent as ExitIcon} from "@assets/img/exit-icon.svg";
import {ReactComponent as ButtonBack} from "@assets/img/buttonBack.svg";
import Avatar from "@components/Avatar/Avatar.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as DefaultIcon} from "@assets/img/defaultIconProfile.svg";
import Button from "@components/UI/Button/Button.jsx";
import {useFormData} from "@hooks/useFormData.js";
import {useForm} from "react-hook-form";
import {informReport} from "@pages/InformReport/constInformReport.js";
import AttachImg from "@components/AttachImg/AttachImg.jsx";

const InformReport = () => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }

    const {
        reportValue,
        setReportValue,
        submitData,
    } = useFormData();

    return (
        <div className={classes.container}>
            <div className={classes.politicBlock}>
                <Logo/>
                <div className={classes.headerIcon}>
                    <NotificationIcon/>
                    <Link to={"/work/profile"}>
                        <Avatar/>
                    </Link>
                    <ExitIcon/>
                </div>
            </div>
            <p className={classes.timeCheckTitle}>
                Сообщить об ошибке
            </p>
            <hr className={classes.timeCheckLine}/>
            <div className={classes.generalBlock}>
                <div className={classes.grayBlock}>
                    <Link onClick={handleClick} to="" className={classes.buttonBack}>
                        <ButtonBack/>
                    </Link>
                    <div className={classes.iconProfile}>
                        <DefaultIcon/>
                        <p className={classes.iconText}>
                            Иван Иванов
                        </p>
                        <p className={classes.iconTextSpan}>
                            ivan_ivanov@mail.ru
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(submitData)}>
                            <div className={classes.labelBlock}>
                                <p className={classes.labelText}>
                                    Сообщение
                                </p>
                                <textarea
                                    {...register("name", {
                                        required: "Поле обязательно к заполнению"
                                    })}
                                    value={reportValue}
                                    onChange={(e) => setReportValue(e.target.value)}
                                    className={classes.textAreaStyle}
                                />
                                <AttachImg/>
                                {
                                    errors?.name && (
                                        <div style={{color: "red", paddingTop: "20px"}}>
                                            {errors.name.message}
                                        </div>
                                    )
                                }
                            </div>
                            <div className={classes.btnBlock}>
                                <Button styles={informReport}>
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={classes.grayBlockTwo}>
                    <p className={classes.informText}>
                        {reportValue}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InformReport;