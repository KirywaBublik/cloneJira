import React from 'react';
import {ReactComponent as BigGear} from "@assets/img/bigGear.svg";
import {ReactComponent as SmallGear} from "@assets/img/smallGear.svg";
import classes from "./TechWorks.module.scss"

const TechWorksPage = () => {
    return (
        <div>
            <div className={classes.TechWorksBlock}>
                <BigGear className={classes.bigGear}/>
                <SmallGear className={classes.smallGear}/>
            </div>
            <div className={classes.textErrorBlock}>
                <p className={classes.textError}>
                    Ой! У нас что-то сломалось...
                </p>
            </div>
        </div>

    );
};

export default TechWorksPage;