/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";

const DetailsUser = ({  allUsers }) => {
  const { id } = useParams();
  const user = (allUsers || []).find(a => a._id === id);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Details User {user.username}</div>
        <div className="card-body center">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <img className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{user.fullname}</h5>
              <p className="card-text">{user.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
    allUsers: state.users
});

export default connect(mapStateToProps, null)(DetailsUser);
