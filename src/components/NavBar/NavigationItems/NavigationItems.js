import React from 'react'
import './NavigationItems.css'

const NavigationItems = (props) =>
  <ul className='navigation-items'>
    <li>
      <a href="/" className={props.isActive ? 'active' : 'active'}>Burger Builder</a>
    </li>
    <li>
      <a href="/" className={props.isActive ? 'active' : null}>Checkout</a>
    </li>
  </ul>



export default NavigationItems;