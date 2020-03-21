import { ADD_USER, LOGOUT, LIST_USERS } from "./typesUser";
import api from "../api";


export const registerUser = data => {
  return dispatch => {
    return api
      .post(`http://localhost:8080/api/user/addUser`, data, 
      )
      .then(response => {
        dispatch({ type: ADD_USER, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};
export const logoutUser = data => {
  return dispatch => {
    dispatch({ type: LOGOUT, payload:data});
  };
};
export const listUsers = data => {
  return dispatch => {
    return api
      .get(`http://localhost:8080/api/user/getAllUsers`, data
      )
      .then(response => {
        dispatch({ type: LIST_USERS, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};
