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
} = require("../../controllers/forum/forum");

router.post("/question", isUserAuth, isVerified, question);

router.post("/answer/:quesId", isUserAuth, isVerified, answer);

router.get("/allQuestions", isUserAuth, isVerified, allQuestion);

router.post("/questions/tags", isUserAuth, isVerified, getQuestionByTags);

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
