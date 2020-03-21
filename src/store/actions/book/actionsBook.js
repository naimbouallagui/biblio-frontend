import { LIST_BOOKS, EDIT_BOOK } from "./typesBook";
import { DELETE_BOOK } from "./typesBook";
import api from '../../api'

export const listBooks = data => {
  return dispatch => {
    return api
      .get(`http://localhost:8080/api/books/getAllBooks?page=${data.page}`, 
      )
      .then(response => {
        dispatch({ type: LIST_BOOKS, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};
export const deleteBooks = data => {
  return dispatch => {
    return api
      .delete(`http://localhost:8080/api/books/deleteBook/${data}`,
      )
      .then(response => {
        dispatch({ type: DELETE_BOOK, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};
// export const editUser = data => {
//   return dispatch => {
//     return api
//       .patch(`http://localhost:8080/api/books/updateBook/${data._id}`
//       )
//       .then(response => {
//         dispatch({ type: EDIT_BOOK, payload: response.data });
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };