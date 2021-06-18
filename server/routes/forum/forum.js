const express = require("express");
const router = express.Router();
const { isUserAuth, isVerified } = require("../../controllers/auth");

const {
  question,
  answer,
  allQuestion,
  getAnswerByQuestion,
  getQuestionByDept,
  getQuestionByTags,
  addReply,
  upVoteQuestion,
  downVoteQuestion,
  upVoteAns,
  downVoteAns,
} = require("../../controllers/forum/forum");

router.post("/question", isUserAuth, isVerified, question);

router.post("/answer/:quesId", isUserAuth, isVerified, answer);

router.get("/allQuestions", isUserAuth, isVerified, allQuestion);

router.post("/questions/tags", isUserAuth, isVerified, getQuestionByTags);

router.post("/reply/comment/:commentId", isUserAuth, isVerified, addReply);

router.put("/question/upVote/:quesId", isUserAuth, isVerified, upVoteQuestion);

router.put(
  "/question/downVote/:quesId",
  isUserAuth,
  isVerified,
  downVoteQuestion
);

router.put("/answer/upVote/:ansId", isUserAuth, isVerified, upVoteAns);

router.put("/answer/downVote/:ansId", isUserAuth, isVerified, downVoteAns);

router.get(
  "/question/department/:deptName",
  isUserAuth,
  isVerified,
  getQuestionByDept
);

router.get(
  "/answer/question/:quesId",
  isUserAuth,
  isVerified,
  getAnswerByQuestion
);

module.exports = router;
