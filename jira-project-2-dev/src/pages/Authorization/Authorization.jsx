import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "@components/UI/Button/Button.jsx";
import classes from "./Authorization.module.scss";
import Input from "@components/UI/Input/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as RememberDefault} from "@assets/img/rememberMe.svg";
import {ReactComponent as RememberCheck} from "@assets/img/rememberMeActive.svg";
import {buttonEnter, regexEmail} from "@pages/Authorization/constAuth.js";

const Authorization = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm()

    const onPasswordClick = () => {
        navigate("/work")
    }

    const [checked, setChecked] = useState(false)
    const handleCheck = () => {
        setChecked(!checked)
    }
    const navigate = useNavigate()
    return (
        <div>
            <div className={classes.blockHello}>
                <p className={classes.helloText}>
                    Добро пожаловать
                </p>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onPasswordClick)}>
                <Input
                    label={"Email"}
                    placeholder={"Введите свою почту"}
                    errors={errors.email}
                    type={"text"}
                    register={register}
                    options={{
                        required: 'Обязательное поле',
                        pattern: {
                            value: regexEmail,
                            message: 'Некорректная почта'
                        }
                    }}
                    name={"email"}
                />
                <Input
                    label={"Пароль"}
                    placeholder={"Введите свой пароль"}
                    errors={errors.password}
                    type={"password"}
                    register={register}
                    options={{
                        required: "Обязательное поле",
                        minLength: {
                            message: 'Минимальное количество символов - 8',
                            value: 8,
                        },
                    }}
                    name={"password"}
                />
                <div className={classes.forgotPassBlock}>
                    <div onClick={handleCheck} className={classes.rememberBtn}>
                        <div>
                            {checked
                                ?
                                <RememberCheck/>
                                :
                                <RememberDefault/>
                            }
                        </div>
                        <label style={{cursor: "pointer", userSelect: "none"}}>Запомнить меня</label>
                    </div>
                    <div>
                        <Link to="/forgotPassword" className={classes.forgotPassLink}>
                            Забыли пароль?
                        </Link>
                    </div>
                </div>
                <div className={classes.blockEnterButton}>
                    <Button styles={buttonEnter}>
                        Войти
                    </Button>
                </div>
                <div className={classes.newAccBlock}>
                    <Link to="/registration" className={classes.newAccLink}>Создать новый
                        аккаунт
                    </Link>
                </div>
                <div className={classes.confBlock}>
                    <p className={classes.confText}>
                        Нажимая, вы соглашаетесь с политикой конфидециальности
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Authorization;