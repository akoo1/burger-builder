import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import './SideDrawer.css'


const SideDrawer = (props) => {

  // To dynamically toggle the side bar
  let attachedClasses = ['side-drawer', 'close']
  if (props.show) {
    attachedClasses = ['side-drawer', 'open']
  }

  return (
    <>
      <Backdrop
        show={props.show}
        closeModalHandler={props.closeModalHandler}
      />
      <div className={attachedClasses.join(' ')}>
        <div className='side-drawer-logo-box'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}


export default SideDrawer;