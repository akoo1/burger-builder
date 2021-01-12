import React from 'react'
import './OrderSummary.css'

const OrderSummary = (props) => {

  // The Object.keys() method converts an object into an array of keys
  const ingredientsArr = Object.keys(props.ingredients)

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious Krabby Patty with the following ingredients:</p>
      <ul className='order-sum-list'>
        {
          ingredientsArr.map((key, index) =>
            <li key={index}>
              <span className='order-sum-ingre-name'>{key}</span>: {props.ingredients[key]}
            </li>
          )
        }
      </ul>
      <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to check out?</p>
      <button
        className='btn order-cancel-btn'
        onClick={() => props.closeModalHandler()}>CANCEL</button>
      <button
        className='btn order-continue-btn'
        onClick={() => props.purchaseContinueHandler()}>CONTINUE</button>
    </div>
  )
}

export default OrderSummary;