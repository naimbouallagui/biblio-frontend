import { LIST_BOOKS, DELETE_BOOK } from "../actions/book/typesBook";

const BooksReducer = (stateBook = [], action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return action.payload.books;
    case DELETE_BOOK:
      const book = stateBook.filter(item => item._id !== action.payload.id);
      return book;
    default:
      return stateBook;
  }
};

export default BooksReducer;
