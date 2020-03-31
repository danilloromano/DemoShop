import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "../Home/Home.scss";
import SideBarHeader from "../../atoms/sideBarHeader/SideBarHeader.js"
import Card from "../../molecules/card/Card.js";

class Home extends Component {

    render() {
        return (
            <Fragment>
                <SideBarHeader />
                <Card />
            </Fragment>
        )
    }

}
Home.propTypes = {}

export default Home;