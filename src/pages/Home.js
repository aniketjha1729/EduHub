import React from "react";
import UserLogin from "../components/user/UserLogin";
import UserSignUp from "../components/user/UserSignup";
const Home = () => {
  return (
    <>
    <UserLogin/>
      <UserSignUp/>
    </>
  );
};

export default Home;