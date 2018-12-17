import firebase from "../config/firebase";
const database = firebase.database();

export const CREATE_TODO = "CREATE_TODO";
export const TODO_CREATED = "TODO_CREATED";
export const DID_TODO_CREATION_ERR = "DID_TODO_CREATION_ERR";

// Creating new todo for list
export function createTodoAc() {
  return {
    type: CREATE_TODO
  };
}

export function todoCreatedAc() {
  return {
    type: TODO_CREATED
  };
}

export function todoCreationErrAc(error) {
  return {
    type: DID_TODO_CREATION_ERR,
    error
  };
}

export function createTodo(todo) {
  return function(dispatch, getState) {
    const { listReducer } = getState();
    const { listDetails } = listReducer;
    // console.log(listDetails);

    dispatch(createTodoAc());

    const todoKey = database.ref("todo/ " + listDetails.listKey).push().key;

    return database
      .ref("todos/ " + listDetails.listKey + "/" + todoKey)
      .set({ ...todo, createAt: Date.now() })
      .then(function() {
        dispatch(todoCreatedAc());
      })
      .catch(function(error) {
        dispatch(todoCreationErrAc(error));
      });
  };
}

// Fetching all todos from list
export const REQUEST_TODO = "REQUEST_TODO";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const DID_TODO_FETCHING_ERR = "DID_TODO_FETCHING_ERR";

export function requestTodo() {
  return {
    type: REQUEST_TODO
  };
}

export function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export function fetchTodos() {
  return function(dispatch, getState) {
    const { listReducer } = getState();
    const { listDetails } = listReducer;

    dispatch(requestTodo());

    return database
      .ref("todos/ " + listDetails.listKey)
      .on("child_added", function(data) {
        let todo = data.val();
        dispatch(receiveTodo(todo));
      });
  };
}
