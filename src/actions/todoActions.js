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
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const DID_TODO_FETCHING_ERR = "DID_TODO_FETCHING_ERR";

export function requestTodos() {
  return {
    type: REQUEST_TODOS
  };
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function fetchTodos() {
  return function(dispatch, getState) {
    const { listReducer } = getState();
    const { listDetails } = listReducer;

    console.log("ListDeatils: ", listDetails.listKey);

    dispatch(requestTodos());

    const todos = [];
    return database
      .ref("todos/ " + listDetails.listKey)
      .once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          console.log(childSnapshot);
          let childData = childSnapshot.val();
          console.log("childData", childData);
          todos.push(childData);
        });
        dispatch(receiveTodos(todos));
        console.log("Todos: ", todos);
      });
  };
}
