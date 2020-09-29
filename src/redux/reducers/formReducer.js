
import { 
    NUMBER_CARD,
    NAME, 
    SHELF_LIFE, 
    CVV, 
    PORTION_QUANTITY, 
    VALID,
    ROTATE_CARD,
    CHANGE_BACK_IMAGE
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
            return  { ...state, cardNumber: action.cardNumber.toString().replace(/\s+/g, '') };

        case NAME:
            return  { ...state, cardName: action.cardName };

        case SHELF_LIFE:
            return  { ...state, shelfLife: action.shelfLife };

        case CVV:
            return  { ...state, cvv: action.cvv };

        case PORTION_QUANTITY:
            return  { ...state, portionQuantity: action.portionQuantity };

        case ROTATE_CARD:
            return  { ...state, rotateCard: action.rotateCard };

        case CHANGE_BACK_IMAGE:
            return  { ...state, backImage: action.backImage };

        case VALID:
            return  { ...state, valid: action.valid };

        default:
            return state
    }
}

export default formReducer;