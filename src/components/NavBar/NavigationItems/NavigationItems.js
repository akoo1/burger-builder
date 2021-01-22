import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavigationItems.css'

const NavigationItems = (props) =>
  <ul className='navigation-items'>
    <li>
      <NavLink to='/' exact>Burger Builder</NavLink>
    </li>
    <li>
      <NavLink to='/orders' exact>Orders</NavLink>
    </li>
  </ul>



export default NavigationItems;