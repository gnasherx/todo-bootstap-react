import firebase from "../config/firebase";
const database = firebase.database();

export const CREATE_LIST = "CREATE_LIST";
export const LIST_CREATED = "LIST_CREATED";
export const DID_LIST_CREATION_ERR = "DID_LIST_CREATION_ERR";

export function createListActionCreator() {
  return {
    type: CREATE_LIST
  };
}

export function listCreatedActionCreator() {
  return {
    type: LIST_CREATED
  };
}

export function listCreationErr(error) {
  return {
    type: DID_LIST_CREATION_ERR,
    error
  };
}

export function createList(list) {
  return function(dispatch) {
    dispatch(createListActionCreator());
    return database
      .ref("list")
      .push()
      .set({ ...list })
      .then(function() {
        dispatch(listCreatedActionCreator());
      })
      .catch(function(error) {
        console.log("error: ", error);
        dispatch(listCreationErr(error));
      });
  };
}
