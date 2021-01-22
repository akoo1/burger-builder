import React from 'react';
import GraphicalBurger from '../Burger/GraphicalBurger/GraphicalBurger';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {

  return (
    <div className='checkout-sum-container'>
      <h1>We hope you will enjoy!</h1>

      <GraphicalBurger ingredients={props.ingredients} />

      <div>
        <button
          className='my-btn cancel-btn'
          onClick={() => props.checkoutCancelHandler()}
        >
          Cancel
        </button>
        <button
          className='my-btn continue-btn'
          onClick={() => props.checkoutContinueHandler()}
        >
          Continue
          </button>
      </div>
    </div>
  )
}


export default CheckoutSummary;