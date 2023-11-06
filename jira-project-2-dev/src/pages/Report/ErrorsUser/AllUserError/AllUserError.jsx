import React, {useState} from 'react';
import classes from "./AllUserError.module.scss"
import {ReactComponent as Scroll} from "@assets/img/scroll.svg";
import {allUserError} from "@pages/Report/ErrorsUser/AllUserError/constAllUserError.js";

const AllUserError = () => {
    let colorRed = allUserError.percentBack >= 80 ? "red" : "none"

    const [activeElement, setActiveElement] = useState(0);

    const handleScroll = () => {
        setActiveElement(prevIndex => Math.min(prevIndex + 1, allUserError.totalBlocks - allUserError.blockToShow));
    }

    const userBlock = [
        {
            id: 0,
            name: "0",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 1,
            name: "1",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 2,
            name: "2",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 3,
            name: "3",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 4,
            name: "4",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 5,
            name: "5",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 6,
            name: "6",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 7,
            name: "7",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 8,
            name: "8",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 9,
            name: "9",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 10,
            name: "10",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 11,
            name: "11",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 12,
            name: "12",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
        {
            id: 13,
            name: "13",
            percent: allUserError.percentBack,
            height: `${allUserError.height}px`,
        },
    ]

    const percentRed = {
        color: colorRed
    }
    return (
        <div className={classes.blockAllError}>
            <p className={classes.CountOfError}>
                Количество ошибок
            </p>
            <div className={classes.borderAllError}>
                <div className={classes.generalBlock}>
                    {
                        userBlock.slice(activeElement, activeElement + allUserError.blockToShow).map((item, index) => (
                            <div key={item.id}>
                                <div style={{height: `${userBlock[index].height}`}} className={classes.percentDivBlock}
                                >
                                    <p style={percentRed} className={classes.percentStyle}>
                                        {item.percent}%
                                    </p>
                                </div>
                                <p style={percentRed} className={classes.nameStyle}>
                                    {item.name}
                                </p>
                            </div>
                        ))
                    }
                    <button onClick={handleScroll} className={classes.scroll}>
                        {
                            activeElement + allUserError.blockToShow < allUserError.totalBlocks ?
                                <Scroll/> : <></>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllUserError;