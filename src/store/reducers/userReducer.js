import { ADD_USER } from '../actions/typesUser';
import { LOGOUT } from '../actions/typesUser';

const UserReducer = (stateUser = [], action) => {
  switch (action.type) {
    case ADD_USER:
      const data = action.payload;
        return [...stateUser, data] ;
    case LOGOUT:
      const logout = localStorage.removeItem('token')  
        return logout ;
      default:
      return stateUser;
  }
};

export default UserReducer;
