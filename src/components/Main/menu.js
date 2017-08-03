import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';
import LocalDining from 'material-ui/svg-icons/maps/local-dining'


export default class SideBar extends React.Component {

  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <AppBar
            title={
              <span data-qa="header-logo">
                The Silk Route
              </span>
            }
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={this.props.handleCloseSideBar}
          />

        <Menu onChange={this.props.onMenuItemClick}>
          <MenuItem
            data-qa="drawer-ingredients"
            primaryText="Ingredients"
            leftIcon={<AppsIcon />}
            value="/ingredients"
          />
          <MenuItem
            data-qa="drawer-recipes"
            primaryText="Recipes"
            leftIcon={<LocalDining />}
            value="/recipes"
          />
        </Menu>
        </Drawer>
      </div>
    );
  }
}
