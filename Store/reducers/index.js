import { combineReducers } from "redux";

import authReducer from "./authReducer";
import classReducer from "./classReducer";

export default combineReducers({
  authReducer: authReducer,
  classReducer: classReducer
});
