import React from "react";
import post from "./PostData.json";
const PostCard = () => {
  return (
    <div>
      {post.map((post) => (
        <div class="card" style={{ width: "18rem",marginTop:"15px" }}>
          <div class="card-header">{post.caption}</div>
          <img src={post.postImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
