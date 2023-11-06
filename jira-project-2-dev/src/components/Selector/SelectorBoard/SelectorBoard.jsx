import React, {useEffect, useState} from 'react';
import classes from "./SelectorBoard.module.scss";
import {ReactComponent as VectorUp} from "@assets/img/vectodUp.svg";
import {ReactComponent as VectorDown} from "@assets/img/vectorDown.svg";
import {inputRadio} from "@components/Selector/constSelector.js";

const SelectorBoard = () => {

    const [stateBoard, setStateBoard] = useState(false);

    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
    }

    useEffect(() => {
        const hideMenu = (event) => {
            if (!event.target.closest(`.${classes.elementSelector}`)) {
                setStateBoard(false);
            }
        };
        if (setStateBoard) {
            document.body.addEventListener('click', hideMenu);
        }
        return () => {
            document.body.removeEventListener('click', hideMenu);
        };
    }, [stateBoard]);

    return (
        <>
            {stateBoard &&
                <div className={classes.elementSelector}>
                    {inputRadio.map((index, element) => (
                        <div
                            className={`${classes.inputBlockStyle} ${selectedId === index.id ? classes.selected : ''}`}
                            key={index.id}
                            onClick={() => handleSelect(index.id)}>
                            <input
                                style={{visibility: "hidden"}}
                                name={index.name}
                                type={index.type}
                                checked={selectedId === index.id}
                                onChange={() => handleSelect(index.id)}
                            />
                            <p className={classes.text}>
                                {index.name + (index.id + 1)}
                            </p>
                            {element !== inputRadio.length - 1 && <hr className={classes.inputLineStyle}/>}
                            <hr/>
                        </div>
                    ))}
                </div>
            }
            <div className={classes.childrenGeneralBlock}
                 onClick={(event) => {
                     event.stopPropagation();
                     setStateBoard(!stateBoard);
                 }}>
                <span className={classes.spanChildren}>
                {stateBoard ? <VectorUp/> : <VectorDown/>}
            </span>
                Выбрать доску
            </div>
        </>
    );
};

export default SelectorBoard;
