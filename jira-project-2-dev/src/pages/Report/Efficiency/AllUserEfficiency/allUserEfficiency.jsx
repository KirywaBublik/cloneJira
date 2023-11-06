import React, {useState} from 'react';
import classes from "./allUserEfficiency.module.scss"
import {ReactComponent as Scroll} from "@assets/img/scroll.svg";
import {allUserEff} from "@pages/Report/Efficiency/AllUserEfficiency/constAllUserEff.js";

const AllUserError = () => {

    const [activeElement, setActiveElement] = useState(0);
    const handleScroll = () => {
        setActiveElement(prevIndex => Math.min(prevIndex + 1, allUserEff.totalBlocks - allUserEff.blockToShow));
    }

    const userBlock = [
        {
            id: 0,
            name: "ДП1: Задача 1",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 1,
            name: "ДП1: Задача 2",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 2,
            name: "ДП1: Задача 3",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 3,
            name: "ДП1: Задача 4",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 4,
            name: "ДП1: Задача 5",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 5,
            name: "ДП1: Задача 6",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 6,
            name: "ДП1: Задача 7",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 7,
            name: "ДП1: Задача 8",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 8,
            name: "ДП1: Задача 9",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 9,
            name: "ДП1: Задача 10",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 10,
            name: "ДП1: Задача 11",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 11,
            name: "ДП1: Задача 12",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 12,
            name: "ДП1: Задача 13",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
        {
            id: 13,
            name: "ДП1: Задача 14",
            percent: allUserEff.percentBack,
            height: `${allUserEff.height}px`,
        },
    ]

    return (
        <div className={classes.blockAllError}>
            <p className={classes.CountOfError}>
                Количество готовности
            </p>
            <div className={classes.borderAllError}>
                <div className={classes.generalBlock}>
                    {
                        userBlock.slice(activeElement, activeElement + allUserEff.blockToShow).map((item, index) => (
                            <div key={item.id}>
                                <div style={{height: `${userBlock[index].height}`}} className={classes.percentDivBlock}
                                >
                                    <p className={classes.percentStyle}>
                                        {item.percent}%
                                    </p>
                                </div>
                                <p className={classes.nameStyle}>
                                    {item.name}
                                </p>
                            </div>
                        ))
                    }
                    <button onClick={handleScroll} className={classes.scroll}>
                        {
                            activeElement + allUserEff.blockToShow < allUserEff.totalBlocks ?
                                <Scroll/> : <></>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllUserError;