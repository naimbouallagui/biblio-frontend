/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { listBooks } from "../../store/actions/book/actionsBook";

const Books = ({ books, getAllBooks }) => {
    useEffect(() => {
      getAllBooks({ page: 1 });
    });

  return (
    <>
      <div className="card text-center">
        <div className="card-header">List Of Books</div>
        <div className="card-body d-flex">
        {books.map(book => ( 
          <div className="card" style={{width: "18rem"}} key={book._id}>
            <img className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.status}
              </p>
              <Link to={"/book/details/" + book._id} className="btn btn-primary">
                 Book Details
              </Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
    books: state.books
});
const mapDispatchToProps = dispatch => ({
  getAllBooks: payload => dispatch(listBooks(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);
