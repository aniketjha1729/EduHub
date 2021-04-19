const express = require("express");
const router = express.Router();
const Post = require("../../models/post/postModel");

const {
  getAllNotices,
  createNotice,
  createPost,
  getAllPost,
  getUserById,
} = require("../../controllers/user/userDashboard");

const { isUserAuth, isVerified } = require("../../controllers/auth");

/*<=======================================================================================================>*/

router.get("/testauth", isUserAuth, isVerified, (req, res) => {
  res.status(200).json({ msg: "User Authenticated" });
});

router.get("/user/:userId", isUserAuth, isVerified, getUserById);

router.post("/createNotice", isUserAuth, isVerified, createNotice);

router.get("/notices", isUserAuth, isVerified, getAllNotices);

router.post("/createPost", isUserAuth, isVerified, createPost);

router.get("/getAllPost", isUserAuth, isVerified, getAllPost);

module.exports = router;
