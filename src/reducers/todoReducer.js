import {
  CREATE_TODO,
  TODO_CREATED,
  DID_TODO_CREATION_ERR,
  REQUEST_TODO,
  RECEIVE_TODO,
  DID_TODO_FETCHING_ERR
} from "../actions/todoActions";

const initialState = {
  isCreating: false,
  didTodoCreationErr: false,
  todoCreationErr: null,
  isFetching: false,
  todos: [],
  didTodoFetchingErr: false
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return Object.assign({}, state, {
        isCreating: true,
        didTodoCreationErr: false
      });
    case TODO_CREATED: {
      return Object.assign({}, state, {
        isCreating: false,
        didTodoCreationErr: false
      });
    }
    case DID_TODO_CREATION_ERR: {
      return Object.assign({}, state, {
        didTodoCreationErr: true,
        todoCreationErr: action.error
      });
    }
    case REQUEST_TODO:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TODO:
      console.log("Action todos: ", action.todo);
      return Object.assign({}, state, {
        isFetching: false,
        todos: [...state.todos, action.todo],
        didTodoFetchingErr: false
      });
    case DID_TODO_FETCHING_ERR:
      return Object.assign({}, state, {
        didTodoFetchingErr: true
      });
    default:
      return state;
  }
}
