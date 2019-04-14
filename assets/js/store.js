import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';


// For each component of the state:
//  * Function with the same name
//  * Default is the default value of that component

function tasks(state = [], action) {
  switch (action.type)  {
    case 'TASK_LIST':
      return action.data;
    case 'NEW_TASK':
      return state.concat(action.data);
    case 'DELETE_TASK':
      return _.filter(state, (task) => task.id != action.task_id);
  }
  return state;
}

function users(state = [], action) {
  switch (action.type) {
    case 'USER_LIST':
    console.log("USER!!!!LIST!!!!!!!!!!");
      return action.data;
    case 'NEW_USER':
    console.log("!!!!!!!!!!!!!!!!!");
    console.log(state.concat(action.data));
      return state.concat(action.data);
  }
  return state;
}

function session(state = null, action) {
    switch (action.type) {
    case 'NEW_SESSION':
      return action.data;
    case 'DELETE_SESSION':
      return null
    default:
      return state;
    }
  }

let login_form0 = {email: "", password: ""};
function login_form(state = login_form0, action) {
  return state;
}

function root_reducer(state0, action) {
  console.log("reducer", state0, action);

  let reducer = combineReducers(
    {
      tasks, 
      users, 
      session,
      login_form
    }
  );
                                 
  let state1 = reducer(state0, action);

  console.log("reducer1", state1);

  return deepFreeze(state1);
}

let store = createStore(root_reducer);
export default store;