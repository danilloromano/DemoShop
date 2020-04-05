import { 
    NUMBER_CARD,
    NAME, 
    SHELF_LIFE, 
    CVV, 
    PORTION_QUANTITY, 
    VALID
} from '../constants/constants.js';

export const updateCardNumber = (value) => { return { type: NUMBER_CARD, value: value }};

export const updateName = (value) => { return { type: NAME, value: value }};
    
export const updateShelfLife = (value) => { return { type: SHELF_LIFE, value: value}};
    
export const updateCVV = (value) => { return { type: CVV, value: value }};

export const updatePortionQuantity = (value) => { return { type: PORTION_QUANTITY, value: value }};

export const updateValid = (value) => { return { type: VALID, value: value }};
