import React from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '../../atoms/button/Button.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from 'axios';
import { 
    updateCardNumber,  
    updateName,
    updateShelfLife,
    updateCVV,
    updatePortionQuantity,
    updateValid,
    rotateCard,
    changeBackImage
} from '../../../redux/actions/form-actions'

const currencies = [
    {label: '0', value: 0},
    {label: '01', value: 1},
    {label: '02', value: 2},
    {label: '03', value: 3},
    {label: '04', value: 4},
    {label: '05', value: 5},
    {label: '06', value: 6},
    {label: '07', value: 7},
    {label: '08', value: 8},
    {label: '09', value: 9},
    {label: '10', value: 10},
    {label: '11', value: 11},
    {label: '12', value: 12}
];

const Form = (props) => {

    const resetStore = () => {
        props.changeBackImage(false)
        props.rotateCard(false)
        props.updateName("")
        props.updateShelfLife("")
        props.updateCVV("")
        props.updatePortionQuantity(0)
        props.updateCardNumber("")
    }

    const validateCardExpire = (date) => {
        var d = new Date();
        var currentYear = d.getFullYear();
        var currentMonth = d.getMonth() + 1;
        var parts = date.split('/');
        var year = parseInt(parts[1], 10) + 2000;
        var month = parseInt(parts[0], 10);
        if (year < currentYear || (year == currentYear && month < currentMonth)) {
            return false
        }
        return true
    }

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardName: '',
            validate: '',
            cvv: '',
            portionNumber: props.portionQuantity,
        },
        validationSchema: Yup.object({
            cardNumber: Yup.number()
            .required('Required')
            .test('len', 'Must be exactly 16 characters',
             val => val && val.toString().length === 16),

            cardName: Yup.string()
            .required('Required')
            .matches(/^[a-zA-Z]{4,}(?: [a-zA-Z]+)(?: [a-zA-Z]+){0,3}$/,
             'invalid Name'),
            
            validate: Yup.string()
            .required('Required')
            .max(5, 'Must be 5 characters')
            .min(5, 'Must be 5 characters')
            .test('Expired_card', 'Your card is expired',
             value => value && validateCardExpire(value)),
            
            cvv: Yup.number()
            .required('Required')
            .test('len', 'Must be exactly 3 characters',
             val => val && val.toString().length === 3),

            portionNumber: Yup.number()
            .required('Required'),
        }),
        onSubmit: (values, {setSubmitting, resetForm}) => {
            axios({
                method: 'post',
                url: 'myurl',
                data: values,
                headers: {'Content-Type': 'application/json' }
                })
                .then( (response) => {
                    resetForm(formik.initialValues)
                    resetStore();
                    setSubmitting(false);
                })
                .catch( (error) =>  {
                    resetForm(formik.initialValues)
                    resetStore();
                    setSubmitting(true);
                });
            
            
        }
    });

    return (
        <div className="form">
            <form className='form__container' onSubmit={formik.handleSubmit}>
                <div className="form__full">
                    <TextField {...formik.getFieldProps('cardNumber')}
                        error = {formik.touched.cardNumber && formik.errors.cardNumber ? true : false}
                        id="cardNumber" 
                        label="Numero do cartao" 
                        name="cardNumber"
                        type="text"
                        helperText={ 
                            formik.touched.cardNumber &&
                            formik.errors.cardNumber ? 
                            formik.errors.cardNumber : null}
                        onChange={formik.handleChange}
                        onFocus={() => props.changeBackImage(true)}
                        value={formik.values.cardNumber || ''}
                        onKeyUp={(e) => props.updateCardNumber(e.target.value)}
                    />
                </div>

                <div className="form__full">
                    <TextField {...formik.getFieldProps('cardName')}
                        error = {
                            formik.touched.cardName &&
                            formik.errors.cardName ?
                            true : false}
                        id="cardName"
                        label="Nome (igual ao cartao)" 
                        name="cardName"
                        type="text"
                        onFocus={() => props.rotateCard(false)}
                        onChange={formik.handleChange}
                        onKeyUp={(e) => props.updateName(e.target.value)}
                        value={formik.values.cardName || ''}
                        helperText={ 
                            formik.touched.cardName &&
                            formik.errors.cardName ? 
                            formik.errors.cardName : null}
                    />
                </div>

                <div className="form__two-col">
                    <div className="form__half">
                        <TextField {...formik.getFieldProps('validate')}
                            error = {
                                formik.touched.validate &&
                                formik.errors.validate ?
                                true : false}
                            id="validate" 
                            label="Validade"
                            name="validate"
                            type="text"
                            onFocus={() => props.rotateCard(false)}
                            onChange={formik.handleChange}
                            onKeyUp={(e) => props.updateShelfLife(e.target.value)}
                            value={formik.values.validate}
                            helperText={ 
                                formik.touched.validate &&
                                formik.errors.validate ? 
                                formik.errors.validate : null}
                        />
                    </div>
                    <div className="form__half">
                        <TextField {...formik.getFieldProps('cvv')}
                            error = {
                                formik.touched.cvv &&
                                formik.errors.cvv ?
                                true : false}
                            id="cvv"
                            label="CVV"
                            name="cvv"
                            type="number"
                            onChange={formik.handleChange}
                            onFocus={() => props.rotateCard(true)}
                            onKeyUp={(e) => props.updateCVV(e.target.value)}
                            value={formik.values.cvv}
                            helperText={ 
                                formik.touched.cvv &&
                                formik.errors.cvv ? 
                                formik.errors.cvv : null}
                        />
                    </div>
                </div>

                <div className="form__full">
                    <TextField {...formik.getFieldProps('portionNumber')}
                        error = {
                            formik.touched.portionNumber &&
                            formik.errors.portionNumber ?
                            true : false}
                        id="portionNumber"
                        select
                        label="Número de parcelas"
                        name="portionNumber"
                        type="number"
                        onFocus={() => props.rotateCard(false)}
                        onChange={formik.handleChange}
                        onKeyUp={(e) => props.updatePortionQuantity(e.target.value)}
                        value={formik.values.portionNumber}
                        helperText={ 
                            formik.touched.portionNumber &&
                            formik.errors.portionNumber ? 
                            formik.errors.portionNumber : null}
                        SelectProps={{ native: true }}>
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                    <Button text={'Continuar'} type={'submit'} onclick={() => formik.handleReset}/>
            </form>
        </div>
    )
}

Form.propTypes = {
    updateCardNumber: PropTypes.func,
    updateName: PropTypes.func,
    updateShelfLife: PropTypes.func,
    updateCVV: PropTypes.func,
    updatePortionQuantity: PropTypes.func,
    updateValid: PropTypes.func,
    rotateCard: PropTypes.func,
    changeBackImage: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCardNumber: (value) => dispatch(updateCardNumber(value)),
        updateShelfLife: (value) => dispatch(updateShelfLife(value)),
        updateCVV: (value) => dispatch(updateCVV(value)),
        updatePortionQuantity: (value) => dispatch(updatePortionQuantity(value)),
        updateValid: (value) => dispatch(updateValid(value)),
        updateName: (value) => dispatch(updateName(value)),
        rotateCard: (value) => dispatch(rotateCard(value)),
        changeBackImage: (value) => dispatch(changeBackImage(value))
    }
  }

  const mapStateToProps = (state) => {
    return {
        cardNumber: state.cardNumber,
        cardName: state.cardName,
        shelfLife: state.shelfLife,
        cvv: state.cvv,
        portionQuantity: state.portionQuantity,
        backImage: state.backImage,
        valid: false
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Form);

