
import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
  meat: 1.5,
  cheese: 0.5,
  bacon: 0.75,
  salad: 0.5
}



const initialState = {
  ingredients: {
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0
  },
  totalPrice: 0
}



const reducer = (state = initialState, action) => {

  if (action.type === actionTypes.ADD_INGREDIENT) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,   // deep copy
        // new ES6 syntax to dynamically overwrite/create a property in an object
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1 
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
  }
  else if (action.type === actionTypes.REMOVE_INGREDIENT) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,  
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
  }



  return state
}



export default reducer;