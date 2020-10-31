const initialState = {
  input: "",
  error: "",
  todos: [],
  active: [],
  done: [],
  show: "all",
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS_SUCCESSED":
      return {
        ...state,
        todos: action.todos,
        active: action.active_todos,
        done: action.done_todos,
        isLoading: false,
      };
    case "GET_TODOS_FAILED":
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case "POST_TODO_SUCCESSED":
      return {
        ...state,
        todos: action.todos,
        active: action.active_todos,
        done: action.done_todos,
        isLoading: false,
        input: "",
      };
    case "POST_TODO_FAILED":
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case "UPDATE_TODO_SUCCESSED":
      return {
        ...state,
        todos: action.todos,
        active: action.active_todos,
        done: action.done_todos,
        isLoading: false,
      };
    case "UPDATE_TODO_FAILED":
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case "SWITCH_TODOS":
      return {
        ...state,
        show: action.set,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        input: action.data,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: action.loading,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
