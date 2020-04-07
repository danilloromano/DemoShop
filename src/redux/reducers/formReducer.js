
import { 
    NUMBER_CARD,
    NAME, 
    SHELF_LIFE, 
    CVV, 
    PORTION_QUANTITY, 
    VALID,
    ROTATE_CARD,
    CHANGE_BACK_IMAGE,
} from '../constants/constants.js'

const INITIAL_STATE = {
    cardNumber: '',
    cardName: '',
    shelfLife: '',
    cvv: '',
    portionQuantity: 0,
    rotateCard: false,
    valid: false,
    backImage: false
}

const formReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case NUMBER_CARD:
            return  { ...state, cardNumber: action.cardNumber };
        break;

        case NAME:
            
            return  { ...state, cardName: action.cardName };
        break;

        case SHELF_LIFE:
            return  { ...state, shelfLife: action.shelfLife };
        break;

        case CVV:
            return  { ...state, cvv: action.cvv };
        break;

        case PORTION_QUANTITY:
            return  { ...state, portionQuantity: action.portionQuantity };
        break;

        case ROTATE_CARD:
            return  { ...state, rotateCard: action.rotateCard };
        break;

        case CHANGE_BACK_IMAGE:
            return  { ...state, backImage: action.backImage };
        break;

        case VALID:
            return  { ...state, valid: action.valid };
        break;

        default:
            return state
        break;
    }
}

export default formReducer;