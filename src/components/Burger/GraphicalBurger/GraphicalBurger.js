import React from 'react'
import './GraphicalBurger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const GraphicalBurger = (props) => {

  // The Object.keys method will turn an object into an array of its keys
  const ingredientsArr = Object.keys(props.ingredients)  // [meat, salad, bacon]

  // Array() constructor creates an array with specified number of empty values. Ex. [,] length = 2 
  // We don't care about what those values are, we just need an array with the right length for each ingredient
  // so we can use map() to populate the right number of that ingredient.
  let transformedIngredients = ingredientsArr.map(name => 
    [...Array(props.ingredients[name])]  // [,]
      .map( (x, index) => 
        <BurgerIngredient key={name + index} type={name} />
      ))  
      .reduce((arr, ele) => arr.concat(ele), [])  
      // To flatten the array
      // [ [obj1, obj2], [obj3], [obj4], [obj5] ]  => [obj1, obj2, obj3, obj4, obj5 ]

      
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className='graphical-burger'>
      <BurgerIngredient type='breadTop' />
      {transformedIngredients}
      <BurgerIngredient type='breadBottom' />
    </div>
  )
}



export default GraphicalBurger;