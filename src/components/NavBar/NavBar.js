import React from 'react'
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import './NavBar.css'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';


const NavBar = (props) =>
  <header className='nav-bar'>

    <DrawerToggle clicked={props.drawerToggleClicked} />
    
    <div className='nav-bar-logo-box'>
      <Logo />
    </div>
    <nav className='desktop-only'>
      <NavigationItems />
    </nav>

  </header>



export default NavBar;