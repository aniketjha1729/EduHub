import React from "react";
import LeftCard from "../components/home/LeftCard";
import NoticeCard from "../components/home/NoticeCard";
import Feed from "../components/home/PostFeed";
import { connect } from "react-redux";
import "./home.css";

const Home = ({ user: { user } }) => {
  return (
    <>
      <div className="home-container">
        <div className="home-left-view">
          <LeftCard />
        </div>
        <div className="home-middle-view">
          <Feed user={user ? user : ""} />
        </div>
        <div className="home-right-view">
          <div className="card notice-header" style={{ width: "100%" }}>
            <div className="text-center">
              <b>Notices</b>{" "}
            </div>
          </div>
          <NoticeCard />
          <br />
          <div className="container eduhubFooter">
            <div className="row justify-content-center">
              <div className="col-3">About</div>
              <div className="col-3">Team</div>
            </div>
            <div className="row text-center">
              <div className="col">EduHub @ 2021</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Home);
