import * as actionTypes from "../actions/actionTypes";

const initialState = {
  classrooms: null,
  classroom: null,
  loading: true
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_CLASSROOMS:
      return {
        ...state,
        classrooms: action.payload,
        loading: false
      };

    case actionTypes.FETCH_CLASSROOM:
      return {
        ...state,
        classroom: action.payload,
        loading: false
      };
    case actionTypes.CLASSROOM_CREATE:
      return {
        ...state,
        classrooms: state.classrooms.concat(action.payload)
      };
    case actionTypes.CLASSROOM_UPDATE:
      let updatedIndex = state.classrooms.findIndex(
        classroom => classroom.id === action.payload.id
      );
      state.classrooms[updatedIndex] = action.payload;
      return {
        ...state,
        classrooms: [...state.classrooms]
      };
    case actionTypes.CLASSROOM_DELETE:
      let filteredClassrooms = state.classrooms.filter(
        classroom => classroom.id !== action.payload.id
      );
      console.log("FILTERED CLASSROOM IN REDUCER", filteredClassrooms);
      return {
        ...state,
        classrooms: [...filteredClassrooms]
      };
    default:
      return state;
  }
};

export default classReducer;
