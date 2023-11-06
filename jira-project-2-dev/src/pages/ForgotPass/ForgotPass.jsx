import React from "react";
import {useForm} from "react-hook-form";
import classes from "./ForgotPass.module.scss";
import buttonBack from "@assets/img/buttonBack.svg";
import Input from "@components/UI/Input/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import Button from "@components/UI/Button/Button.jsx";
import {buttonAccept, regexEmail} from "@pages/ForgotPass/constForgotPass.js";

const ForgotPass = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm()


    const navigate = useNavigate()
    const onPasswordClick = () => {
        navigate("/success/forgotPassword")
    }

    return (
        <div>
            <Link className={classes.buttonBack} to="/">
                <img src={buttonBack} alt=""/>
            </Link>
            <div className={classes.blockHello}>
                <p className={classes.helloText}>
                    Восстановление пароля
                </p>
            </div>
            <form className={classes.formClass} autoComplete="off" onSubmit={handleSubmit(onPasswordClick)}>
                <Input
                    label={"Email"}
                    placeholder={"Введите свою почту"}
                    errors={errors.email}
                    type={"text"}
                    register={register}
                    options={{
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: regexEmail,
                            message: 'Некорректная почта'
                        }
                    }}
                    name={"email"}
                />
                <div className={classes.blockButtonAccept}>
                    <Button styles={buttonAccept}>
                        Подтвердить
                    </Button>
                </div>
            </form>
            <div className={classes.confBlock}>
                <p className={classes.confText}>
                    Введите почту для восстановления доступа. Вам отправят ссылку для сброса пароля
                </p>
            </div>
        </div>
    );
};

export default ForgotPass;