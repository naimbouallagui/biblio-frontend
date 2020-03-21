import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import AuthReducer from "./authReducer";
import BooksReducer from "./booksReducer";

const rootReducer = combineReducers({
  users: UserReducer,
  authentication: AuthReducer,
  books: BooksReducer
});
export default rootReducer;
