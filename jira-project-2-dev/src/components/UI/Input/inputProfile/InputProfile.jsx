import React, {useState} from 'react';
import classes from "./InputProfile.module.scss";
import eye from "./../../../../assets/img/eye.svg"
import eyeClose from "./../../../../assets/img/eyeClose.svg"

const InputProfile = ({label, placeholder, errors, type, register, options, name, ...props}) => {

    const [isHidden, setIsHidden] = useState(true)

    const handlerHidden = (e) => {
        e.preventDefault()
        setIsHidden(prevState => !prevState)
    }

    return (
        <div className={classes.labelBlock}>
            <div className={classes.labelText}>{label}</div>
            <div>
                {
                    type === "password"
                    &&
                    <a onClick={handlerHidden} className={classes.LinkPass} href="">
                        <img src={isHidden ? eyeClose : eye} alt=""/>
                    </a>
                }
                <input
                    placeholder={placeholder}
                    className={classes.inputText}
                    type={type === "password" ? (isHidden ? "password" : "text") : type}
                    {...register(name, {...options})}
                    {...props}
                />
                <div style={{paddingTop: '10px', color: 'red'}}>
                    {errors && <p>{errors?.message || 'Ошибка'}</p>}
                </div>
            </div>
        </div>
    );
};

export default InputProfile;