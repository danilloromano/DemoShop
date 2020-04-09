import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FaAngleLeft } from 'react-icons/fa';
import './Step.scss';

class Step extends Component {
    render() {
        return (
            <div className="step">
                <div className="step__icon"><FaAngleLeft/></div>
                <p className="step__text">Etapa {this.props.currentStep} de 3</p>
                <p className="step__text-desktop">Alterar forma de pagamento</p>
                <div></div>
            </div>
        )
    }
}

Step.propTypes = {
    currentStep: PropTypes.number
}

export default Step;