
import {combineReducers} from 'redux';

function eventReducer(state, action) {
  switch(action.type) {
    
    case "ADD_EVENT":
      return state.concat({ name: action.name });
    
    case "EDIT_EVENT":
      var index = state.findIndex(function(element) {
        return element.id === parseInt(action.id);
      });
      state[index] = Object.assign({}, state[index], action.updated);
      return state;
    
    default:
      return state || [
        {
          "id": 0,
          "name": "Christmas 2015"
        },
        {
          "id": 1,
          "name": "Christmas 2016"
        },
        {
          "id": 2,
          "name": "Christmas 2017"
        }
      ];
  }
}

function userReducer(state, action) {
  switch(action.type) {
    
    case "ADD_USER":
      return state.concat({ name: action.name });
    
    default:
      return state || [
        {
          "id": 0,
          "nickName": "Dad",
          "firstName": "Bruce",
          "lastName": "",
          "ideas": 8
        },
        {
          "id": 1,
          "nickName": "Bryan",
          "firstName": "Bryan",
          "lastName": "",
          "ideas": 8
        },
        {
          "id": 2,
          "nickName": "Jon",
          "firstName": "Jon",
          "lastName": "",
          "ideas": 8
        }
      ];
  }
}

function ideasReducer(state, action) {
  switch(action.type) {
    
    case "LOADED_IDEAS":
      return action.ideas;
    
    case "ADD_IDEA":
      return state.concat({ name: action.name });
    
    default:
      return state || [
        {
          "name": "New Shoes",
          "description": "Shoes description here."
        },
        {
          "name": "Wingsuit",
          "description": "Wingsuit description goes here."
        },
        {
          "name": "Private Island",
          "description": "Island description here."
        }
      ];
  }
}

function authReducer(state, action) {
  switch(action.type) {
    
    case "LOGIN_GOOGLE":
      return Object.assign({}, state, { logged_in: true });
    
    case "LOGIN_FACEBOOK":
      return Object.assign({}, state, { logged_in: true });
    
    case "LOGIN_EMAIL":
      return Object.assign({}, state, { logged_in: true });
    
    case "LOGIN":
      return Object.assign({}, state, { logged_in: true });
    
    default:
      return state || {
        logged_in: false,
        token: ""
      };
    
  }
}

export default appReducer = combineReducers({
  events: eventReducer,
  users: userReducer,
  ideas: ideasReducer,
  auth: authReducer
});