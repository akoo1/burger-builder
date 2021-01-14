import React from 'react'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow';

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <ModalWindow show>Something went wrong!</ModalWindow>
        <WrappedComponent {...props} />
      </>
    )
  }

}


export default withErrorHandler;