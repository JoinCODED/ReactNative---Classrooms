import axios from "axios";

import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchAllClassrooms = () => {
  return async dispatch => {
    dispatch(classroomsLoading());
    try {
      const res = await instance.get("classrooms/list/");
      const classrooms = res.data;
      dispatch({
        type: actionTypes.FETCH_ALL_CLASSROOMS,
        payload: classrooms
      });
    } catch (err) {
      console.error("Error while fetching classrooms", err);
    }
  };
};

export const fetchClassroom = classroomID => {
  return async dispatch => {
    dispatch(classroomsLoading());
    try {
      const res = await instance.get(`classrooms/detail/${classroomID}/`);
      const classroom = res.data;
      dispatch({
        type: actionTypes.FETCH_CLASSROOM,
        payload: classroom
      });
    } catch (err) {
      console.error("Error while fetching classroom", err);
    }
  };
};

export const classroomsLoading = () => ({
  type: actionTypes.CLASSROOMS_LOADING
});

export const classroomCreate = classroomData => {
  return async dispatch => {
    try {
      const res = await instance.post("classrooms/create/", classroomData);
      const newClassroom = res.data;
      console.log("ACTION: CREATE CLASSROOM", classroomData);
      dispatch({
        type: actionTypes.CLASSROOM_CREATE,
        payload: newClassroom
      });
    } catch (err) {
      console.error("Error while creating a classroom", err);
    }
  };
};

export const classroomUpdate = classroomData => {
  return async dispatch => {
    try {
      const res = await instance.put(
        `classrooms/update/${classroomData.id}/`,
        classroomData
      );
      const updatedClassroom = res.data;
      console.log("ACTION: UPDATE CLASSROOM", classroomData);
      dispatch({
        type: actionTypes.CLASSROOM_UPDATE,
        payload: updatedClassroom
      });
    } catch (err) {
      console.error("Error while updating a classroom", err);
    }
  };
};

export const classroomDelete = classroom => {
  return async dispatch => {
    try {
      await instance.delete(`classrooms/delete/${classroom.id}/`);
      console.log("ACTION: DELETE CLASSROOM", classroom);
      dispatch({
        type: actionTypes.CLASSROOM_DELETE,
        payload: classroom
      });
    } catch (err) {
      console.error("Error while deleting a classroom", err);
    }
  };
};
