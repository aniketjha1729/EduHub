import React, { useState } from "react";
import "./forum.css";
const ForumFeed = () => {
  const [toggleMore, setToggleMore] = useState(false);

  const toggleMoreAns = () => {
    setToggleMore(!toggleMore);
  };
  return (
    <div className="container">
      <div className="row forumBody">
        <div className="col-1 text-center">
          <div className="forum-question-voteUp">
            <i class="fas fa-arrow-circle-up fa-3x"></i>
          </div>
          <div className="forum-question-voteCount">45</div>
          <div className="forum-question-voteDowb">
            <i class="fas fa-arrow-circle-down fa-3x"></i>
          </div>
        </div>
        <div className="col-11">
          <div className="card">
            <h5 className="card-header">
              <div className="forum-QuestionContainer">
                <span>Q.</span>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam sed dolores cumque voluptatibus! Voluptas, recusandae
                  nisi autem repellendus non, facilis saepe nemo ullam omnis
                  quaerat debitis eveniet rem est in?
                </span>
              </div>
              <div className="forum-tagsContainer">
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
              </div>
            </h5>
            <div className="card-body">
              <div className="row text-center forum-questionAction">
                <div className="col-6 forum-questionAction-answer">Answer</div>
                <div className="col-6 forum-questionAction-saveAnswer">
                  Save
                </div>
              </div>
              <h5 className="card-title">Answers:</h5>
              <div className="forumAnswerContainer">
                <div className="forumFirstAns">
                  <div className="row">
                    <div className="col-1 text-center">
                      <div className="forum-answer-voteUp">
                        <i class="fas fa-arrow-circle-up fa-2x"></i>
                      </div>
                      <div className="forum-answer-voteCount">45</div>
                      <div className="forum-answer-voteDowb">
                        <i class="fas fa-arrow-circle-down fa-2x"></i>
                      </div>
                    </div>
                    <div className="col-11 forumAnswer">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa labore laudantium corrupti,
                      iste porro dolorem optio, velit provident, id omnis
                      repellendus? Ut reprehenderit molestias ab itaque
                      voluptatibus!
                    </div>
                    <div className="forum-replyButton">Reply</div>
                  </div>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
                  </p>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
                  </p>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
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
                          <i class="fas fa-arrow-circle-up fa-2x"></i>
                        </div>
                        <div className="forum-answer-voteCount">45</div>
                        <div className="forum-answer-voteDowb">
                          <i class="fas fa-arrow-circle-down fa-2x"></i>
                        </div>
                      </div>
                      <div className="col-11 forumAnswer">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sed nulla repudiandae culpa labore laudantium
                        corrupti, iste porro dolorem optio, velit provident, id
                        omnis repellendus? Ut reprehenderit molestias ab itaque
                        voluptatibus!
                      </div>
                      <div className="forum-replyButton">Reply</div>
                    </div>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row forumBody">
        <div className="col-1 text-center">
          <div className="forum-question-voteUp">
            <i class="fas fa-arrow-circle-up fa-3x"></i>
          </div>
          <div className="forum-question-voteCount">45</div>
          <div className="forum-question-voteDowb">
            <i class="fas fa-arrow-circle-down fa-3x"></i>
          </div>
        </div>
        <div className="col-11">
          <div className="card">
            <h5 className="card-header">
              <div className="forum-QuestionContainer">
                <span>Q.</span>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam sed dolores cumque voluptatibus! Voluptas, recusandae
                  nisi autem repellendus non, facilis saepe nemo ullam omnis
                  quaerat debitis eveniet rem est in?
                </span>
              </div>
              <div className="forum-tagsContainer">
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
                <span class="badge badge-secondary">New</span>
              </div>
            </h5>
            <div className="card-body">
              <div className="row text-center forum-questionAction">
                <div className="col-6 forum-questionAction-answer">Answer</div>
                <div className="col-6 forum-questionAction-saveAnswer">
                  Save
                </div>
              </div>
              <h5 className="card-title">Answers:</h5>
              <div className="forumAnswerContainer">
                <div className="forumFirstAns">
                  <div className="row">
                    <div className="col-1 text-center">
                      <div className="forum-answer-voteUp">
                        <i class="fas fa-arrow-circle-up fa-2x"></i>
                      </div>
                      <div className="forum-answer-voteCount">45</div>
                      <div className="forum-answer-voteDowb">
                        <i class="fas fa-arrow-circle-down fa-2x"></i>
                      </div>
                    </div>
                    <div className="col-11 forumAnswer">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa labore laudantium corrupti,
                      iste porro dolorem optio, velit provident, id omnis
                      repellendus? Ut reprehenderit molestias ab itaque
                      voluptatibus!
                    </div>
                    <div className="forum-replyButton">Reply</div>
                  </div>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
                  </p>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
                  </p>
                  <p className="forum-AnswerReply">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed nulla repudiandae culpa
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
                          <i class="fas fa-arrow-circle-up fa-2x"></i>
                        </div>
                        <div className="forum-answer-voteCount">45</div>
                        <div className="forum-answer-voteDowb">
                          <i class="fas fa-arrow-circle-down fa-2x"></i>
                        </div>
                      </div>
                      <div className="col-11 forumAnswer">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sed nulla repudiandae culpa labore laudantium
                        corrupti, iste porro dolorem optio, velit provident, id
                        omnis repellendus? Ut reprehenderit molestias ab itaque
                        voluptatibus!
                      </div>
                      <div className="forum-replyButton">Reply</div>
                    </div>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                    <p className="forum-AnswerReply">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sed nulla repudiandae culpa
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumFeed;
