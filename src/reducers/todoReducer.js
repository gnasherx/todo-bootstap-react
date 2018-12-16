import {
  CREATE_TODO,
  TODO_CREATED,
  DID_TODO_CREATION_ERR,
  REQUEST_TODOS,
  RECEIVE_TODOS,
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
  console.log("Action: ", action);
  switch (action) {
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
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.todos,
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
