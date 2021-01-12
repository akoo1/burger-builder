import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'
import './ModalWindow.css'

const ModalWindow = (props) =>

  <>
    <Backdrop
      show={props.show}
      closeModalHandler={props.closeModalHandler}
    />
    <div className='modal'>
      <OrderSummary
        ingredients={props.ingredients}
        totalPrice={props.totalPrice}
        closeModalHandler={props.closeModalHandler}
        purchaseContinueHandler={props.purchaseContinueHandler}
      />
    </div>
  </>


export default ModalWindow;