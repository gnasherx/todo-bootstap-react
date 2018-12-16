import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  listReducer,
  todoReducer
});

export default rootReducer;
