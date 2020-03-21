/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";

const Details = ({  allBooks }) => {
  const { id } = useParams();
  const book = (allBooks || []).find(b => b._id === id);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Details Book of {book.authors[0]}</div>
        <div className="card-body center">
          <div className="card">
            <img className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.longDescription}</p>
              <img src={book.thumbnailUrl} />
              <p className="card-text">{book.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  allBooks: state.books
});

export default connect(mapStateToProps, null)(Details);
