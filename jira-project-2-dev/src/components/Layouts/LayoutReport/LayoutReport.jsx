import React from 'react';
import classes from "./LayoutReport.module.scss";
import HeaderReports from "@components/HeaderReports/HeaderReports.jsx";
import {useLocation} from "react-router-dom";
import SelectedErrorsUser from "@pages/Report/ErrorsUser/SelectedUserError/SelectedErrorsUser.jsx";
import TimeCheck from "@pages/Report/TimeCheck/TimeCheck.jsx";
import EfficiencyUser from "@pages/Report/Efficiency/EfficiencyUser/EfficiencyUser.jsx";
import AllUserError from "@pages/Report/ErrorsUser/AllUserError/AllUserError.jsx";
import AllUserEfficiency from "@pages/Report/Efficiency/AllUserEfficiency/allUserEfficiency.jsx";
import Selector from "@components/Selector/Selector.jsx";

const LayoutReport = () => {
    const location = useLocation();
    return (
        <div className={classes.timeCheckBlock}>
            {
                (location.pathname === "/work/report/timeCheck")
                    ?
                    <HeaderReports title={"Отчет “Выработка часов”"}/>
                    :
                    (location.pathname === "/work/report/efficiency")
                        ?
                        <HeaderReports title={"Отчет “Эффективность”"}/>
                        :
                        (location.pathname === "/work/report/allUserEfficiency")
                            ?
                            <HeaderReports title={"Отчет “Эффективность”"}/>
                            :
                            <HeaderReports title={"Отчет “Ошибки исполнителя”"}/>
            }
            <div className={classes.timeCheckBlockContent}>
                <div className={classes.timeCheckBlockContentForBackground}>
                    {
                        (location.pathname === "/work/report/timeCheck")
                            ?
                            <TimeCheck/>
                            :
                            (location.pathname === "/work/report/efficiency")
                                ?
                                <EfficiencyUser/>
                                :
                                (location.pathname === "/work/report/errorsUser")
                                    ?
                                    <SelectedErrorsUser/>
                                    :
                                    (location.pathname === "/work/report/allUserErrors")
                                        ?
                                        <AllUserError/>
                                        :
                                        (location.pathname === "/work/report/allUserEfficiency")
                                            ?
                                            <AllUserEfficiency/>
                                            :
                                            <></>
                    }
                </div>
            </div>
            <Selector/>
        </div>
    );
};

export default LayoutReport;