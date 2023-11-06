import React from 'react';
import classes from "./Registration.module.scss";
import Input from "@components/UI/Input/Input.jsx";
import buttonBack from "@assets/img/buttonBack.svg";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import Button from "@components/UI/Button/Button.jsx";
import {formItems, registerBtn} from "@pages/Registration/constRegistration.js";

const Registration = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        watch,
    } = useForm()

    const formItemsPass = [
        {
            id: 3,
            placeholder: "Введите пароль",
            label: "Пароль",
            name: "password",
            type: "password",
            options: {
                required: "Обязательное поле",
                minLength: {
                    message: 'Минимальное количество символов - 8',
                    value: 8,
                },
            }
        },
        {
            id: 4,
            placeholder: "Повторите пароль",
            label: "Подтвердите пароль",
            name: "confirmPassword",
            type: "password",
            options: {
                validate(value) {
                    if (value !== watch("password")) {
                        return "Пароли не совпадают"
                    }
                },
                required: "Обязательное поле",
                minLength: {
                    message: 'Минимальное количество символов - 8',
                    value: 8,
                },
            }
        },
    ]
    const navigate = useNavigate()
    const onPasswordClick = () => {
        navigate("/success/registration")
    };

    return (
        <div>
            <Link className={classes.buttonBack} to="/">
                <img src={buttonBack} alt=""/>
            </Link>
            <p className={classes.welcomeText}>
                Регистрация
            </p>
            <form autoComplete="off" onSubmit={handleSubmit(onPasswordClick)}>
                {
                    [...formItems, ...formItemsPass].map(item => (
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
                <div className={classes.buttonBlock}>
                    <Button styles={registerBtn}>
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
            <div>
                <p className={classes.confText}>
                    Нажимая, вы соглашаетесь с политикой <br/> конфидециальности
                </p>
            </div>
        </div>
    );
};

export default Registration;