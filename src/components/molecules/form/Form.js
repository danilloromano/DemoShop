import React, { Component } from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class Form extends Component {

    constructor(props) {
        super(props)
    }

    handleChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="form">
                <form className='form__container' noValidate autoComplete="off">
                    <div className="form__full"><TextField id="cardNumber" label="Numero do cartao" /></div>
                    <div className="form__full"><TextField id="cardName" label="Nome (igual ao cartao)" /></div>

                    <div className="form__two-col">
                        <div className="form__half"><TextField id="validete" label="Validade" /></div>
                        <div className="form__half"><TextField id="cvv" label="CVV" /></div>
                    </div>

                    <div className="form__full">
                        <TextField
                            id="parceNumber"
                            select
                            label="Número de parcelas"
                            onChange={this.handleChange}
                            SelectProps={{ native: true }}>
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className="btn__wrapper">
                        <button className="btn__default">Continuar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

