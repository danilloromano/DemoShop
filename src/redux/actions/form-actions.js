import { 
    NUMBER_CARD,
    NAME, 
    SHELF_LIFE, 
    CVV, 
    PORTION_QUANTITY, 
    VALID
} from '../constants/constants.js';

export const updateCardNumber = (value) => { return { type: NUMBER_CARD, cardNumber: value }};
    
export const updateName = (value) => { return { type: NAME, cardName: value }};

export const updateShelfLife = (value) => { return { type: SHELF_LIFE, shelfLife: value}};
    
export const updateCVV = (value) => { return { type: CVV, cvv: value }};

export const updatePortionQuantity = (value) => { return { type: PORTION_QUANTITY, portionQuantity: value }};

export const updateValid = (value) => { return { type: VALID, valid: value }};
