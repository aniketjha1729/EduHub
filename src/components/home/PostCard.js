import React, { useState, useEffect } from "react";

import "./style.css";

import axios from "../../api/axios";
import PostImage from "./PostImage";
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

  return (
    <div>
      {allPost.map((post, index) => (
        <>
          <div key={index} className="card home-card" style={{ width: "100%" }}>
            <div className="card-header">
              <img
                className="card-img-postedByIcon"
                src="https://images.unsplash.com/photo-1558899622-6e22c5d1c554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
              />
              <span className="card-postedByName">{post.postedBy.name}</span>
              <span className="card-postedByName">
                {post.postedBy.department}
              </span>
              <span className="card-postedByName">
                {post.postedBy.role == "student"
                  ? post.postedBy.year
                  : "Teacher"}
              </span>
              <span className="card-action">
                <i className="fas fa-trash"></i>
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <PostImage postId={post._id}/>
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default PostCard;
