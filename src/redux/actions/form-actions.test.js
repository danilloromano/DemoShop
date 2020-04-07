import { 
    updateCardNumber,  
    updateName,
    updateShelfLife,
    updateCVV,
    updatePortionQuantity,
    updateValid,
    rotateCard,
    changeBackImage
} from './form-actions.js'

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

test('Action: updateCardNumber', () => {
  let number = updateCardNumber(1010101010101010)
  expect(number).toEqual({
    type: NUMBER_CARD,
    cardNumber  : 1010101010101010
  })
})

test('Action: updateName', () => {
    let name = updateName('Danillo Romano')
    expect(name).toEqual({
        type: NAME,
        cardName  : 'Danillo Romano'
    })
})

test('Action: updateShelfLife', () => {
    let shelf = updateShelfLife('05/22')
    expect(shelf).toEqual({
        type: SHELF_LIFE,
        shelfLife  : '05/22'
    })
})

test('Action: updateCVV', () => {
    let cvvv = updateCVV(107)
    expect(cvvv).toEqual({
        type: CVV,
        cvv  : 107
    })
})

test('Action: updatePortionQuantity', () => {
    let PortionQuantity = updatePortionQuantity(10)
    expect(PortionQuantity).toEqual({
        type: PORTION_QUANTITY,
        portionQuantity  : 10
    })
})

test('Action: updateValid', () => {
    let Valid = updateValid(true)
    expect(Valid).toEqual({
        type: VALID,
        valid  : true
    })
})

test('Action: rotateCard', () => {
    let rotate = rotateCard(true)
    expect(rotate).toEqual({
        type: ROTATE_CARD,
        rotateCard  : true
    })
})

test('Action: changeBackImage', () => {
    let BackImage = changeBackImage(true)
    expect(BackImage).toEqual({
        type: CHANGE_BACK_IMAGE,
        backImage  : true
    })
})