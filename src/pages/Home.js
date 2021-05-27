import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
