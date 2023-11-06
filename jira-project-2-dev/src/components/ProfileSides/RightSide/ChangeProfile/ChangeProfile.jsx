import React, {useState} from 'react';
import classes from "./ChangeProfile.module.scss";
import {dataProfile, deleteAccBtn, saveData} from "@components/ProfileSides/RightSide/constRightSide.js";
import InputProfile from "@components/UI/Input/inputProfile/InputProfile.jsx";
import Button from "@components/UI/Button/Button.jsx";
import {useForm} from "react-hook-form";
import defaultIcon from "@assets/img/changeIcon.svg";
import {useFormData} from "@hooks/useFormData.js";
import {ReactComponent as Check} from "@assets/img/check.svg";
import ModalProfile from "@components/ModalComponents/ModalProfile/ModalProfile.jsx";
import {ReactComponent as TrashIcon} from "@assets/img/trash.svg";

const ChangeProfile = () => {

    const [openModal, setOpenModal] = useState(false)

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm()
    const changeData = (data) => {
    }

    const {
        imageUrl,
        submitForm,
    } = useFormData();

    return (
        <div className={classes.blockChnageProfile}>
            <form onSubmit={handleSubmit(changeData)}>
                <label>
                    <div className={classes.styleLabel}>
                        <input
                            onChange={submitForm}
                            type="file"/>
                        <img className={classes.imgChange}
                             src={imageUrl ? imageUrl : defaultIcon}
                             alt=""/>
                    </div>
                </label>
                {
                    dataProfile.map(item => (
                        <InputProfile
                            key={item.id}
                            type={item.type}
                            placeholder={item.placeholder}
                            label={item.label}
                            name={item.name}
                            options={item.options}
                            register={register}
                            errors={errors[item.name]}
                        />
                    ))
                }
                <span className={classes.checkButton}>
                    <Check/>
                </span>
                <Button styles={saveData}>
                    Сохранить
                </Button>
            </form>
            <ModalProfile onClick={() => setOpenModal(false)} value={openModal}/>
            <div onClick={() => setOpenModal(true)} className={classes.blockDeleteAcc}>
                <span className={classes.spanDeleteAcc}>
                    <TrashIcon/>
                </span>
                <Button styles={deleteAccBtn}>
                    Удалить аккаунт
                </Button>
            </div>
        </div>
    );
};

export default ChangeProfile;