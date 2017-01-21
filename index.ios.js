/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

import globalStyles from './styles.js';

import {
  EventListScreen,
  EventAddScreen,
  CollaboratorListScreen,
  GiftListScreen
} from './screens.ios.js';

export default class ChristmasList extends Component {
  
  constructor(props) {
    super(props);
    
    this._handleAddPress = this._handleAddPress.bind(this);
  }
  
  _handleAddPress() {
    switch(this.refs.nav.navigationContext.currentRoute.title) {
      
      case "Events":
        this.refs.nav.push({
          title: 'Add Event',
          component: EventAddScreen,
          backButtonImage: Icon.getImageSource("chevron-left", 20, "#000000")
        });
        break;
      
      default:
        return;
    }
  }
  
  render() {
    return (
      <NavigatorIOS ref="nav"
        initialRoute={{
          component: EventListScreen,
          title: 'Events',
          rightButtonTitle: '+',
          onRightButtonPress: this._handleAddPress
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

AppRegistry.registerComponent('ChristmasList', () => ChristmasList);
