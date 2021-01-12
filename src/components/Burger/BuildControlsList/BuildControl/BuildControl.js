import React from 'react'
import './BuildControl.css'


const BuildControl = (props) => {

  return (
    <div className='build-control'>
      <div className='label'>{props.label}</div>
      <button
        className='less'
        onClick={props.removeIngredientHandler}
        disabled={props.disabledInfo}
      >
        Less
      </button>
      <button
        className='more'
        onClick={props.addIngredientHandler}
      >
        More
      </button>
    </div>
  )
}


export default BuildControl