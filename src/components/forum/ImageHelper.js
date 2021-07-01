import React from "react";

const ImageHelper = ({ quesId }) => {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/forum/question/document/${quesId}`;
  return (
    <div className="forum-QuestionImage">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ImageHelper;
