import * as actionTypes from "../actions/actionTypes";

const initialState = {
  students: null,
  student: null,
  enrolledStudents: []
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case actionTypes.FETCH_STUDENT_BY_ID:
      const theStudent = state.students.find(
        student => action.payload === student.id
      );
      return {
        ...state,
        student: theStudent
      };
    case actionTypes.FETCH_ENROLLED_STUDENTS:
      return {
        ...state,
        enrolledStudents: action.payload
      };
    case actionTypes.ENROLL_STUDENT:
      return {
        ...state,
        enrolledStudents: state.enrolledStudents.concat(action.payload)
      };
    default:
      return state;
  }
};

export default studentReducer;
