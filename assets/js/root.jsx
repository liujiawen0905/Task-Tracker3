import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';

import api from './api.js';

import Header from './header'
import UserList from './user_list.jsx';
import TaskList from './task_list.jsx';
import RegisterUser from './register_user.jsx'
import CreateTask from './create_task.jsx'

import { Provider } from 'react-redux';


export default function root_init(node, store) {
    ReactDOM.render(
    <Provider store={store}>
      <Root  />
    </Provider>, node); 
  }


  class Root extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        tasks: []
      }
      api.fetch_users();
      api.fetch_tasks();
      console.log("tasks in root", this.state.tasks);
    }
  
    fetch_tasks() {
      $.ajax("/api/v1/tasks", {
        method: "get",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: "",
        success: (resp) => {
          let state1 = _.assign({}, this.state, { tasks: resp.data });
          this.setState(state1);
        },
      });
    }
  
    fetch_users() {
      $.ajax("/api/v1/users", {
        method: "get",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: "",
        success: (resp) => {
          let state1 = _.assign({}, this.state, { users: resp.data });
          this.setState(state1);
        },
      });
    }
  
  
    render() {
      let { users, tasks } = this.state
      return <div>
        <Router>
          <div>
            <Header root={this} />
            <Route path="/tasks" exact={true} render={() =>
                  <TaskList tasks={tasks} />
                } />
            <Route path="/users" exact={true} render={() =>
                  <UserList users={users} />
                }/>
            <Route path="/register_user" exact={true} render={() =>
                  <RegisterUser />
                }/>
            <Route path="/create_task" exact={true} render={() =>
                  <CreateTask />
                }/>    
          </div>
        </Router>
      </div>;
    }
  }
