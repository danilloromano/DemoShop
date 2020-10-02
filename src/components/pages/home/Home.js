import React, { Fragment } from "react";
import "../Home/Home.scss";
import SideBarHeader from "../../atoms/sideBarHeader/SideBarHeader.js"
import Card from "../../molecules/card/Card.js";
import StepperDesk from "../../atoms/stepperDesk/StepperDesk.js";
import Form from "../../molecules/form/Form.js";

const Home = () => {
    return (
        <Fragment>
            <SideBarHeader />
            <div className="container__card">
                <Card />
            </div>
            
            <div className="container__form">
                <StepperDesk />
                <Form />
            </div>
        </Fragment>
    )
}

export default Home;