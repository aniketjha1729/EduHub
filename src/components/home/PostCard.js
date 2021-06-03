import React, { useState, useEffect } from "react";
import allPost from "../PostData.json"
import "./style.css";
import { Row, Col } from "react-bootstrap";
import axios from "../../api/axios";
import PostImage from "./PostImage";
const PostCard = () => {
  // const [allPost, setAllPost] = useState([]);
  // useEffect(() => {
  //   const getAllPost = async () => {
  //     try {
  //       const { data } = await axios.get("/user/post/getAllPost");
  //       setAllPost(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getAllPost();
  // }, []);

  return (
    <div>
      {allPost.map((post, index) => (
        <>
          <div key={index} className="card home-card" style={{ width: "100%" }}>
            <div className="card-header ">
              <Row>
                <Col xs="1" sm="1" lg="1" className="Column">
                  <img
                    className="card-img-postedByIcon"
                    src="https://images.unsplash.com/photo-1558899622-6e22c5d1c554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt=""
                  />
                </Col>
                <Col xs="8" sm="8" lg="8" className="Column">
                  <Row className="row-name">
                    <div className="card-postedByName">
                      {post.postedBy.name ? post.postedBy.name : "Name"}
                    </div>
                  </Row>
                  <Row className="row-name">
                    <div className="card-postedByDesignation">
                      {post.postedBy.role == "student"
                        ? post.postedBy.year
                        : "Teacher"}
                    </div>
                    <div className="card-postedByDept">
                      {post.postedBy.department ? post.postedBy.department : "ece"}
                    </div>
                  </Row>
                </Col>

                <Col xs="2" sm="2" lg="2">
                  <span className="card-action">
                    <i className="fas fa-trash"></i>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <PostImage postId={post._id} />
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default PostCard;
