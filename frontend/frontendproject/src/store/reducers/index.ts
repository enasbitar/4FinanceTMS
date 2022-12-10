// combine reducers
import { combineReducers } from "redux";
import TeachersReducer from "./teachersReducer";
import LoadingReducer from "./loadingReducer";
import MessageReducer from "./messageReducer";

export default combineReducers({
  TeachersReducer,
  LoadingReducer,
  MessageReducer,
});

export type RootReducer = ReturnType<typeof combineReducers>;
