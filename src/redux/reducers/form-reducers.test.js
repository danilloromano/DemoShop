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

const initialState = {
    cardNumber: '',
    cardName: '',
    shelfLife: '',
    cvv: '',
    portionQuantity: 0,
    rotateCard: false,
    valid: false,
    backImage: false
}

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


  test('reducer receiving NUMBER_CARD', () => {
    const action = { type: NUMBER_CARD, cardNumber: 1010101010101010 }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": 1010101010101010,
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })

  test('reducer receiving SHELF_LIFE', () => {
    const action = { type: SHELF_LIFE, shelfLife: '09/23' }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "09/23",
            "valid": false,
        }
    )
  })

  test('reducer receiving CVV', () => {
    const action = { type: CVV, cvv: "103" }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "103",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })

  test('reducer receiving PORTION_QUANTITY', () => {
    const action = { type: PORTION_QUANTITY, portionQuantity: 10 }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 10,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })

  test('reducer receiving VALID', () => {
    const action = { type: VALID, valid: true }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": true,
        }
    )
  })

  test('reducer receiving ROTATE_CARD', () => {
    const action = { type: ROTATE_CARD, rotateCard: true }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": true,
            "shelfLife": "",
            "valid": false,
        }
    )
  })

  test('reducer receiving CHANGE_BACK_IMAGE', () => {
    const action = { type: CHANGE_BACK_IMAGE, backImage: true }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": true,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })

  test('reducer receiving CHANGE_BACK_IMAGE', () => {
    const action = { type: 'XABLAU', xabalu: true }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": "",
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })