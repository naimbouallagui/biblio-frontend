import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { listUsers } from '../store/actions/actionsUser';

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
                    <th>Id</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item,i) => (
                    <tr key={i}>
                      <td>{item.fullname}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          type="button"
                        >
                          Details
                        </button>
                        <button className="btn btn-primary m-2">Edit</button>
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
    )
}

const mapStateToProps = state => ({
    users: state.users
  });
  const mapDispatchToProps = dispatch => ({
    getAllUsers: payload => dispatch(listUsers(payload))
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Users);
