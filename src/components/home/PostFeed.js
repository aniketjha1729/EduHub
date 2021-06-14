import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import axios from "../../api/axios";
import PostImage from "./PostImage";
import CreateCard from "./CreateCard";
const PostFeed = (props) => {
  const [allPost, setAllPost] = useState([]);
  const [toggleCommentState, setToggleCommentState] = useState(false);

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const toggleComment = () => {
    setToggleCommentState(!toggleCommentState);
  };

  const addLikes = async (postId) => {
    try {
      const { data } = await axios.put(`/user/post/like/${postId}`);
      getAllPost();
    } catch (err) {
      console.log(err);
    }
  };

  const removeLikes = async (postId) => {
    try {
      const { data } = await axios.put(`/user/post/dislike/${postId}`);
      getAllPost();
    } catch (err) {
      console.log(err);
    }
  };

  const getAllPost = async () => {
    try {
      const { data } = await axios.get("/user/post/getAllPost");
      const sortedData = data.sort(sortByDate);
      setAllPost(sortedData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(props.user._id);
    getAllPost();
  }, []);

  return (
    <div>
      <CreateCard user={props.user} getAllPost={getAllPost} />
      <br />
      {allPost.map((post, index) => (
        <div key={index} className="card home-card" style={{ width: "100%" }}>
          <div className="card-header post-card-header">
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
                        ? post.postedBy.year + "Year  "
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
            <p className="card-text">{post.content}</p>
            <PostImage postId={post._id} />
          </div>
          <div className="card-footer bg-transparent">
            <div className="post-CountLiked">
              <p>{post.likes.length} Likes</p>
              <div className="row text-center postAction">
                {post.likes.includes(props.user._id) ? (
                  <div
                    className="col-4 postLike"
                    style={{ color: "Blue" }}
                    onClick={() => {
                      removeLikes(post._id);
                    }}
                  >
                    {" "}
                    <i className="fas fa-thumbs-up"></i> &nbsp;Like
                  </div>
                ) : (
                  <div
                    className="col-4 postLike"
                    onClick={() => {
                      addLikes(post._id);
                    }}
                  >
                    <i className="fas fa-thumbs-up"></i> &nbsp;Like
                  </div>
                )}
                <div className="col-4 postComment" onClick={toggleComment}>
                  <i className="fas fa-comment-alt"></i> &nbsp; Comment
                </div>
                <div className="col-4 postSave">
                  <i className="fas fa-bookmark"></i> &nbsp;Save
                </div>
              </div>
              {toggleCommentState ? (
                <div className="row">
                  <div className="col">hello</div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
