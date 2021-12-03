import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userReducer as nextReducer } from "./nextReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  next: nextReducer,
});
