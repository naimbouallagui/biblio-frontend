import axios from "axios";
import { LOGIN } from "./typesAuth";

export const loginUser = data => {
  return dispatch => {
    return axios
      .post(`http://localhost:8080/api/user/login`, data)
      .then(response => {
        if (response.data) {
          dispatch({
            type: LOGIN,
            payload: { error: false, data: response.data }
          });
          localStorage.setItem("token", response.data.access_token);
        }
      })
      .catch(error => {
        dispatch({ type: LOGIN, payload: { error: true, data: error } });
      });
  };
};
