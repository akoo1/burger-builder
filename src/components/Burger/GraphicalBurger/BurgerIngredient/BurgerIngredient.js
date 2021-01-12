import React from 'react'
import PropTypes from 'prop-types'

import './BurgerIngredient.css'

const BurgerIngredient = (props) => {

  let ingredient = null

  if (props.type === 'breadTop') {
    ingredient = (
      <div className='bread-top'>
        <div className='seeds1'></div>
        <div className='seeds2'></div>
      </div>
    )
  }
  else if (props.type === 'breadBottom') {
    ingredient = <div className='bread-bottom'></div>
  }
  else if (props.type === 'meat') {
    ingredient = <div className='meat'></div>
  }
  else if (props.type === 'cheese') {
    ingredient = <div className='cheese'></div>
  }
  else if (props.type === 'salad') {
    ingredient = <div className='salad'></div>
  }
  else if (props.type === 'bacon') {
    ingredient = <div className='bacon'></div>
  }


  return ingredient
}




BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;