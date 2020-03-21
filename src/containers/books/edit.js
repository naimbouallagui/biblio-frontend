import React, { useState } from "react";
import { connect } from "react-redux";
import { editBook } from "../../store/actions/book/actionsBook";
import { useParams  } from "react-router-dom";

const EditBook = ({ edit, allBooks }) => {
  const { id } = useParams();
  const selectedBook = (allBooks || []).find(b => b._id === id);
  const [book, setBook] = useState(selectedBook);

  const fieldChangeHandler = ({ target }) => {
    setBook({
      ...book,
      [target.name]: target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    edit(book);
};

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Edit Book</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="small mb-1">Title</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="title"
                    type="text"
                    value={book.title}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">ISBN</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={book.isbn}
                  />
                </div>

                <div className="form-group">
                  <p className="small mb-1">
                    PublishedDate | {book.publishedDate}
                  </p>
                  <p className="small mb-1">Status | {book.status}</p>
                  <p className="small mb-1">
                    Authors
                    {book.authors.map(author => (
                      <span key={author}>| {author} </span>
                    ))}
                  </p>
                  <p className="small mb-1">
                    Status | 
                    {book.status}
                  </p>
                </div>
                <div className="form-group mt-4 mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={submit}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allBooks: state.books
});

const mapDispatchToProps = dispatch => {
  return {
    edit: book => {
      dispatch(editBook(book));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
