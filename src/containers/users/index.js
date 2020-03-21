import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listUsers } from "../../store/actions/actionsUser";
import { Link } from "react-router-dom";

const Users = ({ users, getAllUsers }) => {
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>List Of Users
            <Link to="/admin/user/add" style={{ float: "right" }}>
              <i className="fas fa-plus mr-1 "> </i>Add user
            </Link>
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
                    <th>#</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.fullname}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>
                        <Link
                          to={"/user/details/" + item._id}
                          className="btn btn-primary"
                        >
                          User Details
                        </Link>
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
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  getAllUsers: payload => dispatch(listUsers(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
