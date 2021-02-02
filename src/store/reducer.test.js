
import reducer from './reducer';
import * as actionTypes from './actions';


// A Test Suite
describe('reducer', () => {

  // Test 1
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: {
        meat: 0,
        salad: 0,
        cheese: 0,
        bacon: 0
      },
      totalPrice: 0
    })
  })

  // Test 2 
  it('should increment meat property by 1 and the totalPrice by 1.5 when a meat is added', () => {
    expect(reducer({
      ingredients: {
        meat: 0,
        salad: 0,
        cheese: 0,
        bacon: 0
      },
      totalPrice: 0
    }, {
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: 'meat'
    })).toEqual({
      ingredients: {
        meat: 1,
        salad: 0,
        cheese: 0,
        bacon: 0
      },
      totalPrice: 1.5
    })
  })
})
