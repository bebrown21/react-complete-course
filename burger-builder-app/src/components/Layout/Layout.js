import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    displaySideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      displaySideDrawer: false
    });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        displaySideDrawer: !prevState.displaySideDrawer
      }
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.displaySideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;