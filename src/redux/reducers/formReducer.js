
import { 
    NUMBER_CARD,
    NAME, 
    SHELF_LIFE, 
    CVV, 
    PORTION_QUANTITY, 
    VALID
} from '../constants/constants.js'

const INITIAL_STATE = {
    numberCard: '',
    name: '',
    shelfLife: '',
    cvv: '',
    portionQuantity: 0,
    valid: false
}

const formReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case NUMBER_CARD:
            return  { ...state, numberCard: action.value };
        break;

        case NAME:
            return  { ...state, name: action.value };
        break;

        case SHELF_LIFE:
            return  { ...state, shelfLife: action.value };
        break;

        case CVV:
            return  { ...state, cvv: action.value };
        break;

        case PORTION_QUANTITY:
            return  { ...state, portionQuantity: action.value };
        break;

        case VALID:
            return  { ...state, valid: action.value };
        break;

        default:
            return state
        break;
    }
}

export default formReducer;