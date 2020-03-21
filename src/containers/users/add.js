import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/actionsUser";

const AddUser = (props) => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: ""
  });

  const fieldChangeHandler = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };

  const submit =  e => {
    e.preventDefault();
    props.addUser(user);
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">
                Create Account
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputFullName">
                    Full Name
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="fullname"
                    type="text"
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputUserName">
                    Username
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group mt-4 mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={submit}
                  >
                    Create Account
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

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => {
      dispatch(registerUser(user));
    }
  };
}
export default connect(null, mapDispatchToProps)(AddUser);
