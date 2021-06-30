import React, { useState, useEffect } from "react";
import ImageHelper from "./ImageHelper";
import axios from "../../api/axios";
import "./forum.css";

const ForumFeed = () => {
  const [toggleMore, setToggleMore] = useState(false);
  const [toggleAnswer, setToggleAnswer] = useState(false);
  const [getAllQues, setAllQues] = useState([]);

  const toggleMoreAns = () => {
    setToggleMore(!toggleMore);
  };

  const toggleAnswerSection = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const getAllQuestion = async () => {
    try {
      const { data } = await axios.get("/forum/allQuestions");
      console.log(data);
      const sortedData = data.sort(sortByDate);
      setAllQues(sortedData);
      console.log(sortedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllQuestion();
  }, []);

  return (
    <div className="container">
      {getAllQues.map((question) => (
        <div className="row forumBody">
          <div className="col-1 text-center">
            <div className="forum-question-voteUp">
              <i className="fas fa-arrow-circle-up fa-3x"></i>
            </div>
            <div className="forum-question-voteCountUp">
              + {question.upVotes.length}
            </div>
            <div className="forum-question-voteCountDown">
              - {question.downVotes.length}
            </div>
            <div className="forum-question-voteDowb">
              <i className="fas fa-arrow-circle-down fa-3x"></i>
            </div>
          </div>
          <div className="col-11">
            <div className="card">
              <div
                className="card-header"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                <div className="forum-QuestionContainer">
                  <span>Q.</span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sed dolores cumque voluptatibus! Voluptas, recusandae
                    nisi autem repellendus non, facilis saepe nemo ullam omnis
                    quaerat debitis eveniet rem est in?
                  </span>
                </div>
                {question.document ? <ImageHelper quesId={question._id} /> : ""}
                <div className="forum-tagsContainer">
                  {question.tags.map((tags) => (
                    <span className="badge badge-secondary">{tags}</span>
                  ))}
                </div>
              </div>
              <div className="card-body">
                <div className="row text-center forum-questionAction">
                  <div
                    className="col-6 forum-questionAction-answer"
                    onClick={toggleAnswerSection}
                  >
                    Answer
                  </div>
                  <div className="col-6 forum-questionAction-saveAnswer">
                    Save
                  </div>
                </div>
                {toggleAnswer ? (
                  <>
                    <h5 className="card-title">Answers:</h5>
                    <div className="forumAnswerContainer">
                      <div className="forumFirstAns">
                        <div className="row">
                          <div className="col-1 text-center">
                            <div className="forum-answer-voteUp">
                              <i className="fas fa-arrow-circle-up fa-2x"></i>
                            </div>
                            <div className="forum-answer-voteCount">45</div>
                            <div className="forum-answer-voteDowb">
                              <i className="fas fa-arrow-circle-down fa-2x"></i>
                            </div>
                          </div>
                          <div className="col-11 forumAnswer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sed nulla repudiandae culpa labore laudantium
                            corrupti, iste porro dolorem optio, velit provident,
                            id omnis repellendus? Ut reprehenderit molestias ab
                            itaque voluptatibus!
                          </div>
                          <div className="forum-replyButton">Reply</div>
                        </div>
                        <p className="forum-AnswerReply">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Sed nulla repudiandae culpa
                        </p>
                        <p className="forum-AnswerReply">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Sed nulla repudiandae culpa
                        </p>
                        <p className="forum-AnswerReply">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Sed nulla repudiandae culpa
                        </p>
                      </div>
                      <div
                        className="forumShowMoreAns text-center"
                        onClick={toggleMoreAns}
                      >
                        Show More Answers
                      </div>
                      {toggleMore ? (
                        <div className="forumNAns">
                          <div className="row">
                            <div className="col-1 text-center">
                              <div className="forum-answer-voteUp">
                                <i className="fas fa-arrow-circle-up fa-2x"></i>
                              </div>
                              <div className="forum-answer-voteCount">45</div>
                              <div className="forum-answer-voteDowb">
                                <i className="fas fa-arrow-circle-down fa-2x"></i>
                              </div>
                            </div>
                            <div className="col-11 forumAnswer">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Sed nulla repudiandae culpa
                              labore laudantium corrupti, iste porro dolorem
                              optio, velit provident, id omnis repellendus? Ut
                              reprehenderit molestias ab itaque voluptatibus!
                            </div>
                            <div className="forum-replyButton">Reply</div>
                          </div>
                          <p className="forum-AnswerReply">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sed nulla repudiandae culpa
                          </p>
                          <p className="forum-AnswerReply">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sed nulla repudiandae culpa
                          </p>
                          <p className="forum-AnswerReply">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sed nulla repudiandae culpa
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumFeed;
