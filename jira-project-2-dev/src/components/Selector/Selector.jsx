import React, {useState} from 'react';
import classes from "./Selector.module.scss"
import Button from "@components/UI/Button/Button.jsx";
import {styleBtn} from "@components/Selector/constSelector.js";
import SelectorBoard from "@components/Selector/SelectorBoard/SelectorBoard.jsx";
import SelectorUsers from "@components/Selector/SelectorUsers/SelectorUsers.jsx";
import Calendar from "@components/Selector/Calendar/Calendar.jsx";

const Selector = () => {
    const downloadExel = () =>{}
    
    return (
     <div className={classes.generalBlock}>
         <SelectorBoard/>
         <SelectorUsers/>
         <Calendar/>
         <div>
             <Button onClick={downloadExel} styles={styleBtn}>
                 Скачать в Excel
             </Button>
         </div>
    </div>
  );
};

export default Selector;