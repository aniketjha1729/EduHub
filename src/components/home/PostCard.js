import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
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
                      <b>{post.postedBy.name ? post.postedBy.name : "Name"}</b>
                    </div>
                  </Row>
                  <Row className="row-name">
                    <div className="card-postedByDesignation">
                      <i>
                        {post.postedBy.role == "student"
                          ? post.postedBy.year+"Year  "
                          : "Teacher"}
                      </i>
                    </div>
                    <div className="card-postedByDept">
                      <i>
                        {post.postedBy.department
                          ? post.postedBy.department
                          : "ece"}
                      </i>
                    </div>
                  </Row>
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
