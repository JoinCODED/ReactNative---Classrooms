import { combineReducers } from "redux";

import authReducer from "./authReducer";
import classReducer from "./classReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  authReducer: authReducer,
  classReducer: classReducer,
  studentReducer: studentReducer
});
