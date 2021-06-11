import React from "react";

const PostImage = ({ postId }) => {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/user/post/photo/${postId}`;
  return (
    <img
      className="card-img-postedBy card-img-top"
      src={imageUrl}
      
      alt="..."
    />
  );
};

export default PostImage;
