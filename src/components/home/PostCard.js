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
              <span className="card-postedByName">hello</span>
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
            <img
              className="card-img-postedBy"
              src="https://scontent.fccu7-1.fna.fbcdn.net/v/t1.6435-9/191641208_4128600807198540_6611111697615011594_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=qIQLReE4yqgAX-eW3G5&_nc_ht=scontent.fccu7-1.fna&oh=9143473a0acf2cd73ee1f34bb0789694&oe=60DB2B7B"
              class="card-img-top"
              alt="..."
            />
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default PostCard;
