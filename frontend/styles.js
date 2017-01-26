
import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignSelf: "stretch"
  },
  header: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: 60
  },
  footer: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: 60
  },
  list: {
    flex: 1,
    alignSelf: "stretch"
  },
  list_item_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  row: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  screen_container: {
    marginHorizontal: 20,
    marginTop: 64
  },
  screen_title: {
    
  },
  small_title: {
    color: "#828282",
    fontSize: 10,
    fontWeight: "900"
  },
  paragraph: {
    color: "#000000",
    fontSize: 16
  },
  label: {
    color: "#000000",
    fontSize: 12,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 8
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    backgroundColor: "#fff"
  },
  input_text: {
    color: "#000000",
    fontSize: 16,
    paddingVertical: 8,
    minHeight: 35
  },
  input_multiline: {
    borderBottomWidth: 0,
    backgroundColor: "#eeeeee"
  },
  input_text_multiline: {
    color: "#000000",
    fontSize: 16,
    paddingVertical: 8,
    minHeight: 150
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 2,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button_text: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center"
  },
  link_button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  link_button_text: {
    color: "#4CAF50",
    fontSize: 14,
    textAlign: "center"
  }
});

const screens = StyleSheet.create({
  EventList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  EventAdd: {
    
  },
  GiftDetail: {
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  GiftDetail_meta: {
    marginHorizontal: 20,
    minHeight: 275
  }
});

const components = StyleSheet.create({
  EventListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 0,
    height: 60
  },
  EventListItem_name: {
    color: "#000000",
    fontSize: 18,
    flex: 1
  },
  EventListItem_settings: {
    flex: 0,
    marginLeft: 20
  },
  EventAdd_input: {
    
  },
  CollaboratorListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 0,
    height: 60
  },
  CollaboratorListItem_name: {
    color: "#000000",
    fontSize: 18,
    flex: 1
  },
  CollaboratorListItem_settings: {
    flex: 0,
    marginLeft: 20
  },
  GiftListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 100
  },
  GiftListItem_name: {
    color: "#000000",
    fontSize: 24
  },
  GiftListItem_description: {
    color: "#888888",
    fontSize: 14
  },
  GiftDetailMessages_base: {
    backgroundColor: "#eeeeee",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  Conversation_base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 10
  },
  ConversationMessage_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  ConversationMessage_base: {
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    paddingVertical: 11,
    paddingHorizontal: 27
  },
  ConversationMessage_text: {
    color: "#333333",
    fontSize: 14
  },
  ConversationMessage_self_container: {
    justifyContent: "flex-start"
  },
  ConversationMessage_self_base: {
    backgroundColor: "#6FCF97"
  },
  ConversationMessage_self_text: {
    color: "#F2F2F2"
  },
  ConversationMessageAvatar_base: {
    flexDirection: "column",
    alignItems: "center"
  },
  ConversationMessageAvatar_image: {
    borderRadius: 25,
    height: 50,
    width: 50
  },
  ConversationMessageAvatar_name: {
    color: "#828282",
    fontSize: 9,
    fontWeight: "700"
  }
});

export {screens, components};

export default global;