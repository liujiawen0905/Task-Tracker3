import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from './api.js';

function CreateTask(props) {
    console.log("Create Task Props", props);
    let options = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}> {uu.email} </option>);
    return <div>
    <h4>Create A New Task</h4>
    <form>
    <label> Name <input id="create-task-name" type="text" placeholder="name"/> </label>
    <br />
    <label> Desc <input id="create-task-desc" type="text" placeholder="desc" /> </label>
    <br />
    <label> Time <input id="create-task-time" type="number" placeholder="0" min= "0" step= "15" /> </label> 
    <br />
    <label> Status <input id="create-task-status" type="checkbox"/> </label>
    <br />
    <label> Belongs to (user) 
        <select id="create-task-user">
            {options}
        </select>
    </label>
    <br />
    <Link to='/tasks'><button className="btn btn-secondary" onClick={() => create_task()}>Create Task</button></Link>
  </form>
  </div>
}

function create_task() {
    let name = $("#create-task-name").val();
    let desc = $("#create-task-desc").val();
    let time = $("#create-task-time").val();
    let status = $('#create-task-status').is(":checked")
    let user_id = $('#create-task-user').val();
    console.log(">>>>>>>>>>>>>>check user_id", user_id);
    api.create_task(name, desc, time, status, user_id);
}


function state2props(state) {
    console.log("rerenderingggggggg", state);
    return {
        users: state.users,
        tasks: state.tasks
    };
  }
  // Export result of curried function call.
  export default connect(state2props)(CreateTask);