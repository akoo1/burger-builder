import React from 'react'

import burgerLogoImg from '../../assets/images/burger-logo.png'
import './Logo.css'

const Logo = (props) => 
  <div className='logo'>
    <img src={burgerLogoImg} alt='burger-logo'/>
  </div>

export default Logo;