import React, { Component } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

import './StepperDesk.scss';

class StepperDesk extends Component {
    render() {
        return (
            <div className="stepperDesk">
                <div className="stepperDesk__item-container">
                    <div className="stepperDesk__item-checked"><FaCheck/></div>
                    <span className="stepperDesk__text">Carrinho</span>
                    <span className="stepperDesk__icon"><FaChevronRight/></span>
                </div>
                <div className="stepperDesk__item-container">
                    <div className="stepperDesk__item">2</div>
                    <span className="stepperDesk__text">Pagamento</span>
                    <span className="stepperDesk__icon"><FaChevronRight/></span>
                </div>
                <div className="stepperDesk__item-container">
                    <div className="stepperDesk__item">3</div>
                    <span className="stepperDesk__text">Confirmação</span>
                </div>
            </div>
        )
    }
}

export default StepperDesk;