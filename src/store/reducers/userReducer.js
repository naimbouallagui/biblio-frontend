import { ADD_USER, LIST_USERS, DETAILS_USER } from "../actions/typesUser";
import { LOGOUT } from "../actions/typesUser";

const UserReducer = (stateUser = [], action) => {
  switch (action.type) {
    case ADD_USER:
      const data = action.payload;
      return [...stateUser, data];
    case LIST_USERS:
      return action.payload;
    case DETAILS_USER:
      return action.payload.data;
    case LOGOUT:
      const logout = localStorage.removeItem("token");
      return logout;
    default:
      return stateUser;
  }
};

export default UserReducer;
