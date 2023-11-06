import React from 'react';
import classes from "./HeaderReports.module.scss";
import SearchInput from "@components/UI/SearchInput/SearchInput.jsx";

const HeaderReports = ({title}) => {
    return (
        <div>
            <div className={classes.searchInput}>
                <SearchInput/>
            </div>
            <p className={classes.timeCheckTitle}>
                {title}
            </p>
            <hr className={classes.timeCheckLine}/>
        </div>
    );
};

export default HeaderReports;