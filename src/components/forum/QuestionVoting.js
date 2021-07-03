import React from "react";

const QuestionVoting = (props) => {
  return (
    <>
      <div className="forum-question-voteUp">
        <i
          className="fas fa-arrow-circle-up fa-3x"
          onClick={() => {
            props.upVoteQues(props.question._id);
          }}
        ></i>
      </div>
      <div className="forum-question-voteCountUp">
        + {props.question.upVotes.length}
      </div>
      <div className="forum-question-voteCountDown">
        - {props.question.downVotes.length}
      </div>
      <div className="forum-question-voteDowb">
        <i
          className="fas fa-arrow-circle-down fa-3x"
          onClick={() => {
            props.downVoteQues(props.question._id);
          }}
        ></i>
      </div>
    </>
  );
};

export default QuestionVoting;
