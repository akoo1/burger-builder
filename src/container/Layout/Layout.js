import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import './Layout.css'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <>
        <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closeModalHandler={this.closeSideDrawerHandler}
        />
        <main className='content'>
          {this.props.children}
        </main>
      </>
    )
  }

}


export default Layout;
