import formReducer from './formReducer'
import {
    NUMBER_CARD,
    NAME,
    SHELF_LIFE,
    CVV,
    PORTION_QUANTITY,
    VALID,
    ROTATE_CARD,
    CHANGE_BACK_IMAGE
} from '../constants/constants.js';

test('reducer initial state null', () => {
    const action = { type: NAME, cardName: 'Danillo Romano' }
    const state = formReducer(undefined, action)
    expect(state).toEqual({
        "backImage": false,
        "cardName": "Danillo Romano",
        "cardNumber": "",
        "cvv": "",
        "portionQuantity": 0,
        "rotateCard": false,
        "shelfLife": "",
        "valid": false,
    })
})


//   test('reducer increment', () => {
//     const initialState = {
//       count: 0
//     }
//     const action = { type: 'INCREMENT', value: 10 }
//     const state = reducer(initialState, action)
//     expect(state).toEqual({ count: 10 })
//   })

//   test('reducer decremnt', () => {
//     const initialState = {
//       count: 0
//     }
//     const action = { type: 'DECREMENT', value: 10 }
//     const state = reducer(initialState, action)
//     expect(state).toEqual({ count: 10 })
//   })