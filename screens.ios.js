import React, { Component, PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

import {
  EventListItem,
  CollaboratorListItem
} from './components.js';

import globalStyles, {screens} from './styles.js';

class EventListScreen extends Component {
  
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows([
        {
          "name": "Christmas 2015"
        },
        {
          "name": "Christmas 2016"
        },
        {
          "name": "Christmas 2017"
        }
      ])
    };
  }
  
  renderEvent(event) {
    return (
      <EventListItem name={event.name} />
    );
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.EventList]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEvent}
          style={globalStyles.list}
          contentContainerStyle={globalStyles.list_item_container}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          scrollsToTop={false}
        />
      </View>
    );
  }
}

class EventAddScreen extends Component {
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.EventAdd]}>
        <Text style={components.EventAdd_title}>Add Event</Text>
        <Text style={globalStyles.label}>Title</Text>
        <TextInput
          style={[globalStyles.input, components.EventAdd_input]}
          autoFocus={true}
          onChangeText={this._handleTitleChange}
        />
        <Button onPress={this._handleSavePress} title="Add Event" color="#4CAF50" />
      </View>
    );
  }
  
}

class CollaboratorListScreen extends Component {
  
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows([
        {
          "name": "New Shoes",
          "description": "",
          "gifts": 8
        },
        {
          "name": "",
          "description": "",
          "gifts": 8
        },
        {
          "name": "",
          "description": "",
          "gifts": 8
        }
      ])
    };
  }
  
  renderCollaborator(collaborator) {
    return (
      <CollaboratorListItem name={collaborator.name} gifts={collaborator.gifts} />
    );
  }
  
  renderFooter() {
    if(this.state.dataSource.getRowCount() > 0) {
      return (
        <View />
      );
    }
    else {
      return (
        <View style={[globalStyles.footer]}>
          <Button
            title="Invite Someone"
          />
        </View>
      );
    }
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.CollaboratorList]}>
        <ListView
          contentContainerStyle={globalStyles.list}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          scrollsToTop={false}
        />
      </View>
    );
  }
}

class CllaboratorAddScreen extends Component {
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.EventAdd]}>
        <Text style={components.EventAdd_title}>Add Event</Text>
        <Text style={globalStyles.label}>Title</Text>
        <TextInput
          style={[globalStyles.input, components.EventAdd_input]}
          autoFocus={true}
          onChangeText={this._handleTitleChange}
        />
        <Button onPress={this._handleSavePress} title="Add Event" color="#4CAF50" />
      </View>
    );
  }
  
}

class GiftListScreen extends Component {
  render() {
    return (
      <View style={[globalStyles.container, screens.GiftList]} />
    );
  }
}

export { EventListScreen, CollaboratorListScreen, GiftListScreen };