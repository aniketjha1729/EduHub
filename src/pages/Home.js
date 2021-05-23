import React from "react";
import UserLogin from "../components/user/UserLogin";
import UserSignUp from "../components/user/UserSignup";
import PostCard from "../components/user/PostCard";
const Home = () => {
  return (
    <div style={{ zIndex: "-1", position: "absolute",paddingTop: "100px" }}>
      {/* <PostCard /> */}
      <UserSignUp/>
      {/* <UserLogin/> */}
    </div>
  );
};

export default Home;
