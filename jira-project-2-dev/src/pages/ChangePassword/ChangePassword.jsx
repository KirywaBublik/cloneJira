import React from 'react';
import classes from "./Changepassword.module.scss"
import Button from "@components/UI/Button/Button.jsx";
import Input from "@components/UI/Input/Input.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {changePass} from "@pages/ChangePassword/constChangePass.js";

const ChangePassword = () => {
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
        navigate("/login")
    };
    return (
        <div>
            <div className={classes.blockHello}>
                <p className={classes.helloText}>
                    Здравствуйте, Иван Иванов
                </p>
            </div>
            <form autoComplete="off" className={classes.formClass} onSubmit={handleSubmit(onPasswordClick)}>
                {
                    ...formItemsPass.map(item => (
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
                <div className={classes.blockChangePass}>
                    <Button styles={changePass}>
                        Изменить пароль
                    </Button>
                </div>
            </form>
            <div className={classes.confBlock}>
                <p className={classes.confText}>
                    Измените пароль для восстановления доступа к аккаунту
                </p>
            </div>
        </div>
    );
};

export default ChangePassword;