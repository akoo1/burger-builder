import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControlsList.css'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' }
]

const BuildControlsList = (props) => {

  return (
    <div className='build-controls'>
      <p className='current-price'>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {
        controls.map(control =>
          <BuildControl
            key={control.label}
            label={control.label}
            addIngredientHandler={() => props.addIngredientHandler(control.type)}
            removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
            disabledInfo={props.disabledInfo[control.type]}
          />
        )
      }
      <button
        className='order-btn'
        disabled={!props.isPurchaseable}
        onClick={() => props.purchaseHandler()}
      >
        ORDER NOW
         </button>
    </div>
  )

}


export default BuildControlsList