import * as actionTypes from "../actions/actionTypes";

const initialState = {
  students: null
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload
      };

    default:
      return state;
  }
};

export default studentReducer;
