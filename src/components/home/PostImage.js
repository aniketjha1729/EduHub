import React from "react";

const PostImage = ({ postId }) => {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/user/post/photo/${postId}`;
  return (
    <img
      className="card-img-postedBy"
      src={imageUrl}
      class="card-img-top"
      alt="..."
    />
  );
};

export default PostImage;
