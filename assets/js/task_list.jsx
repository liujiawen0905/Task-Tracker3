import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from './api.js';

function TaskList(props) {
  console.log("Task List props", props);
  
  let {tasks, session, users} = props;

  let ts = _.map(tasks, (t) => {
    return <Task key={t.id} task={t} users={users} session={session}/>
  });

  if (session) {
    return  <div>
    <table className="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Desc </th>
          <th> Status </th>
          <th> Time </th>
        </tr>
      </thead>
      <tbody>{ts}</tbody>
    </table>
    <Link className="btn btn-secondary" to={"/create_task"}> Assign Task </Link>
    </div>;
  } 
  
  
  else {
    return  <div>
    <table className="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Desc </th>
          <th> Status </th>
          <th> Time </th>
        </tr>
      </thead>
      <tbody>{ts}</tbody>
    </table>
    </div>;
  }
}

function Task(props) {
  let {task, session} = props;
  if (session) {
    if (session.user_id == task.id) {
      return <tr>
        <td> {task.name}</td>
        <td> {task.desc}</td>
        <td> {String(task.status)}</td>
        <td> {task.time}</td>
        <td> <button className="btn btn-danger" onClick={() => { api.delete_task(task.id)}}> Delete </button> </td>
      </tr>;
    }
  
    else {
      return <tr>
        <td> {task.name}</td>
        <td> {task.desc}</td>
        <td> {String(task.status)}</td>
        <td> {task.time}</td>
      </tr>;
    }
  }

  else {
    return <tr>
        <td> {task.name}</td>
        <td> {task.desc}</td>
        <td> {String(task.status)}</td>
        <td> {task.time}</td>
      </tr>;
  }
  
}

function state2props(state) {
  console.log("rerender", state);
  return {
    tasks: state.tasks,
    session: state.session,
    users: state.users
  };
}

// Export result of curried function call.
export default connect(state2props)(TaskList);