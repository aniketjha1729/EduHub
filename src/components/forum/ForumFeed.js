import React, { useState, useEffect } from "react";
import ImageHelper from "./ImageHelper";
import axios from "../../api/axios";
import "./forum.css";

const ForumFeed = () => {
  const [answerId, setAnswerId] = useState();
  const [replyId, setReplyId] = useState();
  const [getAllQues, setAllQues] = useState([]);
  const [getAnsByQues, setAnsByQues] = useState([]);
  const [ans, setAns] = useState("");
  const [reply, setReply] = useState("");

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const toggleAnswerSection = (quesId) => {
    setAnswerId(quesId);
    getAnswerByQues(quesId);
  };

  const toggleReplySection = (ansId) => {
    setReplyId(ansId);
  };

  const getAnswerByQues = async (quesId) => {
    try {
      const { data } = await axios.get(`/forum/answer/question/${quesId}`);
      console.log(data);
      const sortedData = data.sort(sortByDate);
      setAnsByQues(sortedData);
      console.log(sortedData);
    } catch (err) {
      console.log(err);
    }
  };

  const upVoteQues = async (quesId) => {
    try {
      const { data } = await axios.put(`/forum/question/upVote/${quesId}`);
      getAllQuestion();
    } catch (err) {
      console.log(err);
    }
  };

  const downVoteQues = async (quesId) => {
    try {
      const { data } = await axios.put(`/forum/question/downVote/${quesId}`);
      getAllQuestion();
    } catch (err) {
      console.log(err);
    }
  };

  const upVoteAns = async (ansId, quesId) => {
    try {
      const { data } = await axios.put(`/forum/answer/upVote/${ansId}`);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
    }
  };

  const downVoteAns = async (ansId, quesId) => {
    try {
      const { data } = await axios.put(`/forum/answer/downVote/${ansId}`);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
    }
  };

  const postAnswer = async (ans, quesId) => {
    const body = { ans };
    console.log(ans);
    try {
      const { data } = await axios.post(`/forum/answer/${quesId}`, body);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
    }
  };

  const postReply = async (reply, ansId, quesId) => {
    const body = { reply };
    console.log(reply);
    try {
      const { data } = await axios.post(`/forum/reply/comment/${ansId}`, body);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllQuestion = async () => {
    try {
      const { data } = await axios.get("/forum/allQuestions");
      const sortedData = data.sort(sortByDate);
      setAllQues(sortedData);
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
              <i
                className="fas fa-arrow-circle-up fa-3x"
                onClick={() => {
                  upVoteQues(question._id);
                }}
              ></i>
            </div>
            <div className="forum-question-voteCountUp">
              + {question.upVotes.length}
            </div>
            <div className="forum-question-voteCountDown">
              - {question.downVotes.length}
            </div>
            <div className="forum-question-voteDowb">
              <i
                className="fas fa-arrow-circle-down fa-3x"
                onClick={() => {
                  downVoteQues(question._id);
                }}
              ></i>
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
                  <span>{question.description}</span>
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
                    onClick={() => {
                      toggleAnswerSection(question._id);
                    }}
                  >
                    Answer
                  </div>
                  <div className="col-6 forum-questionAction-saveAnswer">
                    Save
                  </div>
                </div>
                {answerId == question._id ? (
                  <>
                    <h5 className="card-title">Answers:</h5>
                    <div className="ansInputWrapper">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          postAnswer(ans, question._id);
                          setAns("");
                        }}
                      >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-10">
                              <input
                                type="text"
                                className="form-control"
                                name="ans"
                                value={ans}
                                onChange={(e) => setAns(e.target.value)}
                                placeholder="Type Your answer"
                              />
                            </div>
                            <div className="col-2 text-center">
                              <button
                                type="button"
                                type="submit"
                                className="btn btn-outline-primary"
                              >
                                Answer
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {getAnsByQues.map((ans) => (
                      <div className="forumAnswerContainer">
                        <div className="forumFirstAns">
                          <div className="row">
                            <div className="col-1 text-center">
                              <div className="forum-answer-voteUp">
                                <i
                                  className="fas fa-arrow-circle-up fa-2x"
                                  onClick={() => {
                                    upVoteAns(ans._id, question._id);
                                  }}
                                ></i>
                              </div>
                              <div className="forum-answer-voteCount">
                                + {ans.upVotes.length}
                              </div>
                              <div className="forum-answer-voteCount">
                                - {ans.downVotes.length}
                              </div>
                              <div className="forum-answer-voteDowb">
                                <i
                                  className="fas fa-arrow-circle-down fa-2x"
                                  onClick={() => {
                                    downVoteAns(ans._id, question._id);
                                  }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-11 forumAnswer">
                              {ans.answer}
                            </div>
                          </div>
                          <div
                            className="forum-replyButton"
                            onClick={() => {
                              toggleReplySection(ans._id);
                            }}
                          >
                            Reply
                          </div>
                          <div className="replyInputWrapper">
                            {replyId == ans._id ? (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  postReply(reply, ans._id, question._id);
                                  setReply("");
                                }}
                              >
                                <div className="row">
                                  <div className="col-10">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        value={reply}
                                        onChange={(e) =>
                                          setReply(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="Reply To Comments"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <button
                                      type="button"
                                      type="submit"
                                      className="btn btn-outline-primary"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </form>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        {ans.replies.map((reply) => (
                          <p className="forum-AnswerReply">{reply.reply}</p>
                        ))}
                      </div>
                    ))}
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
