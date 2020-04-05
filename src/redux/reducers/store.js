import { combineReducers } from 'redux';
import formReducer from './formReducer';
import card from './card';

export  const reducers = combineReducers({ formReducer, card })

