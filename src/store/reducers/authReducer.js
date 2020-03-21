import { LOGIN } from '../actions/auth/typesAuth';

const AuthReducer = (stateLogin = null, action) => {
  switch (action.type) {
    case LOGIN:
      const data = action.payload;
        return data;
    // case LOGOUT:
    //  localStorage.removeItem('token')
    //     return null;
      default:
      return stateLogin;
  }
};

export default AuthReducer;
