
import { StyleSheet } from 'react-native';

const screens = StyleSheet.create({
  EventList: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  EventAdd_title: {
    
  },
  EventAdd_input: {
    
  }
});

export {screens, components};

export default StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
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
    alignItems: "center",
    height: 60
  },
  label: {
    color: "#000000",
    fontSize: 12,
    textAlign: "left",
    marginBottom: 8
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    color: "#000000",
    fontSize: 16,
    paddingVertical: 8
  }
});