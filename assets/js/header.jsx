import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import api from './api';
import { connect } from 'react-redux';


function Header(props) {
    let {session} = props;
    console.log(">>>>> sessions", session);
    
    
    let session_info;
    if (session == null) {
      session_info = 
      <div className="form-inline my-1">
        <input type="email" id="email" placeholder="email" />
        <input type="password" id="password" placeholder="password" />
        <button className="btn btn-secondary" onClick={() => login()}>Login</button>
        <Link className="btn btn-secondary" to={"/register_user"}> register </Link>
      </div>;
    }
    else {
      session_info = 
      <div className="my-2">
        <p>Logged in as {session.email}</p>
        <button onClick={() => api.delete_session()}className="btn btn-secondary">LogOut</button>
      </div>
    }


    return <div className="row my-2">
    <div className="col-4">
      <h1>Task Tracker SPA</h1>
    </div>
    <div className="col-3">
      <p>
        <Link to={"/tasks"}>Tasks</Link> 
        &nbsp; | &nbsp;
        <Link to={"/users"}>Users</Link>
      </p>
    </div>
    <div className="col-3">
      {session_info}
    </div>
  </div>;
}

function login() {
  let name = $("#email").val();
  let password = $("#password").val();
  api.create_session(name, password);
}

function state2props(state) {
  return { 
    session: state.session , 
    users: state.users,
  };
}

export default connect(state2props)(Header);


