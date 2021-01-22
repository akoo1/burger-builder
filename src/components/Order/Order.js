import React from 'react';
import './Order.css';


const Order = (props) => {

  // This is another way to turn an object into an array (The first way is done in GraphicalBurger.js)
  // And the reason we need to do that is because map() only works on arrays.
  // {meat: 1, cheese: 1, salad: 1, bacon: 1} => [ {name: meat, quantity: 1}, {name: cheese, quantity: 1}, ... ] 
  const ingredients = []

  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        quantity: props.ingredients[ingredientName]
      }
    )
  }

  return (
    <div className='order-container'>
      <p>
        <b>Ingredients: </b>
        {
          ingredients.map((ingredient, index) =>
            <span className='ingredient' key={index}>{ingredient.name} ({ingredient.quantity})</span>
          )
        }
      </p>
      <br/>
      <p>Price: <b>${props.price.toFixed(2)}</b></p>
    </div>

  )

}

export default Order;
