import { ADD_USER, LOGOUT, LIST_USERS, DETAILS_USER } from "./typesUser";
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

export const detailsUser = data => {
  return dispatch => {
    return api
      .patch(`http://localhost:8080/api/user/getUser/${data._id}`
      )
      .then(response => {
        dispatch({ type: DETAILS_USER, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};
