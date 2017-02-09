const actions = {
  addEvent: function(name) {
    return {
      type: "ADD_EVENT",
      name: name
    };
  },
  editEvent: function(id, newEvent) {
    return {
      type: "EDIT_EVENT",
      event_id: id,
      updated: newEvent
    };
  },
  addUser: function(name) {
    return {
      type: "ADD_USER",
      name: name
    };
  },
  addIdea: function(name) {
    return {
      type: "ADD_IDEA",
      name: name
    };
  },
  login_email: function(username, password) {
    return {
      type: "LOGIN",
      username: username,
      password: password
    };
  },
  login_google: function() {
    return {
      type: "LOGIN_GOOGLE"
    };
  },
  login_facebook: function() {
    return {
      type: "LOGIN_FACEBOOK"
    };
  },
  register: function(username, password) {
    return {
      type: "REGISTER",
      username: username,
      password: password
    };
  }
};

export default actions;