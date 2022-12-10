import { access } from "fs";
import { SHOW_lOADING, REMOVE_LOADING } from "../actions/loadingAction";

const initialState = false;

const LoadingReducer = (state = initialState, action: any) => {
  const { type } = action;

  switch (type) {
    case SHOW_lOADING:
      return true;

    case REMOVE_LOADING:
      return false;

    default:
      return state;
  }
};
export default LoadingReducer;
