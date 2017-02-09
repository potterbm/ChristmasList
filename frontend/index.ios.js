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

import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';

import appReducer from './reducers.js';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

import globalStyles, {colors} from './styles.js';

import {
  EventListScreen,
  EventAddScreen,
  GiftListScreen,
  LoginRegisterScreen,
  UserListScreen
} from './screens.ios.js';

let store = createStore(appReducer);

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this._handleAddPress = this._handleAddPress.bind(this);
  }
  
  _handleAddPress() {
    this.refs.nav.push(this.refs.nav.navigationContext.currentRoute.component.addScreenRoute());
  }
  
  render() {
    Icon.getImageSource('arrow-back', 20, colors.white);
    Icon.getImageSource('add', 20, colors.white);
    
    if(!this.props.auth.logged_in) {
      return (
        <LoginRegisterScreen />
      );
    }
    else {
      return (
        <NavigatorIOS ref="nav"
          barTintColor={colors.cyan}
          tintColor={colors.white}
          titleTextColor={colors.white}
          shadowHidden={false}
          initialRoute={{
            component: EventListScreen,
            title: 'Events',
            rightButtonTitle: 'Add',
            onRightButtonPress: this._handleAddPress,
            shadowHidden: false,
            passProps: {
              handleAddPress: this._handleAddPress
            }
          }}
          style={{ flex: 1 }}
        />
      );
    }
  }
}
const ConnectedApp = connect(
  function(state) {
    return {
      auth: state.auth
    };
  }
)(App);


export default class ChristmasList extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ChristmasList', () => ChristmasList);
