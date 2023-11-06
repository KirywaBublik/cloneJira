import React, {useEffect, useState} from 'react';
import classes from './SelectorUsers.module.scss';
import {ReactComponent as VectorUp} from '@assets/img/vectodUp.svg';
import {ReactComponent as VectorDown} from '@assets/img/vectorDown.svg';
import {ReactComponent as CheckFalse} from '@assets/img/checkFalse.svg';
import {ReactComponent as CheckTrue} from '@assets/img/checkTrue.svg';
import useSelectUsers from "@hooks/useSelectUsers.js";
import {initialInputCheckBox} from "@components/Selector/constSelector.js";

const SelectorUsers = () => {

    const [stateUsers, setStateUsers] = useState(false);

    const [selectedItems, inputCheckBox, handleSelect] = useSelectUsers(initialInputCheckBox);

    useEffect(() => {
        const hideMenu = (event) => {
            if ((!event.target.closest(`.${classes.elementSelector}`)) && (!event.target.closest(`.${classes.cursorCheck}`))) {
                setStateUsers(false);
            }
        };
        if (setStateUsers) {
            document.body.addEventListener('click', hideMenu);
        }
        return () => {
            document.body.removeEventListener('click', hideMenu);
        };
    }, [stateUsers]);

    return (
        <>
            {stateUsers && (
                <div className={classes.elementSelector}>
                    {inputCheckBox.map((index, element) => (
                        <div
                            className={`${classes.inputBlockStyle} ${
                                selectedItems.includes(index.id) ? classes.selected : ''
                            }`}
                            key={index.id}
                        >
                            <div onClick={() => handleSelect(index.id)} className={classes.blockText}>
                                <p className={classes.text}>
                                    {index.name + (index.id + 1)}
                                </p>
                                <p className={classes.cursorCheck}>
                                    {index.checked ? <CheckTrue/> : <CheckFalse/>}
                                </p>
                            </div>
                            <label className={classes.input}>
                                <input
                                    onChange={() => handleSelect(index.id)}
                                    style={{visibility: 'hidden'}}
                                    checked={index.checked}
                                    name={index.name}
                                    type={index.type}
                                />
                            </label>
                            {element !== inputCheckBox.length - 1 && <hr className={classes.inputLineStyle}/>}
                        </div>
                    ))}
                </div>
            )}
            <div className={classes.childrenGeneralBlock}
                 onClick={(event) => {
                     event.stopPropagation();
                     setStateUsers(!stateUsers);
                 }
                 }>
              <span className={classes.spanChildren}>
                    {stateUsers ? <VectorUp/> : <VectorDown/>}
              </span>
                Выбрать пользователя
            </div>
        </>
    );
};

export default SelectorUsers;
