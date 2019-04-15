import store from './store';

class TheServer {
    
  fetch_path(path, callback) {
    $.ajax(path, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: callback,
    });
  }

  fetch_tasks() {
    this.fetch_path(
      "/api/v1/tasks",
      (resp) => {
        store.dispatch({
          type: 'TASK_LIST',
          data: resp.data,
        });
      }
    );
  }

  fetch_users() {
    this.fetch_path(
      "/api/v1/users",
      (resp) => {
        store.dispatch({
          type: 'USER_LIST',
          data: resp.data,
        });
      }
    );
  }

  send_post(path, data, callback) {
    $.ajax(path, {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: callback,
    });
  }

  create_session(email, password) {
    this.send_post(
      "/api/v1/auth",
      {email, password},
      (resp) => {
        store.dispatch({
          type: 'NEW_SESSION',
          data: resp.data,
        });
      }
    );
  }

  delete_session() {
    store.dispatch({
      type: 'DELETE_SESSION',
    });
  }

  create_user(email, password) {
    console.log(email);
    console.log(password);
    this.send_post(
        "/api/v1/users", {
            user: { email, password }
        },
        (resp) => {
            store.dispatch({
                type: 'NEW_USER',
                data: resp.data,
            });
          this.create_session(email, password);
        }
    );
}

create_task(name, desc, time, status, user_id) {
  console.log("api user_id", user_id);
  this.send_post(
    "/api/v1/tasks",{
      task: {name, desc, time, status, user_id}
  },
    (resp) => {
      store.dispatch({
        type: 'NEW_TASK',
        data: resp.data,
      });
    }
  );
}

delete_task(id) {
  $.ajax('/api/v1/tasks/' + id, {
    method: "delete",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    data: "",
    success: (resp) => {
      store.dispatch({
        type: 'DELETE_TASK',
        task_id: id,
      });
    }
  });
}



}
export default new TheServer();