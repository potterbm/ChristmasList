
import React, { Component, PropTypes } from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

import globalStyles, {components} from './styles.js';

class EventListItem extends Component {
  
  showSettings() {
    
  }
  
  render() {
    return (
      <View style={[globalStyles.row, components.EventListItem_base]}>
        <Text style={components.EventListItem_name}>{this.props.name}</Text>
        <TouchableOpacity onPress={this.showSettings}>
          <Icon name="more-vert" size={20}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
  
}

class CollaboratorListItem extends Component {
  
  render() {
    return (
      <View style={[globalStyles.row, components.CollaboratorListItem_base]}>
        <Text style={components.CollaboratorListItem.name}>{this.props.name}</Text>
        <Text style={components.CollaboratorListItem.gifts}>{this.props.gifts}</Text>
      </View>
    );
  }
}

export { EventListItem, CollaboratorListItem };