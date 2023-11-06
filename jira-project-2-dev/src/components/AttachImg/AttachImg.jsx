import React from 'react';
import classes from "./Attach.module.scss";
import border from "@assets/img/borderDashed.svg";
import {useFormData} from "@hooks/useFormData.js";

const AttachImg = () => {

    const {
        imageUrl,
        submitForm,
    } = useFormData();

    return (
        <label>
            <div className={classes.styleLabel}>
                <input
                    onChange={submitForm}
                    type="file"/>
                <img className={classes.imgChange}
                     src={imageUrl ? imageUrl : border}
                     alt=""/>
                {!imageUrl ?
                    <span className={classes.spanLabelText}>
                        Прикрепить файлы
                    </span>
                    :
                    <></>
                }
            </div>
        </label>
    );
};

export default AttachImg;