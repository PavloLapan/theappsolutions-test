import React from "react";
import Steps from "./steps";

import './main.scss'
import CardPage from "./card-page";
import QuestionPage from "./question-page";
import PackageOptions from "./package-options";
import TrustPage from "./trust-page";


const Main = () => {
    return (

        <div className='container-fluid p-0'>
            <Steps/>
            <CardPage/>
            <TrustPage/>
            <QuestionPage/>
            <PackageOptions/>
        </div>

    )
}

export default Main