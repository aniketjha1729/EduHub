import React from "react";
import ImageHelper from "./ImageHelper";
const Question = (props) => {
  return (
    <>
      <div
        className="card-header"
        style={{ fontWeight: "600", fontSize: "20px" }}
      >
        <div className="forum-QuestionContainer">
          <span>Q.</span>
          <span>{props.question.description}</span>
        </div>
        {props.question.document ? (
          <ImageHelper quesId={props.question._id} />
        ) : (
          ""
        )}
        <div className="forum-tagsContainer">
          {props.question.tags.map((tags) => (
            <span className="badge badge-secondary">{tags}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
