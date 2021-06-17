const express = require("express");
const router = express.Router();
const multer = require("multer");
const { isUserAuth, isVerified } = require("../../controllers/auth");

const {askQuestion} =require("../../controllers/forum/forum")

router.post("/askQuestion",isUserAuth, isVerified,askQuestion);

module.exports = router;
