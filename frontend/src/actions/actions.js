import axios from "axios";

const url = "http://localhost/api/todo";

const filteredTodo = (todos) => {
  const active = todos.filter((e) => e.is_done === 0);
  const done = todos.filter((e) => e.is_done === 1);
  return {
    active_todos: active,
    done_todos: done,
  };
};

export const getTodos = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
      loading: true,
    });
    try {
      const res = await axios.get(url);
      const { active_todos, done_todos } = filteredTodo(res.data);
      return dispatch({
        type: "GET_TODOS_SUCCESSED",
        todos: res.data,
        active_todos: active_todos,
        done_todos: done_todos,
      });
    } catch (err) {
      return dispatch({
        type: "GET_TODOS_FAILED",
        error: err,
      });
    }
  };
};

export const postTodo = () => {
  return async (state, dispatch) => {
    dispatch({
      type: "LOADING",
      loading: true,
    });
    try {
      const res = await axios.post(url, {
        body: state.input,
      });
      const { active_todos, done_todos } = filteredTodo(res.data);
      return dispatch({
        type: "POST_TODO_SUCCESSED",
        todos: res.data,
        active_todos: active_todos,
        done_todos: done_todos,
      });
    } catch (err) {
      return dispatch({
        type: "POST_TODO_FAILED",
        error: err,
      });
    }
  };
};

export const toggleTodo = () => {
  return async (dispatch, id) => {
    dispatch({
      type: "LOADING",
      loading: true,
    });
    try {
      const res = await axios.put(`${url}/${id}`);
      const { active_todos, done_todos } = filteredTodo(res.data);
      return dispatch({
        type: "UPDATE_TODO_SUCCESSED",
        todos: res.data,
        active_todos: active_todos,
        done_todos: done_todos,
      });
    } catch (err) {
      return dispatch({
        type: "UPDATE_TODO_FAILED",
        error: err,
      });
    }
  };
};

export const removeTodo = () => {
  return async (dispatch, id) => {
    dispatch({
      type: "LOADING",
      loading: true,
    });
    try {
      const res = await axios.delete(`${url}/${id}`);
      const { active_todos, done_todos } = filteredTodo(res.data);
      return dispatch({
        type: "UPDATE_TODO_SUCCESSED",
        todos: res.data,
        active_todos: active_todos,
        done_todos: done_todos,
      });
    } catch (err) {
      return err;
    }
  };
};
