import {
  CREATE_LIST,
  LIST_CREATED,
  DID_LIST_CREATION_ERR,
  REQUEST_LISTS,
  RECEIVE_LISTS,
  DID_LIST_FETCHING_ERR,
  GET_LIST_DETAILS
} from "../actions/listActions";

const initialState = {
  isCreating: false,
  didListCreationErr: false,
  listCreationErr: null,
  isFetching: false,
  didListFetchingErr: false,
  lists: [],
  listDetails: {}
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
    case GET_LIST_DETAILS:
      let item;
      return Object.assign({}, state, {
        listDetails: [...state.lists].find((list, index) => {
          if (index === action.index) {
            item = Object.assign({}, list);
          }
          return item;
        })
      });
    default:
      return state;
  }
}
