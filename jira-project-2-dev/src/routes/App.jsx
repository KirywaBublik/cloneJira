import {Route, Routes} from 'react-router-dom';
import React from "react";
import Form from "@components/Form/Form.jsx";
import NotFoundPage from "@pages/ErrorPages/NotFoundedPage/NotFoundPage.jsx";
import ForgotPass from "@pages/ForgotPass/ForgotPass.jsx";
import Registration from "@pages/Registration/Registration.jsx";
import Success from "@pages/Success/Success.jsx";
import Authorization from "@pages/Authorization/Authorization.jsx";
import ChangePassword from "@pages/ChangePassword/ChangePassword.jsx";
import LayoutMainPages from "@components/Layouts/LayoutMainPages/LayoutMainPages.jsx";
import WorkTable from "@pages/WorkTable/WorkTable.jsx"
import AllBoards from "@pages/AllBoards/AllBoards.jsx";
import MyTasks from "@pages/MyTasks/MyTasks.jsx";
import Report from "@pages/Report/Report.jsx";
import Profile from "@pages/Profile/Profile.jsx";
import BackError from "@pages/ErrorPages/BackError.jsx";
import ErrorBack from "@pages/ErrorPages/ErorrBack500/ErrorBack.jsx";
import TechWorksPage from "@pages/ErrorPages/TechWorks/TechWorksPage.jsx";
import PoliticConf from "@pages/PoliticConf/PoliticConf.jsx";
import LayoutReport from "@components/Layouts/LayoutReport/LayoutReport.jsx";
import TimeCheck from "@pages/Report/TimeCheck/TimeCheck.jsx";
import EfficiencyUser from "@pages/Report/Efficiency/EfficiencyUser/EfficiencyUser.jsx";
import SelectedErrorsUser from "@pages/Report/ErrorsUser/SelectedUserError/SelectedErrorsUser.jsx";
import AllUserError from "@pages/Report/ErrorsUser/AllUserError/AllUserError.jsx";
import AllUserEfficiency from "@pages/Report/Efficiency/AllUserEfficiency/allUserEfficiency.jsx";
import LayoutGeneral from "@components/Layouts/LayoutGeneral/LayoutGeneral.jsx";
import InformReport from "@pages/InformReport/InformReport.jsx";
import ReportNoLogin from "@pages/reportNoLogin/ReportNoLogin.jsx";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<LayoutGeneral/>}>
                <Route path="/" element={<Form/>}>
                    <Route path="login" element={<Authorization/>}/>
                    <Route index element={<Authorization/>}/>
                    <Route path="forgotPassword" element={<ForgotPass/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="success/:path" element={<Success/>}/>
                    <Route path="changePassword" element={<ChangePassword/>}/>
                </Route>
                <Route path="*" element={<BackError/>}>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="errorBack" element={<ErrorBack/>}/>
                    <Route path="techWorks" element={<TechWorksPage/>}/>
                </Route>
                <Route path="/work/" element={<LayoutMainPages/>}>
                    <Route path="work-table" element={<WorkTable/>}/>
                    <Route path="all-boards" element={<AllBoards/>}/>
                    <Route path="my-tasks" element={<MyTasks/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="report" element={<Report/>}/>
                    <Route path="report" element={<LayoutReport/>}>
                        <Route path="timeCheck" element={<TimeCheck/>}/>
                        <Route path="efficiency" element={<EfficiencyUser/>}/>
                        <Route path="errorsUser" element={<SelectedErrorsUser/>}/>
                        <Route path="allUserErrors" element={<AllUserError/>}/>
                        <Route path="allUserEfficiency" element={<AllUserEfficiency/>}/>
                    </Route>
                </Route>
                <Route path="politicConf" element={<PoliticConf/>}/>
                <Route path="informReport" element={<InformReport/>}/>
                <Route path="reportNoLogin" element={<ReportNoLogin/>}/>
            </Route>
        </Routes>
    );
}