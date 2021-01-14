import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'
import './ModalWindow.css'
import Spinner from '../Spinner/Spinner'

const ModalWindow = (props) => {

  let orderSummary = null;
  if (props.show) {
    orderSummary = (
      <OrderSummary
        ingredients={props.ingredients}
        totalPrice={props.totalPrice}
        closeModalHandler={props.closeModalHandler}
        purchaseContinueHandler={props.purchaseContinueHandler}
      />
    )
  }
  if (props.isLoading) {
    orderSummary = (
      <Spinner />
    )
  }
  

  let modal = null;
  if (orderSummary) {
    modal = (
      <div className='modal'>
        {orderSummary}
      </div>
    )
  }

  return (
    <>
      <Backdrop
        show={props.show}
        closeModalHandler={props.closeModalHandler}
      />

      {modal}
    </>
  )
}


export default ModalWindow;