import React, { Component } from 'react';
import './Card.scss';
import { connect } from 'react-redux';


class Card extends Component {

    constructor(props) {
        super(props)
        this.formatCardNumber = this.formatCardNumber.bind(this)
    }

    formatCardNumber(number) {
        let numbers = number.toString()
        .replace(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, "$1 $2 $3 $4");
        let first = numbers.split(" ")[0]
        let second = numbers.split(" ")[1]
        let thirdy = numbers.split(" ")[2]
        let fourty = numbers.split(" ")[3]

        return {
            first: first,
            second: second,
            thirdy: thirdy,
            fourty: fourty
        }
    }

    render() {
        const {cardNumber, cardName, cvv, shelfLife} = this.props
        
        return (
            <div className="card">
                <div className="card__container">
                    <div className="card__front">
                        <div className="card__front-container">
                            <div className="card__digit-container">
                                <span className="card__digit">
                                    {cardNumber ?
                                    this.formatCardNumber(cardNumber).first : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).second ?
                                    this.formatCardNumber(cardNumber).second : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).thirdy ?
                                    this.formatCardNumber(cardNumber).thirdy : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).fourty ?
                                    this.formatCardNumber(cardNumber).fourty : '****'}
                                </span>

                            </div>
                            <div className="card__titular-info-wrapper">
                                <p className="card__titular-info">{ cardName || 'NOME DO TITULAR' }</p>
                                <p className="card__titular-info">{ shelfLife || '99/99' }</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card__back">
                            <div className="card__back-cvv-container">
                                <span className="card__back-cvv">{ cvv || '***' }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cardNumber: state.cardNumber,
        cardName: state.cardName,
        shelfLife: state.shelfLife,
        cvv: state.cvv,
        portionQuantity: state.portionQuantity,
        valid: false
    }
  }

export default connect(mapStateToProps)(Card);