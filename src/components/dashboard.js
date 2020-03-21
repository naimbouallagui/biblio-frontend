/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/actionsUser";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  const fieldLogoutUser = user => {
    logoutUser(user);
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <p className="navbar-brand">Name</p>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0"
          id="sidebarToggle"
          href="#gugy"
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <ul className="navbar-nav ml-auto ml-md-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  href="#gugy"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <p className="dropdown-item">logged user fullname</p>

                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item"
                    onClick={user => {
                      fieldLogoutUser(user);
                    }}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
               <Link className="nav-link" to="/admin">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Books
               </Link>

                <Link className="nav-link" to="/admin/user">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-tachometer-alt"></i>
                    </div>
                    Users
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Name
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>{children}</main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2020
                </div>
                <div>
                  <a href="#gugy">Privacy Policy</a>
                  &middot;
                  <a href="#gugy">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  logout: state.children
});
const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
