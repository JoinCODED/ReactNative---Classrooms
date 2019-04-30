import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchAllStudents = () => async dispatch => {
  try {
    const res = await instance.get("students/");
    const students = res.data;
    dispatch({
      type: actionTypes.FETCH_ALL_STUDENTS,
      payload: students
    });
  } catch (err) {
    console.log("Error while fetching students");
  }
};

export const fetchStudentByID = studentID => ({
  type: actionTypes.FETCH_STUDENT_BY_ID,
  payload: studentID
});

export const fetchEnrolledStudents = () => async dispatch => {
  try {
    const res = await instance.get("enrolled/");
    const enrolledStudents = res.data;
    console.log("ENROLLED STUDENTS IN ACTIONS", enrolledStudents);
    dispatch({
      type: actionTypes.FETCH_ENROLLED_STUDENTS,
      payload: enrolledStudents
    });
  } catch (err) {
    console.log("Error while fetching enrolled students", err);
  }
};

export const enrollStudent = studentData => async dispatch => {
  try {
    console.log("Within actions:", studentData);
    const res = await instance.post("enrolled/create/", studentData);
    const enrolledStudent = res.data;
    dispatch({
      type: actionTypes.ENROLL_STUDENT,
      payload: enrolledStudent
    });
  } catch (err) {
    console.log("Error while enrolling student to class", err);
  }
};
