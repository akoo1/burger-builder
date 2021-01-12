import React, { Component } from 'react'
import BuildControlsList from '../../components/Burger/BuildControlsList/BuildControlsList'
import GraphicalBurger from '../../components/Burger/GraphicalBurger/GraphicalBurger'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow'

const INGREDIENT_PRICES = {
  meat: 1.5,
  cheese: 0.5,
  bacon: 0.75,
  salad: 0.5
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0
    },
    totalPrice: 0,
    isPurchaseable: false,
    isPurchasing: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    // This creates a deep copy of the object 
    // (for arrays and objects, state should be updated in an immutable way, cuz they are reference types)
    let updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = updatedCount
    let updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount - 1
    let updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = updatedCount
    let updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

  getDisabledInfo = () => {
    let disabledInfo = { ...this.state.ingredients }
    // The for..in is used to iterate through an object
    for (let key in disabledInfo) {
      // Assign a boolean value to each ingredient in the new ingredients object
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    // { meat: false, salad: true, cheese: true ...}
    return disabledInfo
  }

  updatePurchaseState = (updatedIngredients) => {
    let sum = 0
    for (let key in updatedIngredients) {
      sum += updatedIngredients[key]
    }
    const updatedPurchaseState = sum > 0
    this.setState({ isPurchaseable: updatedPurchaseState })
  }

  purchaseHandler = () => {
    this.setState({ isPurchasing: true })
  }

  closeModalHandler = () => {
    this.setState({ isPurchasing: false })
  }

  purchaseContinueHandler = () => {
    this.setState({ isPurchasing: false })
    alert('No! Stop eating fast food!')
  }


  render() {

    return (
      <>
        <div>
          <GraphicalBurger ingredients={this.state.ingredients} />
        </div>

        <div>
          {
            this.state.isPurchasing ?
              <ModalWindow
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                show={this.state.isPurchasing}
                closeModalHandler={this.closeModalHandler}
                purchaseContinueHandler={this.purchaseContinueHandler}
              />
              : null
          }

          <BuildControlsList
            addIngredientHandler={this.addIngredientHandler}
            removeIngredientHandler={this.removeIngredientHandler}
            disabledInfo={this.getDisabledInfo()}
            price={this.state.totalPrice}
            isPurchaseable={this.state.isPurchaseable}
            purchaseHandler={this.purchaseHandler}
          />
        </div>
      </>
    )
  }

}




export default BurgerBuilder;