
import { StyleSheet } from 'react-native';

const colors = {
  amber: "#FFE082",
  black: "#222526",
  cyan: "#26C6DA",
  dark_cyan: "#00ACC1",
  light_gray: "#D0D6D7",
  medium_gray: "#7A8081",
  dark_gray: "#575D5E",
  transparent: "transparent",
  white: "#ffffff"
};

const layout = {
  nav_bar_height: 64,
  outside_margin: 20,
  row_height: 60,
  status_bar_height: 20
};

const global = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignSelf: "stretch",
    paddingTop: layout.status_bar_height
  },
  header: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: layout.row_height
  },
  footer: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: layout.row_height
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
    marginHorizontal: layout.outside_margin,
    marginTop: layout.nav_bar_height
  },
  screen_title: {
    color: colors.black,
    fontSize: 24,
    textAlign: "center"
  },
  small_title: {
    color: "#828282",
    fontSize: 10,
    fontWeight: "900"
  },
  paragraph: {
    color: colors.black,
    fontSize: 16
  },
  label: {
    color: colors.black,
    fontSize: 12,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 8
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    backgroundColor: colors.white
  },
  input_text: {
    color: colors.black,
    fontSize: 16,
    paddingVertical: 8,
    minHeight: 35
  },
  white_input: {
    borderBottomColor: colors.white,
    backgroundColor: colors.transparent
  },
  white_input_text: {
    color: colors.white
  },
  input_multiline: {
    borderBottomWidth: 0,
    backgroundColor: colors.light_gray
  },
  input_text_multiline: {
    color: colors.black,
    fontSize: 16,
    paddingVertical: 8,
    minHeight: 150
  },
  button: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    backgroundColor: colors.cyan,
    borderRadius: 2,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button_text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center"
  },
  auth_button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  auth_button_icon: {
    color: colors.medium_gray,
    marginHorizontal: 20
  },
  auth_button_text: {
    color: colors.medium_gray
  },
  link_button: {
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  link_button_text: {
    color: colors.cyan,
    fontSize: 14,
    textAlign: "center"
  },
  white_button: {
    backgroundColor: colors.white
  },
  white_button_text: {
    color: colors.cyan,
    fontWeight: "800"
  },
  white_link_button: {
    backgroundColor: colors.transparent
  },
  white_link_button_text: {
    color: colors.white,
    fontWeight: "500"
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
  IdeaDetail: {
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  IdeaDetail_meta: {
    marginHorizontal: layout.outside_margin,
    minHeight: 275
  },
  LoginRegisterScreen_base: {
    backgroundColor: colors.transparent,
    paddingHorizontal: layout.outside_margin,
    paddingTop: 140
  },
  LoginRegisterScreen_title: {
    color: colors.white
  },
  LoginRegisterScreen_input: {
    marginVertical: 10
  },
  LoginRegisterScreen_button_container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  LoginRegisterScreen_button: {
    alignSelf: "center",
    marginVertical: 10,
    width: 160
  },
  LoginRegisterScreen_auth_button: {
    alignSelf: "center",
    marginVertical: 5,
    width: 320
  },
  LoginRegisterScreen_link_button: {
    alignSelf: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    width: 220
  }
});

const components = StyleSheet.create({
  logo_container: {
    
  },
  logo_text: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center"
  },
  EventListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    backgroundColor: colors.white,
    paddingHorizontal: layout.outside_margin,
    paddingVertical: 0,
    height: layout.row_height
  },
  EventListItem_name: {
    color: colors.black,
    fontSize: 18,
    flex: 1
  },
  EventListItem_settings: {
    flex: 0,
    marginLeft: 20
  },
  EventAdd_input: {
    
  },
  UserListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    backgroundColor: colors.white,
    paddingHorizontal: layout.outside_margin,
    paddingVertical: 0,
    height: layout.row_height
  },
  UserListItem_name: {
    color: colors.black,
    fontSize: 18,
    flex: 1
  },
  UserListItem_settings: {
    flex: 0,
    marginLeft: 20
  },
  IdeaListItem_base: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    paddingVertical: 12,
    paddingHorizontal: layout.outside_margin,
    height: 100
  },
  IdeaListItem_name: {
    color: colors.black,
    fontSize: 24
  },
  IdeaListItem_description: {
    color: "#888888",
    fontSize: 14
  },
  IdeaDetailMessages_base: {
    borderTopWidth: 1,
    borderTopColor: colors.light_gray,
    paddingTop: 10,
    paddingHorizontal: layout.outside_margin - 10
  },
  IdeaDetailMessages_title: {
    marginHorizontal: 10
  },
  Conversation_base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginTop: 10,
    minHeight: 285
  },
  ConversationMessage_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 5
  },
  ConversationMessage_base: {
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    paddingVertical: 11,
    paddingHorizontal: 15,
    maxWidth: 250
  },
  ConversationMessage_text: {
    color: "#333333",
    fontSize: 14
  },
  ConversationMessage_self_container: {
    justifyContent: "flex-start"
  },
  ConversationMessage_self_base: {
    backgroundColor: colors.cyan
  },
  ConversationMessage_self_text: {
    color: "#F2F2F2"
  },
  ConversationMessageAvatar_base: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10
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

export {colors, screens, components};

export default global;