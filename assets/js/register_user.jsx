import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from './api.js';


function RegisterUser(props) {
    console.log("Register Props", props);
    return <div className="form-group">
    <h4>Register New User Here</h4>
    <input id="register-email" type="email" placeholder="email"/>
    <br></br>
    <input id="register-password" type="password" placeholder="password"/>
    <br></br>
    <button className="btn btn-secondary" onClick={() => register()}>submit</button>
    </div>
  }

  function register() {
    let email = $("#register-email").val();
    let password = $("#register-password").val();
    api.create_user(email, password);
  }
  
  function state2props(state) {
    console.log("rerender", state);
    return {
    };
  }
  
  
  // Export result of curried function call.
  export default connect(state2props)(RegisterUser);