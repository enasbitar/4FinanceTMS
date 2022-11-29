// combine reducers
import { combineReducers } from "redux";
import TeachersReducer from "./teachersReducer";

export default combineReducers({ TeachersReducer });

export type RootReducer = ReturnType<typeof combineReducers>;
