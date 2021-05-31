import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "../../api/axios";
const PostCard = () => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    const getAllPost = async () => {
      try {
        const { data } = await axios.get("/user/post/getAllPost");
        setAllPost(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPost();
  }, []);

  return <div>{allPost ? <>hello</> : ""}</div>;
};

export default PostCard;
