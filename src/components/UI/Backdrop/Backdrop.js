import React from 'react'
import './Backdrop.css'

const Backdrop = (props) =>
  props.show ?
    <div className='backdrop'
      onClick={() => props.closeModalHandler()}
    >
    </div>
    : null

export default Backdrop;