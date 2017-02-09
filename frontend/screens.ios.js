import React, { Component, PropTypes } from 'react';

import {
  ListView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {connect, Provider} from 'react-redux';

import {
  CLAuthButtonFacebook,
  CLAuthButtonGoogle,
  CLButton,
  CLLinkButton,
  CLLabel,
  CLInput,
  CLMultilineInput,
  CLWhiteButton,
  CLWhiteInput,
  CLWhiteLinkButton,
  UserListItem,
  EventListItem,
  IdeaListItem,
  IdeaDetailMessages,
  Logo
} from './components.js';

import actions from './actions.js';

import globalStyles, {colors, screens} from './styles.js';

import Icon from 'react-native-vector-icons/MaterialIcons.js';
import LinearGradient from 'react-native-linear-gradient';


class RawLoginRegisterScreen extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      oauth: true,
      username: "",
      password: ""
    };
    
    this._updateUsername = this._updateUsername.bind(this);
    this._updatePassword = this._updatePassword.bind(this);
    this._showEmail = this._showEmail.bind(this);
    this._showOAuth = this._showOAuth.bind(this);
    this.doGoogleAuth = this.doGoogleAuth.bind(this);
    this.doFacebookAuth = this.doFacebookAuth.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.doRegister = this.doRegister.bind(this);
  }
  
  _updateUsername(newUsername) {
    this.setState({ username: newUsername });
  }
  
  _updatePassword(newPassword) {
    this.setState({ password: newPassword });
  }
  
  _showEmail() {
    this.setState({ oauth: false });
  }
  
  _showOAuth() {
    this.setState({ oauth: true });
  }
  
  doLogin() {
    this.props.login(this.state.username, this.state.password);
  }
  
  doRegister() {
    this.props.register(this.state.username, this.state.password);
  }
  
  doGoogleAuth() {
    this.props.login_google();
  }
  
  doFacebookAuth() {
    this.props.login_facebook();
  }
  
  _renderOAuth() {
    return (
      <LinearGradient start={{x: -0.25, y: -0.25}} end={{x: 1.0, y: 1.0}} locations={[0.0, 0.72, 0.77, 1.0]} colors={[colors.amber, colors.cyan, colors.cyan, colors.dark_cyan]} style={[globalStyles.container, screens.LoginRegisterScreen_base]}>
        
        <Logo />
        <CLAuthButtonFacebook style={screens.LoginRegisterScreen_auth_button} onPress={this.doFacebookAuth} />
        <CLAuthButtonGoogle style={screens.LoginRegisterScreen_auth_button} onPress={this.doGoogleAuth} />
        <CLWhiteLinkButton style={screens.LoginRegisterScreen_link_button} title="Don't have an account?" onPress={this._showEmail} />
      </LinearGradient>
    );
  }
  
  _renderEmail() {
    return (
      <LinearGradient start={{x: -0.25, y: -0.25}} end={{x: 1.0, y: 1.0}} locations={[0.0, 0.72, 0.77, 1.0]} colors={[colors.amber, colors.cyan, colors.cyan, colors.dark_cyan]} style={[globalStyles.container, screens.LoginRegisterScreen_base]}>
        <CLWhiteInput style={screens.LoginRegisterScreen_input} placeholder="Email" onChangeText={this._updateUsername} />
        <CLWhiteInput style={screens.LoginRegisterScreen_input} placeholder="Password" onChangeText={this._updatePassword} />
        
        <View style={[screens.LoginRegisterScreen_button_container]}>
          <CLWhiteButton style={screens.LoginRegisterScreen_button} title="Register" onPress={this.doRegister} />
          <CLWhiteButton style={screens.LoginRegisterScreen_button} title="Log In" onPress={this.doLogin} />
        </View>
        <CLWhiteLinkButton style={screens.LoginRegisterScreen_link_button} title="Forgot password?" />
      </LinearGradient>
    );
  }
  
  render() {
    if(this.state.oauth) {
      return this._renderOAuth();
    }
    else {
      return this._renderEmail();
    }
  }
}

const LoginRegisterScreen = connect(
  function(state) {
    return {
      auth: state.auth
    };
  },
  function(dispatch) {
    return {
      login_google: function() {
        dispatch(actions.login_google());
      },
      login_facebook: function() {
        dispatch(actions.login_facebook());
      },
      login_email: function(username, password) {
        dispatch(actions.login_email(username, password));
      },
      register: function(username, password) {
        dispatch(actions.register(username, password));
      }
    };
  }
)(RawLoginRegisterScreen);


class RawEventListScreen extends Component {
  
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows(this.props.events)
    };
    
    this._navigateToUsers = this._navigateToUsers.bind(this);
    this._navigateToEdit = this._navigateToEdit.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Event',
      component: EventAddScreen
    };
  }
  
  _navigateToUsers() {
    this.props.navigator.push({
      component: UserListScreen,
      title: 'People',
      rightButtonTitle: 'Add',
      onRightButtonPress: this.props.handleAddPress,
      passProps: {
        handleAddPress: this.props.handleAddPress
      }
    });
  }
  
  _navigateToEdit(event) {
    return function() {
      this.props.navigator.push({
        component: EventEditScreen,
        title: 'Edit Event',
        passProps: {
          event: event
        }
      });
    }.bind(this);
  }
  
  renderEvent(event) {
    return (
      <EventListItem name={event.name} id={event.id} showUsers={this._navigateToUsers} showSettings={this._navigateToEdit(event)} />
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

const EventListScreen = connect(
  function(state) {
    return { events: state.events };
  }
)(RawEventListScreen);


class RawEventAddScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.event.name
    };
    
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleSavePress = this._handleSavePress.bind(this);
  }
  
  _handleNameChange(newName) {
    this.setState({ name: newName });
  }
  
  _handleSavePress() {
    this.props.addEvent(this.state.name);
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.screen_container, screens.EventAdd]}>
        <CLLabel>Name</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleNameChange} />
        <CLLinkButton onPress={this._handleSavePress} text="Add Event" />
      </View>
    );
  }
  
}

const EventAddScreen = connect(
  function(state) {
    return {};
  },
  function(dispatch) {
    return {
      addEvent: function(name) {
        dispatch(actions.addEvent(name));
      }
    };
  }
)(RawEventAddScreen);


class RawEventEditScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.event.name
    };
    
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleSavePress = this._handleSavePress.bind(this);
  }
  
  _handleNameChange(newName) {
    this.setState({name: newName});
  }
  
  _handleSavePress() {
    this.props.editEvent(this.props.event.id, {name: this.state.name});
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.screen_container, screens.EventAdd]}>
        <CLLabel>Name</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleNameChange} value={this.state.name} />
        <CLButton onPress={this._handleSavePress} text="Save" />
      </View>
    );
  }
}

const EventEditScreen = connect(
  function(state) {
    return {};
  },
  function(dispatch) {
    return {
      editEvent: function(id, updated) {
        dispatch(actions.editEvent(id, updated));
      }
    };
  }
)(RawEventEditScreen);



class RawUserListScreen extends Component {
  
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows(this.props.users)
    };
    
    this._navigateToIdeas = this._navigateToIdeas.bind(this);
    this._navigateToEdit = this._navigateToEdit.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Person',
      component: UserAddScreen
    };
  }
  
  _navigateToIdeas() {
    this.props.navigator.push({
      component: IdeaListScreen,
      title: 'Idea Ideas',
      rightButtonTitle: 'Add',
      onRightButtonPress: this.props.handleAddPress,
      passProps: {
        handleAddPress: this.props.handleAddPress
      }
    });
  }
  
  _navigateToEdit() {
    this.props.navigator.push({
      component: UserEditScreen,
      title: 'Edit Person',
      passProps: {
        
      }
    });
  }
  
  renderUser(user) {
    return (
      <UserListItem nickName={user.nickName} firstName={user.firstName} lastName={user.lastName} showIdeas={this._navigateToIdeas} showSettings={this._navigateToEdit} />
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
      <View style={[globalStyles.container, screens.UserList]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderUser}
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
const UserListScreen = connect(function(state) { return { users: state.users }; })(RawUserListScreen);


class RawUserAddScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.user.name
    };
    
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleSavePress = this._handleSavePress.bind(this);
  }
  
  _handleNameChange(newName) {
    this.setState({ name: newName });
  }
  
  _handleSavePress() {
    this.props.addUser(this.state.name);
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.screen_container, screens.UserAdd]}>
        <CLLabel>Name</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleNameChange} />
        <CLLinkButton onPress={this._handleSavePress} text="Add User" />
      </View>
    );
  }
}

const UserAddScreen = connect(
  function(state) {
    return {};
  },
  function(dispatch) {
    return {
      addUser: function(name) {
        dispatch(actions.addUser(name));
      }
    };
  }
)(RawUserAddScreen);



class RawUserEditScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.user.name
    };
    
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleSavePress = this._handleSavePress.bind(this);
  }
  
  _handleNameChange(newName) {
    this.setState({ name: newName });
  }
  
  _handleSavePress() {
    this.props.addUser(this.state.name);
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.screen_container, screens.UserAdd]}>
        <CLLabel>Name</CLLabel>
        <CLInput autoFocus={true} onChangeText={this._handleNameChange} />
        <CLLinkButton onPress={this._handleSavePress} text="Add User" />
      </View>
    );
  }
}

const UserEditScreen = connect(
  function(state) {
    return {};
  },
  function(dispatch) {
    return {
      addUser: function(name) {
        dispatch(actions.addUser(name));
      }
    };
  }
)(RawUserEditScreen);



class RawIdeaListScreen extends Component {
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      "rowHasChanged": function(r1, r2) {
        return r1 !== r2;
      }
    });
    
    this.state = {
      "dataSource": ds.cloneWithRows(this.props.ideas)
    };
    
    this._showIdeaDetail = this._showIdeaDetail.bind(this);
    this.renderIdea = this.renderIdea.bind(this);
  }
  
  static addScreenRoute() {
    return {
      title: 'Add Idea',
      component: IdeaAddScreen
    };
  }
  
  _showIdeaDetail(idea) {
    this.props.navigator.push({
      title: gift.name,
      component: IdeaDetailScreen,
      passProps: gift
    });
  }
  
  renderIdea(idea) {
    return (
      <IdeaListItem idea={idea} name={idea.name} description={idea.description} ideas={idea.ideas} showIdeaDetail={this._showIdeaDetail} />
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
      <View style={[globalStyles.container, screens.IdeaList]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderIdea}
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

const IdeaListScreen = connect(
  function(state) {
    return { ideas: state.ideas };
  }
)(RawIdeaListScreen);



class IdeaAddScreen extends Component {
  
  _handleTitleChange(newTitle) {
    
  }
  
  _handleSavePress() {
    this.props.navigator.pop();
  }
  
  render() {
    return (
      <View style={[globalStyles.screen_container, screens.IdeaAdd]}>
        <CLLabel>Title</CLLabel>
        <CLInput style={[globalStyles.input, components.EventAdd_input]} autoFocus={true} onChangeText={this._handleTitleChange} />
        <CLLabel>Description</CLLabel>
        <CLMultilineInput></CLMultilineInput>
        <CLButton onPress={this._handleSavePress} text="Add Event" />
      </View>
    );
  }
}

class IdeaDetailScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  render() {
    return (
      <View style={[globalStyles.screen_container, screens.IdeaDetail]}>
        <View style={[screens.IdeaDetail_meta]}>
          <Text style={[globalStyles.paragraph]}>{this.props.description}</Text>
        </View>
        <IdeaDetailMessages />
      </View>
    );
  }
}

export {
  EventListScreen,
  EventAddScreen,
  EventEditScreen,
  IdeaListScreen,
  LoginRegisterScreen,
  UserListScreen,
  UserAddScreen
};