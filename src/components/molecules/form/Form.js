import React, { Component } from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '../../atoms/button/Button.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { 
    updateCardNumber,  
    updateName,
    updateShelfLife,
    updateCVV,
    updatePortionQuantity,
    updateValid
} from '../../../redux/actions/form-actions'

const currencies = [
    {value: '01', label: 1},
    {value: '02', label: 2},
    {value: '03', label: 3},
    {value: '04', label: 4},
    {value: '05', label: 5},
    {value: '06', label: 6},
    {value: '07', label: 7},
    {value: '08', label: 8},
    {value: '09', label: 9},
    {value: '10', label: 10},
    {value: '11', label: 11},
    {value: '12', label: 12}
];

const validate = values => {
    const errors = {};
    console.log('____________________', values.cardNumber.length)
    if (!values.cardNumber) {
        errors.cardNumber = 'Card Number is Required';
        console.log('____________________', values.cardNumber.length)
    } else if (values.cardNumber.length > 16) {
        errors.cardNumber = 'Must be 16 characters';
    }
    console.log(errors)
    return errors;
};

const Form = (props) => {

    const formik = useFormik({
        initialValues: {
            cardNumber: props.numberCard,
            cardName: props.name,
            validete: props.shelfLife,
            cvv: props.cvv,
            parceNumber: props.portionQuantity,
        },
        validationSchema: Yup.object({
            cardNumber: Yup.string().max(16, 'Must be 16 characters or less').required('Required'),
            cardName: Yup.string().required('Required'),
            validete: Yup.string().required('Required'),
            cvv: Yup.number().max(3, 'Must be 3 characters').required('Required'),
            parceNumber: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik)
    return (
        <div className="form">
            <form className='form__container' onSubmit={formik.handleSubmit}>
                <div className="form__full">
                    <TextField {...formik.getFieldProps('cardNumber')}
                        error = {formik.errors.cardNumber ? true : false}
                        id="cardNumber" 
                        label="Numero do cartao" 
                        name="cardNumber"
                        type="text"
                        helperText={formik.errors.cardNumber}
                        onChange={formik.handleChange}
                        value={formik.values.cardNumber}
                    />
                </div>

                <div className="form__full">
                    <TextField 
                        id="cardName"
                        label="Nome (igual ao cartao)" 
                        name="cardName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardName}
                        
                    />
                </div>

                <div className="form__two-col">
                    <div className="form__half">
                        <TextField 
                            id="validete" 
                            label="Validade"
                            name="validete"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.validete}
                        />
                    </div>
                    <div className="form__half">
                        <TextField 
                            id="cvv"
                            label="CVV"
                            name="cvv"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cvv}
                        />
                    </div>
                </div>

                <div className="form__full">
                    <TextField
                        id="parceNumber"
                        select
                        label="Número de parcelas"
                        name="parceNumber"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.parceNumber.value}
                        SelectProps={{ native: true }}>
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                    <Button text={'Continuar'} />
            </form>
        </div>
    )
}
    

const mapDispatchToProps = (dispatch) => {
    return {
        updateCardNumber: (value) => dispatch(updateCardNumber(value)),
        updateShelfLife: (value) => dispatch(updateShelfLife(value)),
        updateCVV: (value) => dispatch(updateCVV(value)),
        updatePortionQuantity: (value) => dispatch(updatePortionQuantity(value)),
        updateValid: (value) => dispatch(updateValid(value)),
        updateName: (value) => dispatch(updateName(value))
    }
  }

const mapStateToProps = (state) => {
    return {
        numberCard: state.numberCard,
        name: state.name,
        shelfLife: state.shelfLife,
        cvv: state.cvv,
        portionQuantity: state.portionQuantity,
        valid: false
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Form);

