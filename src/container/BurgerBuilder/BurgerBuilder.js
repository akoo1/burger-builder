import React, { Component } from 'react'
import axios from '../../Axios/axios-orders';
import { connect } from 'react-redux';


import BuildControlsList from '../../components/Burger/BuildControlsList/BuildControlsList';
import GraphicalBurger from '../../components/Burger/GraphicalBurger/GraphicalBurger';
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {

  state = {
    // ingredients: {
    //   meat: 0,
    //   salad: 0,
    //   cheese: 0,
    //   bacon: 0
    // },
    // totalPrice: 0,

    // These will our "Local UI state", they can co-exist with Redux  
    isPurchasing: false,
    isLoading: false,
    networkError: false
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type]
  //   const updatedCount = oldCount + 1
  //   // This creates a deep copy of the object 
  //   // (for arrays and objects, state should be updated in an immutable way, cuz they are reference types)
  //   let updatedIngredients = { ...this.state.ingredients }
  //   updatedIngredients[type] = updatedCount

  //   let updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
  //   this.setState({
  //     ingredients: updatedIngredients,
  //     totalPrice: updatedTotalPrice
  //   })
  //   this.updatePurchaseState(updatedIngredients)
  // }

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type]
  //   const updatedCount = oldCount - 1
  //   let updatedIngredients = { ...this.state.ingredients }
  //   updatedIngredients[type] = updatedCount
  //   let updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
  //   this.setState({
  //     ingredients: updatedIngredients,
  //     totalPrice: updatedTotalPrice
  //   })
  //   this.updatePurchaseState(updatedIngredients)
  // }

  getDisabledInfo = () => {
    let disabledInfo = { ...this.props.ingredients }
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
    return sum > 0
  }


  orderHandler = () => {
    this.setState({ isPurchasing: true })
  }
  closeModalHandler = () => {
    this.setState({ isPurchasing: false })
  }
  purchaseCancelHandler = () => {
    this.setState({ isPurchasing: false })
  }

  purchaseContinueHandler = () => {

    // // Passing ingredients through Query Params to the Checkout page
    // const queryParams = []
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    // }
    // queryParams.push('price=' + this.state.totalPrice)
    // const queryString = queryParams.join('&')

    this.props.history.push('/checkout')
  }


  render() {

    return (
      this.state.networkError ? <p>Couldn't not load ingredients</p>
        :
        <>
          <GraphicalBurger ingredients={this.props.ingredients} />

          <ModalWindow
            ingredients={this.props.ingredients}
            totalPrice={this.props.totalPrice}
            show={this.state.isPurchasing}
            isLoading={this.state.isLoading}
            closeModalHandler={this.closeModalHandler}
            purchaseCancelHandler={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
          />

          <BuildControlsList
            addIngredientHandler={this.props.onIngredientAdded}
            removeIngredientHandler={this.props.onIngredientRemoved}
            disabledInfo={this.getDisabledInfo()}
            price={this.props.totalPrice}
            isPurchaseable={this.updatePurchaseState(this.props.ingredients)}
            orderHandler={this.orderHandler}
          />
        </>
    )
  }

  // fetching data from our database
  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        this.setState({ networkError: true })
      })
  }

}





const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);