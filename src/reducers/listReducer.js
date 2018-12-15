import {
  CREATE_LIST,
  LIST_CREATED,
  DID_LIST_CREATION_ERR
} from "../actions/listActions";

const initialState = {
  isCreating: false,
  didListCreationErr: false,
  listCreationErr: null
};

export function listReducer(state = initialState, action) {
  console.log("list: ", action.list);
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
    default:
      return state;
  }
}
