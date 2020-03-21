import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/auth/actionsAuth";
import { Redirect } from "react-router-dom";

const Login = ({ login, loginResponse }) => {
  const [user, setuser] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(loginResponse ? loginResponse.error : false);
    setLoading(false);
  }, [loginResponse]);

  const fieldChangeHandler = ({ target }) => {
    setuser({
      ...user,
      [target.name]: target.value
    });
  };

  const submit = event => {
    event.preventDefault();
    setLoading(true);
    login(user);
  };

  if (loginResponse && loginResponse.error === false)
    return <Redirect to="/admin" />;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={submit}>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputUserName">
                    UserName
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="username"
                    type="username"
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
                    placeholder="Enter your password"
                  />
                </div>
                <p className="small text-danger">
                  {error && "Username or password invalid"}
                </p>
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Login
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

const mapDispatchToProps = dispatch => ({
  login: user => {
    dispatch(loginUser(user));
  }
});

const mapStateToPtops = state => ({
  loginResponse: state.authentication
});

export default connect(mapStateToPtops, mapDispatchToProps)(Login);
