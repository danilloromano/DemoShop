import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__container">
                    <div className="card__digit-container">
                        <span className="card__digit">1234</span>
                        <span className="card__digit">1244</span>
                        <span className="card__digit">2342</span>
                        <span className="card__digit">6867</span>
                    </div>
                    <div className="card__titular-info-wrapper">
                        <p className="card__titular-info">Mestre dos MAgos</p>
                        <p className="card__titular-info">99/99</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card;