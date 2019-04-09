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
    console.log("Error while retrieving students");
  }
};
