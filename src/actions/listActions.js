import firebase from "../config/firebase";
const database = firebase.database();

// Creating a new list
export const CREATE_LIST = "CREATE_LIST";
export const LIST_CREATED = "LIST_CREATED";
export const DID_LIST_CREATION_ERR = "DID_LIST_CREATION_ERR";

// Creating a new list
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

// Fetching all list
export const REQUEST_LISTS = "REQUEST_LISTS";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const DID_LIST_FETCHING_ERR = "DID_LIST_FETCHING_ERR";

export function requestLists() {
  return {
    type: REQUEST_LISTS
  };
}

export function receiveLists(lists) {
  return {
    type: RECEIVE_LISTS,
    lists
  };
}

export function fetchLists() {
  return function(dispatch) {
    dispatch(requestLists());
    const lists = [];
    return database.ref("list").once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        lists.push(childData);
      });
      dispatch(receiveLists(lists));
    });
  };
}

// Show list details on Content when click on Sidebar list
export const GET_LIST_DETAILS = "GET_LIST_DETAILS";
export function getListDetails(index) {
  return {
    type: GET_LIST_DETAILS,
    index
  };
}

export function showListDetails(index) {
  console.log("Index here: ", index);
  return function(dispatch) {
    dispatch(getListDetails(index));
  };
}
