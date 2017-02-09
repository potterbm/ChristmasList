
import React, { Component, PropTypes } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

import globalStyles, {colors, components} from './styles.js';

class Logo extends Component {
  render() {
    return (
      <View style={[components.logo_container]}>
        <Text style={[components.logo_text]}>Idea List</Text>
      </View>
    );
  }
}

class CLButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.button, this.props.style]} onPress={this.props.onPress}><Text style={[globalStyles.button_text]}>{text.toUpperCase()}</Text></TouchableOpacity>
    );
  }
}

class CLWhiteButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.button, globalStyles.white_button, this.props.style]} onPress={this.props.onPress}><Text style={[globalStyles.button_text, globalStyles.white_button_text]}>{text.toUpperCase()}</Text></TouchableOpacity>
    );
  }
}

class CLLinkButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.link_button, this.props.style]} onPress={this.props.onPress}><Text style={[globalStyles.link_button_text]}>{text}</Text></TouchableOpacity>
    );
  }
}

class CLWhiteLinkButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.link_button, globalStyles.white_link_button, this.props.style]} onPress={this.props.onPress}><Text style={[globalStyles.link_button_text, globalStyles.white_link_button_text]}>{text}</Text></TouchableOpacity>
    );
  }
}

class CLAuthButtonGoogle extends Component {
  render () {
    return (
      <TouchableOpacity style={[globalStyles.button, globalStyles.white_button, globalStyles.auth_button, this.props.style]} onPress={this.props.onPress}>
        <Icon name="android" size={20} style={[globalStyles.auth_button_icon]}></Icon>
        <Text style={[globalStyles.button_text, globalStyles.white_button_text, globalStyles.auth_button_text]}>Sign In with Google</Text>
      </TouchableOpacity>
    );
  }
}

class CLAuthButtonFacebook extends Component {
  render () {
    return (
      <TouchableOpacity style={[globalStyles.button, globalStyles.white_button, globalStyles.auth_button, this.props.style]} onPress={this.props.onPress}>
        <Icon name="account-circle" size={20} style={[globalStyles.auth_button_icon]}></Icon>
        <Text style={[globalStyles.button_text, globalStyles.white_button_text, globalStyles.auth_button_text]}>Sign In with Facebook</Text>
      </TouchableOpacity>
    );
  }
}

class CLLabel extends Component {
  render() {
    return (
      <Text style={[globalStyles.label, this.props.style]}>Title</Text>
    );
  }
}

class CLWhiteLabel extends Component {
  render() {
    return (
      <Text style={[globalStyles.label, globalStyles.white_label, this.props.style]}>Title</Text>
    );
  }
}

class CLMultilineInput extends Component {
  render() {
    return (
      <View style={[globalStyles.input, globalStyles.input_multiline, this.props.style]}>
        <TextInput style={[globalStyles.input_text, globalStyles.input_text_multiline]} autoFocus={this.props.autoFocus} onChangeText={this.props.onChangeText} multiline={true}>{this.props.children}</TextInput>
      </View>
    );
  }
}

class CLInput extends Component {
  render() {
    return (
      <View style={[globalStyles.input, this.props.style]}>
        <TextInput
          style={[globalStyles.input_text]}
          placeholderTextColor="#888888"
          placeholder={this.props.placeholder}
          autoFocus={this.props.autoFocus}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

class CLWhiteInput extends Component {
  render() {
    return (
      <View style={[globalStyles.input, globalStyles.white_input, this.props.style]}>
        <TextInput
          style={[globalStyles.input_text, globalStyles.whit_input_text]}
          placeholderTextColor="rgba(255, 255, 255, 0.8)"
          placeholder={this.props.placeholder}
          autoFocus={this.props.autoFocus}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

class EventListItem extends Component {
  
  render() {
    return (
      <TouchableOpacity style={[globalStyles.row, components.EventListItem_base]} onPress={this.props.showUsers}>
        <Text style={components.EventListItem_name}>{this.props.name}</Text>
        <TouchableOpacity onPress={this.props.showSettings}>
          <Icon name="more-vert" size={20}></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  
}

class UserListItem extends Component {
  
  render() {
    var displayName = this.props.nickName || [this.props.firstName, this.props.lastName.charAt(0).toUpperCase()].join('');
    return (
      <TouchableOpacity style={[globalStyles.row, components.UserListItem_base]} onPress={this.props.showIdeas}>
        <Text style={components.UserListItem_name}>{displayName}</Text>
        <TouchableOpacity onPress={this.props.showSettings}>
          <Icon name="more-vert" size={20}></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

class IdeaListItem extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleIdeaPress = this.handleIdeaPress.bind(this);
  }
  
  handleIdeaPress() {
    this.props.showIdeaDetail(this.props.idea);
  }
  
  render() {
    return (
      <TouchableOpacity style={[globalStyles.row, components.IdeaListItem_base]} onPress={this.handleIdeaPress}>
        <View>
          <Text style={components.IdeaListItem_name}>{this.props.name}</Text>
          <Text style={components.IdeaListItem_description}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class IdeaDetailMessages extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      messages: {
        "aa": {
          "text": "Okay, he definitely doesn't need this.",
          "author": {
            "name": "Bryan"
          }
        },
        "bb": {
          "text": "No he absolutely does.",
          "author": {
            "name": "Jon"
          }
        },
        "cc": {
          "text": "Guys, we can't even afford this.",
          "author": {
            "name": "Amy"
          }
        }
      },
      conversation: ["aa", "bb", "cc"]
    };
  }
  
  render() {
    return (
      <View style={[components.IdeaDetailMessages_base]}>
        <Text style={[globalStyles.small_title, components.IdeaDetailMessages_title]}>CONVERSATION</Text>
        <Conversation messages={this.state.messages} conversation={this.state.conversation} />
      </View>
    );
  }
}

class Conversation extends Component {
  
  render() {
    var renderable_messages_in_order = this.props.conversation.map((message_id) => {
      return <ConversationMessage key={message_id} text={this.props.messages[message_id].text} author={this.props.messages[message_id].author} />;
    });
    
    return (
      <View style={[components.Conversation_base]}>{renderable_messages_in_order}</View>
    );
  }
}

class ConversationMessage extends Component {
  
  render() {
    if(this.props.author.name === "Bryan") {
      return (
        <View style={[components.ConversationMessage_container, components.ConversationMessage_self_container]}>
          <ConversationMessageAvatar name={this.props.author.name} avatar={this.props.author.avatar} />
          <View style={[components.ConversationMessage_base, components.ConversationMessage_self_base]}>
            <Text style={[components.ConversationMessage_text, components.ConversationMessage_self_text]}>{this.props.text}</Text>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={[components.ConversationMessage_container]}>
          <View style={[components.ConversationMessage_base]}>
            <Text style={[components.ConversationMessage_text]}>{this.props.text}</Text>
          </View>
          <ConversationMessageAvatar name={this.props.author.name} avatar={this.props.author.avatar} />
        </View>
      );
    }
  }
}

class ConversationMessageAvatar extends Component {
  
  render() {
    var avatar;
    if(this.props.avatar) {
      avatar = <Image style={[components.ConversationMessageAvatar_image]} source={{uri: this.props.avatar}} />;
    }
    else {
      avatar = <Icon name="person" size={30} color={colors.cyan} />;
    }
    
    return (
      <View style={[components.ConversationMessageAvatar_base, this.props.style]}>
        {avatar}
        <Text style={[components.ConversationMessageAvatar_name]}>{this.props.name}</Text>
      </View>
    );
  }
}

export {
  CLAuthButtonFacebook,
  CLAuthButtonGoogle,
  CLButton,
  CLLinkButton,
  CLLabel,
  CLInput,
  CLMultilineInput,
  CLWhiteButton,
  CLWhiteInput,
  CLWhiteLabel,
  CLWhiteLinkButton,
  UserListItem,
  Conversation,
  ConversationMessage,
  EventListItem,
  IdeaListItem,
  IdeaDetailMessages,
  Logo
};