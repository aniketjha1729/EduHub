import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./forum.css";
import Question from "./Question";
import QuestionVoting from "./QuestionVoting";
import Error from "../errors/Error";

const ForumFeed = () => {
  const [answerId, setAnswerId] = useState();
  const [replyId, setReplyId] = useState();
  const [getAllQues, setAllQues] = useState([]);
  const [getAnsByQues, setAnsByQues] = useState([]);
  const [ans, setAns] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [filterTags, setFilterTags] = useState("");
  const [filterStream, setFilterStream] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterRole, setFilterRole] = useState("");

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const sortByVotes = (a, b) => {
    if (a.upVotes.length < b.upVotes.length) {
      return 1;
    }
    if (a.upVotes.length > b.upVotes.length) {
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
      const sortedDataByVotes = sortedData.sort(sortByVotes);
      setAnsByQues(sortedDataByVotes);
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
      setError(err.response.data.errors[0].msg);
    }
  };

  const downVoteQues = async (quesId) => {
    try {
      const { data } = await axios.put(`/forum/question/downVote/${quesId}`);
      getAllQuestion();
    } catch (err) {
      console.log(err);
      setError(err.response.data.errors[0].msg);
    }
  };

  const upVoteAns = async (ansId, quesId) => {
    try {
      const { data } = await axios.put(`/forum/answer/upVote/${ansId}`);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
      setError(err.response.data.errors[0].msg);
    }
  };

  const downVoteAns = async (ansId, quesId) => {
    try {
      const { data } = await axios.put(`/forum/answer/downVote/${ansId}`);
      getAnswerByQues(quesId);
    } catch (err) {
      console.log(err);
      setError(err.response.data.errors[0].msg);
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

  const filterQuesByTags = async (tags) => {
    const body = { tags };
    try {
      const { data } = await axios.post("/forum/questions/tags", body);
      const sortedData = data.sort(sortByDate);
      const sortedDataByVotes = sortedData.sort(sortByVotes);
      setAllQues(sortedDataByVotes);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllQuestion = async () => {
    try {
      const { data } = await axios.get("/forum/allQuestions");
      console.log(data);
      const sortedData = data.sort(sortByDate);
      setAllQues(sortedData);
    } catch (err) {
      console.log(err);
    }
  };

  const filterByStream = async (e) => {
    setFilterStream(e.target.value);
    try {
      const { data } = await axios.get("/forum/allQuestions");
      const filteredData = data.filter(
        (item) => item.postedBy.department == e.target.value
      );
      const sortedDataByVotes = filteredData.sort(sortByVotes);
      setAllQues(sortedDataByVotes);
      console.log(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const filterByYear = async (e) => {
    setFilterYear(e.target.value);
    try {
      const { data } = await axios.get("/forum/allQuestions");
      const filteredData = data.filter(
        (item) => item.postedBy.year == e.target.value
      );
      const sortedDataByVotes = filteredData.sort(sortByVotes);
      setAllQues(sortedDataByVotes);
      console.log(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const filterBySubject = async (e) => {
    setFilterSubject(e.target.value);
    try {
      const { data } = await axios.get("/forum/allQuestions");
      const filteredData = data.filter(
        (item) => item.subject == e.target.value
      );
      const sortedDataByVotes = filteredData.sort(sortByVotes);
      setAllQues(sortedDataByVotes);
      console.log(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const filterByRole = async (e) => {
    setFilterRole(e.target.value);
    try {
      const { data } = await axios.get("/forum/allQuestions");
      const filteredData = data.filter(
        (item) => item.postedBy.role == e.target.value
      );
      const sortedDataByVotes = filteredData.sort(sortByVotes);
      setAllQues(sortedDataByVotes);
      console.log(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllQuestion();
  }, []);

  return (
    <div className="container">
      <div>
        <Error error={error} />
        <div className="card">
          <div
            className="card-header text-center"
            onClick={getAllQuestion}
            style={{
              backgroundColor: "#6C63FF",
              color: "white",
              fontSize: "large",
              cursor: "pointer",
            }}
          >
            <b>Welcome to NSEC Forum</b>
          </div>
          <div className="card-body">
            <div className="filerContainer">
              <div className="filterGroup">
                <div className="row ForumDropRowSelect">
                  <div className="col-3">
                    <select
                      className="forum-drop"
                      name="filterByStream"
                      value={filterStream}
                      onChange={(value) => filterByStream(value)}
                    >
                      <option value="">Filter By Stream</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="MECH">MECH</option>
                      <option value="CIVIL">CIVIL</option>
                      <option value="ECE">ECE</option>
                      <option value="CSE">CSE</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select
                      className="forum-drop"
                      name="filterByYear"
                      value={filterYear}
                      onChange={(value) => filterByYear(value)}
                    >
                      <option value="">Filter By Year</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select
                      className="forum-drop"
                      id=""
                      name="filterByYear"
                      value={filterSubject}
                      onChange={(value) => filterBySubject(value)}
                    >
                      <option value="">Filter By Subject</option>
                      <option value="DBMS">DBMS</option>
                      <option value="DS-ALGO">DS-ALGO</option>
                      <option value="Maths">Maths</option>
                      <option value="Compiler Design">Compiler Design</option>
                      <option value="Digital Electornics">
                        Digital Electornics
                      </option>
                      <option value="Mechanics">Mechanics</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select
                      className="forum-drop"
                      id=""
                      name="filterByRole"
                      value={filterRole}
                      onChange={(value) => filterByRole(value)}
                    >
                      <option value="">Filter By Role</option>
                      <option value="student">Teacher</option>
                      <option value="teacher">Student</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="filterForm">
                <form
                  className="form-inline forum-search ForumFilter"
                  onSubmit={(e) => {
                    e.preventDefault();
                    filterQuesByTags(filterTags);
                    setFilterTags("");
                  }}
                >
                  <input
                    className="form-control forum-searchInput"
                    type="search"
                    placeholder="Tags go here....."
                    aria-label="Search"
                    name="filterTags"
                    value={filterTags}
                    onChange={(e) => setFilterTags(e.target.value)}
                  />
                  &nbsp;
                  <button className="btn btn-primary" type="submit">
                    Filter
                  </button>
                  <div className="ForumFilter">
                    <small
                      id="tagHelp"
                      className="form-text text-muted text-center"
                    >
                      Seperate your tags with ","
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getAllQues.map((question) => (
        <div className="row forumBody">
          <div className="col-1 text-center">
            <QuestionVoting
              question={question}
              upVoteQues={upVoteQues}
              downVoteQues={downVoteQues}
            />
          </div>
          <div className="col-11">
            <div className="card">
              <Question question={question} />
              <div className="card-body">
                <div className="row text-center forum-questionAction">
                  <div
                    className="col-6 forum-questionAction-answer"
                    onClick={() => {
                      toggleAnswerSection(question._id);
                    }}
                  >
                    <i className="fas fa-comment-alt"></i> &nbsp; Answer
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
                        className="form-inline"
                        onSubmit={(e) => {
                          e.preventDefault();
                          postAnswer(ans, question._id);
                          setAns("");
                        }}
                      >
                        <input
                          type="text"
                          className="form-control forum-commentInput"
                          name="ans"
                          value={ans}
                          onChange={(e) => setAns(e.target.value)}
                          placeholder="Type Your answer"
                        />
                        &nbsp;
                        <button
                          type="button"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Answer
                        </button>
                      </form>
                    </div>
                    {getAnsByQues.map((ans) => (
                      <div className="forumAnswerContainer">
                        <div className="forumFirstAns">
                          <div className="row">
                            <div className="col-2 text-left">
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
                            <div className="col-10 forumAnswer text-left">
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
                                className="form-inline"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  postReply(reply, ans._id, question._id);
                                  setReply("");
                                }}
                              >
                                <input
                                  type="text"
                                  value={reply}
                                  onChange={(e) => setReply(e.target.value)}
                                  className="form-control forum-replyInput"
                                  placeholder="Reply To Comments"
                                />{" "}
                                &nbsp;
                                <button
                                  type="button"
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Reply
                                </button>
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
