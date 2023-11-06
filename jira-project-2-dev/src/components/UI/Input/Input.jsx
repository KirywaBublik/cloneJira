import React, {useState} from 'react';
import classes from "./Input.module.scss";
import eye from "./../../../assets/img/eye.svg"
import eyeClose from "./../../../assets/img/eyeClose.svg"

const Input = ({label, placeholder, errors, type, register, options, name, ...props}) => {

    const [isHidden, setIsHidden] = useState(true)

    const handlerHidden = (e) => {
        e.preventDefault()
        setIsHidden(prevState => !prevState)
    }

    return (
        <div className={classes.labelBlock}>
            <div className={classes.labelText}>{label}</div>
            <input
                placeholder={placeholder}
                className={classes.inputText}
                type={type === "password" ? (isHidden ? "password" : "text") : type}
                {...register(name, {...options})}
                {...props}
            />
            {
                type === "password"
                &&
                <a onClick={handlerHidden} className={classes.LinkPass} href="">
                    <img src={isHidden ? eyeClose : eye} alt=""/>
                </a>
            }
            <div style={{paddingTop: '10px', color: 'red'}}>
                {errors && <p>{errors?.message || 'Ошибка'}</p>}
            </div>
        </div>
    );
};

export default Input;