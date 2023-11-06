import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/Main.scss"
import {BrowserRouter} from "react-router-dom";
import Router from "./routes/App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);