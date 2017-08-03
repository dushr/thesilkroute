import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import AppBar from 'material-ui/AppBar';

import SideBar from './menu.js';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleShowSideBar = () => {
    this.setState({open: true})
  };

  handleCloseSideBar = () => {
    this.setState({open: false})
  };

  onMenuItemClick = (target, value) => {
    this.props.push(value);
    this.setState({open: false})
  }

  render() {
    return (
    <div data-qa="container" className="main">
      <AppBar
        title={
          <span data-qa="header-logo">
            The Silk Route
          </span>
        }
        onLeftIconButtonTouchTap={this.handleShowSideBar}
      />
      <SideBar 
        open={this.state.open}
        handleCloseSideBar={this.handleCloseSideBar}
        onMenuItemClick={this.onMenuItemClick}
      />
      {this.props.children}
    </div>
  )};
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    push,
  }, dispatch)
);


Main = connect(null, mapDispatchToProps)(Main);

export default Main;
