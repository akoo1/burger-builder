import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavigationItems.css'

const NavigationItems = (props) => {

  let nav = (
    <>
      <li>
        <NavLink to='/' exact>Burger Builder</NavLink>
      </li>
      <li>
        <NavLink to='/auth' exact>Login</NavLink>
      </li>
    </>
  )

  if (props.isAuthenticated) {
    nav = (
      <>
        <li>
          <NavLink to='/' exact>Burger Builder</NavLink>
        </li>
        <li>
          <NavLink to='/orders' exact>Orders</NavLink>
        </li>
        <li>
          <NavLink to='/logout' exact>Logout</NavLink>
        </li>
      </>
    )

  }


  return (
    <ul className='navigation-items'>
      {nav}
    </ul>
  )
}




export default NavigationItems;