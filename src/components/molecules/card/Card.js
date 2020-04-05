import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="card__container">
                    <div className="card__front">
                        <div className="card__front-container">
                            <div className="card__digit-container">
                                <span className="card__digit">****</span>
                                <span className="card__digit">****</span>
                                <span className="card__digit">****</span>
                                <span className="card__digit">****</span>
                            </div>
                            <div className="card__titular-info-wrapper">
                                <p className="card__titular-info">NOME DO TITULAR</p>
                                <p className="card__titular-info">99/99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card__back">
                            <div className="card__back-cvv-container">
                                <span className="card__back-cvv">***</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;