import React, {useState} from 'react';
import classes from "./Success.module.scss"
import buttonBackActive from "@assets/img/buttonBackActive.svg"
import {Link, useLocation, useNavigate} from "react-router-dom";
import ModalWindow from "@components/ModalComponents/ModalWindowSucess/ModalWindow.jsx";
import {ReactComponent as Close} from "@assets/img/close.svg";
import Button from "@components/UI/Button/Button.jsx";
import {buttonNext} from "@pages/Success/constSucess.js";

const Success = () => {
    const [modal, setModal] = useState({
        modalOne: true
    })
    const navigate = useNavigate()
    const location = useLocation();
    const confirm = () => {
        if (location.pathname === '/success/forgotPassword') {
            navigate("/changePassword")
        } else {
            navigate("/login")
        }
    }
    const handleCloseButtonClick = (e) => {
        e.preventDefault()
        setModal({...modal, modalOne: false})
    };
    return (
        <div>
            <Link className={classes.buttonBack} to={"/"}>
                <img src={buttonBackActive} alt=""/>
            </Link>
            <div className={classes.textBlock}>
                <p>
                    На вашу почту отправлено
                    письмо-подтверждения.
                    Пожалуйста, перейдите по ссылке внутри письма
                </p>
            </div>
            <div className={classes.confBlock}>
                <p className={classes.confText}>
                    Подтвердите действие: Смена почты
                </p>
            </div>
            <ModalWindow
                isOpenned={modal.modalOne}>
                <div>
                    <Link to="/" className={classes.closeModalButton} onClick={handleCloseButtonClick}>
                        <Close/>
                    </Link>
                    <p className={classes.modalTitle}>
                        Успех
                    </p>
                    <p className={classes.modalText}>
                        Почта успешно подтверждена!
                    </p>
                    <div className={classes.profileModalButtonBlock}>
                        <Button styles={buttonNext} onClick={confirm}>
                            Продолжить
                        </Button>
                    </div>
                </div>
            </ModalWindow>
        </div>
    );
};

export default Success;