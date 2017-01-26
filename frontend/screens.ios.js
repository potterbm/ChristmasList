import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
  ListView,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  CLButton,
  CLLinkButton,
  CLLabel,
  CLInput,
  CLMultilineInput,
  CollaboratorListItem,
  EventListItem,
  GiftListItem,
  GiftDetailMessages
} from './components.js';

import globalStyles, {screens, components} from './styles.js';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

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
    
    this._showCollaborators = this._showCollaborators.bind(this);
    this._showSettings = this._showSettings.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Event',
      component: EventAddScreen
    };
  }
  
  _showCollaborators() {
    this.props.navigator.push({
      component: CollaboratorListScreenWithData,
      title: 'People',
      rightButtonTitle: 'Add',
      onRightButtonPress: this.props.handleAddPress,
      passProps: {
        handleAddPress: this.props.handleAddPress
      }
    });
  }
  
  _showSettings() {
    this.props.navigator.push({
      component: EventEditScreen,
      title: 'Edit Event'
    });
  }
  
  renderEvent(event) {
    return (
      <EventListItem name={event.name} showCollaborators={this._showCollaborators} showSettings={this._showSettings} />
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
  constructor(props) {
    super(props);
    
    this._handleSavePress = this._handleSavePress.bind(this);
  }
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.screen_container, screens.EventAdd]}>
        <CLLabel>Title</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleTitleChange} />
        <CLLinkButton onPress={this._handleSavePress} text="Add Event" />
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
      "dataSource": props.usersLoading ? ds.cloneWithRows([{ name: "loading", gifts: 0 }]) : ds.cloneWithRows(props.users)
    };

    this._showGifts = this._showGifts.bind(this);
    this._showSettings = this._showSettings.bind(this);
    this.renderCollaborator = this.renderCollaborator.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Person',
      component: CollaboratorAddScreen
    };
  }
  
  _showGifts(collaborator) {
    console.log("Opening stuff");
    this.props.navigator.push({
      component: GiftListScreen,
      title: `Gift Ideas for ${collaborator.name}`,
      rightButtonTitle: 'Add',
      onRightButtonPress: this.props.handleAddPress,
      passProps: {
        gifts: collaborator.gifts,
        handleAddPress: this.props.handleAddPress
      }
    });
  }
  
  _showSettings() {
    this.props.navigator.push({
      component: CollaboratorEditScreen,
      title: 'Edit Person'
    });
  }
  
  renderCollaborator(collaborator) {
    return (
      <CollaboratorListItem collaborator={collaborator} showGifts={this._showGifts} showSettings={this._showSettings} />
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
          <CLButton text="Invite Someone" />
        </View>
      );
    }
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.CollaboratorList]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCollaborator}
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

const allUsers = gql`
  query allUsers {
    users {
      name: nickName
      gifts: ideasFor {
        name
        description
      }
    }
  }
`;

const CollaboratorListScreenWithData = graphql(allUsers, {
  props: ({ ownProps, data: { loading, users } }) => ({
    usersLoading: loading,
    users: users
  })
})(CollaboratorListScreen);

class CollaboratorAddScreen extends Component {
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.screen_container, screens.EventAdd]}>
        <CLLabel>Title</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleTitleChange} />
        <CLButton onPress={this._handleSavePress} text="Add Event" />
      </View>
    );
  }
}

class GiftListScreen extends Component {
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows(this.props.gifts)
    };
    
    this._showGiftDetail = this._showGiftDetail.bind(this);
    this.renderGift = this.renderGift.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Gift Idea',
      component: GiftAddScreen
    };
  }
  
  _showGiftDetail(gift) {
    this.props.navigator.push({
      title: gift.name,
      component: GiftDetailScreen,
      passProps: gift
    });
  }
  
  renderGift(gift) {
    return (
      <GiftListItem gift={gift} name={gift.name} description={gift.description} gifts={gift.gifts} showGiftDetail={this._showGiftDetail} />
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
          <CLButton text="Invite Someone" />
        </View>
      );
    }
  }
  
  render() {
    return (
      <View style={[globalStyles.container, screens.GiftList]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderGift}
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

class GiftAddScreen extends Component {
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.screen_container, screens.GiftAdd]}>
        <CLLabel>Title</CLLabel>
        <CLInput style={[globalStyles.input, components.EventAdd_input]} autoFocus={true} onChangeText={this._handleTitleChange} />
        <CLLabel>Description</CLLabel>
        <CLMultilineInput></CLMultilineInput>
        <CLButton onPress={this._handleSavePress} text="Add Event" />
      </View>
    );
  }
}

class GiftDetailScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  render() {
    return (
      <View style={[globalStyles.screen_container, screens.GiftDetail]}>
        <View style={[screens.GiftDetail_meta]}>
          <Text style={[globalStyles.paragraph]}>{this.props.description}</Text>
        </View>
        <GiftDetailMessages />
      </View>
    );
  }
}

export {
  CollaboratorListScreen,
  CollaboratorAddScreen,
  EventListScreen,
  EventAddScreen,
  GiftListScreen
};