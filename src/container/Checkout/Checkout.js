import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './Checkout.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {

  // state = {
  //   ingredients: {},
  //   totalPrice: 0
  // }

  checkoutCancelHandler = () => {
    this.props.history.goBack()
  }
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }




  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          exact
          component={ContactData}
        />
      </div>
    )
  }





  // // Getting ingredients through Query Params after clicking continue in ModalWindow
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search)

  //   const ingredients = {}
  //   let totalPrice = 0
  //   for (let param of query.entries()) {
  //     // query.entries() returns an array of key/value pairs for the search params
  //     // [meat, 1, salad, 1, ...] 
  //     if (param[0] === 'price') {
  //       totalPrice = param[1]
  //     }
  //     else {
  //       ingredients[param[0]] = +param[1]
  //     }
  //   }

  //   this.setState({ ingredients, totalPrice })
  // }

}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}


export default connect(mapStateToProps)(Checkout);
