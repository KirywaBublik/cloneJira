import React from 'react';
import classes from "./ReportNoLogin.module.scss"
import {ReactComponent as Logo} from "@assets/img/logo.svg";
import {ReactComponent as NotificationIcon} from "@assets/img/notification-icon.svg";
import {ReactComponent as ExitIcon} from "@assets/img/exit-icon.svg";
import {ReactComponent as ButtonBack} from "@assets/img/buttonBack.svg";
import Avatar from "@components/Avatar/Avatar.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Input from "@components/UI/Input/Input.jsx";
import Button from "@components/UI/Button/Button.jsx";
import {useFormData} from "@hooks/useFormData.js";
import {formReportMessage, reportNoLogin} from "@pages/reportNoLogin/ConstantReportNoLogin.js";
import AttachImg from "@components/AttachImg/AttachImg.jsx";

const ReportNoLogin = () => {

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

    const grayBlock = {
        minHeight: "800px",
    }

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
                <div style={grayBlock} className={classes.grayBlock}>
                    <Link onClick={handleClick} to="" className={classes.buttonBack}>
                        <ButtonBack/>
                    </Link>
                    <form autoComplete="off" className={classes.formReport} onSubmit={handleSubmit(submitData)}>
                        {
                            formReportMessage.map(item => (
                                <div key={item.id}>
                                    <Input
                                        type={item.type}
                                        errors={errors[item.name]}
                                        placeholder={item.placeholder}
                                        label={item.label}
                                        register={register}
                                        name={item.name}
                                        options={item.options}
                                    />
                                </div>
                            ))
                        }
                        <p className={classes.labelText}>
                            Сообщение
                        </p>
                        <div className={classes.blockTextArea}>
                            <textarea
                                {...register("textarea", {
                                    required: "Обязательное поле"
                                })}
                                value={reportValue}
                                onChange={(e) => setReportValue(e.target.value)}
                                className={classes.textAreaStyle}
                            />
                            <AttachImg/>
                            {
                                errors?.textarea && (
                                    <div style={{color: "red", paddingTop: "20px", textAlign: "center"}}>
                                        {errors.textarea.message}
                                    </div>
                                )
                            }
                        </div>
                        <div className={classes.btnStyles}>
                            <Button styles={reportNoLogin}>
                                Отправить
                            </Button>
                        </div>
                    </form>
                </div>
                <div style={grayBlock} className={classes.grayBlockTwo}>
                    <p className={classes.informText}>
                        {reportValue}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReportNoLogin;