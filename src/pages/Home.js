import React from "react";
import LeftCard from "../components/home/LeftCard";
import NoticeCard from "../components/home/NoticeCard";
import Feed from "../components/home/PostFeed";

import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-left-view">
          <LeftCard />
        </div>
        <div className="home-middle-view">
          <Feed />
        </div>
        <div className="home-right-view">
          <div className="card notice-header" style={{ width: "100%" }}>
            <div className="text-center">
              <b>Notices</b>{" "}
            </div>
          </div>
          <NoticeCard />
        </div>
      </div>
    </>
  );
};

export default Home;
