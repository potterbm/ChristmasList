
import React, { Component, PropTypes } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons.js';

import globalStyles, {components} from './styles.js';

class CLButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.button]} onPress={this.props.onPress}><Text style={[globalStyles.button_text]}>{text.toUpperCase()}</Text></TouchableOpacity>
    );
  }
}

class CLLinkButton extends Component {
  render() {
    const text = this.props.title || this.props.text;
    return (
      <TouchableOpacity style={[globalStyles.link_button]} onPress={this.props.onPress}><Text style={[globalStyles.link_button_text]}>{text}</Text></TouchableOpacity>
    );
  }
}

class CLLabel extends Component {
  render() {
    return (
      <Text style={globalStyles.label}>Title</Text>
    );
  }
}

class CLMultilineInput extends Component {
  render() {
    return (
      <View style={[globalStyles.input, globalStyles.input_multiline]}>
        <TextInput style={[globalStyles.input_text, globalStyles.input_text_multiline]} autoFocus={this.props.autoFocus} onChangeText={this.props.onChangeText} multiline={true}>{this.props.children}</TextInput>
      </View>
    );
  }
}

class CLInput extends Component {
  render() {
    return (
      <View style={[globalStyles.input]}>
        <TextInput style={[globalStyles.input_text]} autoFocus={this.props.autoFocus} onChangeText={this.props.onChangeText}>{this.props.children}</TextInput>
      </View>
    );
  }
}

class EventListItem extends Component {
  
  render() {
    return (
      <TouchableOpacity style={[globalStyles.row, components.EventListItem_base]} onPress={this.props.showCollaborators}>
        <Text style={components.EventListItem_name}>{this.props.name}</Text>
        <TouchableOpacity onPress={this.props.showSettings}>
          <Icon name="more-vert" size={20}></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  
}

class CollaboratorListItem extends Component {
  
  render() {
    return (
      <TouchableOpacity style={[globalStyles.row, components.CollaboratorListItem_base]} onPress={() => { this.props.showGifts(this.props.collaborator) }}>
        <Text style={components.CollaboratorListItem_name}>{this.props.collaborator.name}</Text>
        <Text style={components.CollaboratorListItem_gifts}>{this.props.collaborator.gifts.length}</Text>
        <TouchableOpacity onPress={this.props.showSettings}>
          <Icon name="more-vert" size={20}></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

class GiftListItem extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleGiftPress = this.handleGiftPress.bind(this);
  }
  
  handleGiftPress() {
    this.props.showGiftDetail(this.props.gift);
  }
  
  render() {
    return (
      <TouchableOpacity style={[globalStyles.row, components.GiftListItem_base]} onPress={this.handleGiftPress}>
        <View>
          <Text style={components.GiftListItem_name}>{this.props.name}</Text>
          <Text style={components.GiftListItem_description}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class GiftDetailMessages extends Component {
  
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
      <View style={[components.GiftDetailMessages_base]}>
        <Text style={[globalStyles.small_title]}>CONVERSATION</Text>
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
      avatar = <Icon name="person" />;
    }
    
    return (
      <View style={[components.ConversationMessageAvatar_base]}>
        {avatar}
        <Text style={[components.ConversationMessageAvatar_name]}>{this.props.name}</Text>
      </View>
    );
  }
}

export {
  CLButton,
  CLLinkButton,
  CLLabel,
  CLInput,
  CLMultilineInput,
  CollaboratorListItem,
  Conversation,
  ConversationMessage,
  EventListItem,
  GiftListItem,
  GiftDetailMessages
};