import React from "react";
import classes from "./ModalProfil.module.scss"
import {stylesForButton} from "@components/ModalComponents/ModalProfile/constModalProfile.js";
import Button from "@components/UI/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Close} from "./../../../assets/img/close.svg";

const ModalWindow = ({value, onClick}) => {

    const navigate = useNavigate()

    return (
        <>
            {value && (
                <div className={classes.modalWrapper}>
                    <div className={classes.blockModalWrapper}>
                        <div className={classes.block}>
                            <Button onClick={onClick} styles={stylesForButton.closeModalButton}>
                                <Close/>
                            </Button>
                            <p className={classes.modalText}>
                                Вы действительно хотите НАВСЕГДА удалить свой аккаунт?
                            </p>
                            <div className={classes.profileModalButtonBlock}>
                                <Button styles={stylesForButton.buttonDeleteAccRed} onClick={() => navigate("/")}>
                                    Удалить
                                </Button>
                                <Button onClick={onClick} styles={stylesForButton.buttonFalseAcc}>
                                    Отмена
                                </Button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
};

export default ModalWindow;