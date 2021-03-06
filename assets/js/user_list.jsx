import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default connect(({users}) => { return {users};})
((props) => {
  let rows = _.map(props.users, (uu) => <User key={uu.id} user={uu} />);
  console.log("this is user_list front end ", rows);
  
  return <div className="row">
    <div className="col-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>email</th>
            <th>admin</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  </div>;
});

function User(props) {
  let {user} = props;
  return <tr>
    <td>{user.email}</td>
    <td>{user.admin ? "Yes" : "No"}</td>
  </tr>;
}