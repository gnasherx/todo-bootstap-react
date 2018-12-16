import {
  CREATE_LIST,
  LIST_CREATED,
  DID_LIST_CREATION_ERR,
  REQUEST_LISTS,
  RECEIVE_LISTS,
  DID_LIST_FETCHING_ERR
} from "../actions/listActions";

const initialState = {
  isCreating: false,
  didListCreationErr: false,
  listCreationErr: null,
  isFetching: false,
  didListFetchingErr: false,
  lists: []
};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return Object.assign({}, state, {
        isCreating: true,
        didListCreationErr: false
      });
    case LIST_CREATED:
      return Object.assign({}, state, {
        isCreating: false,
        didListCreationErr: false
      });
    case DID_LIST_CREATION_ERR:
      return Object.create({}, state, {
        didListCreationErr: true,
        listCreationErr: action.error
      });
    case REQUEST_LISTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_LISTS:
      return Object.assign({}, state, {
        isFetching: false,
        lists: action.lists,
        didListFetchingErr: false
      });
    case DID_LIST_FETCHING_ERR:
      return Object.assign({}, state, {
        didListFetchingErr: true
      });
    default:
      return state;
  }
}
