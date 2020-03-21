/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listBooks, deleteBooks } from "../../store/actions/book/actionsBook";
import { Link } from "react-router-dom";

const Home = ({ books, getAllBooks, deleteBook }) => {
  const fieldDeleteItem = id => {
    deleteBook(id);
  };
  useEffect(() => {
    getAllBooks({ page: 1 });
  }, []);

  // const displayPagination = () => {
  //   let pagination = [];
  //   for (let i = 0; i < books.total / 5; i++) {
  //     <button onClick={()=>getAllBooks({page:i})}>{i}</button>
  //   }
  //   return pagination;
  // };

  return (
    <>
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>List Of Books
            {/* {displayPagination()} */}
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Pages</th>
                    <th>PublishedDate</th>
                    <th>Status</th>
                    <th>Author</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {books.map(item => (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.pageCount}</td>
                      <td>{item.publishedDate}</td>
                      <td>{item.status}</td>
                      <td>{item.authors[0]}</td>
                      <td>
                        <Link  to={"/admin/book/edit/" + item._id}>Edit</Link>
                        {" | "}
                        <a  type="button" className="text-danger" onClick={() => fieldDeleteItem(item._id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books
});
const mapDispatchToProps = dispatch => ({
  getAllBooks: payload => dispatch(listBooks(payload)),
  deleteBook: id => dispatch(deleteBooks(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
