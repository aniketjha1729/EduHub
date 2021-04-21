const express = require("express");
const router = express.Router();

const {
  getAllNotices,
  createNotice,
  createPost,
  getAllPost,
  getUserById,
  getPostById,
  getMyPost,
  addComment,
  addLikes,
  removeLike,
} = require("../../controllers/user/userDashboard");

const { isUserAuth, isVerified } = require("../../controllers/auth");

/*<===================================================================================================>*/

router.get("/testauth", isUserAuth, isVerified, (req, res) => {
  res.status(200).json({ msg: "User Authenticated" });
});

router.get("/:userId", isUserAuth, isVerified, getUserById);

router.post("/createNotice", isUserAuth, isVerified, createNotice);

router.get("/notices", isUserAuth, isVerified, getAllNotices);

router.post("/post/createPost", isUserAuth, isVerified, createPost);

router.get("/post/getAllPost", isUserAuth, isVerified, getAllPost);

router.get("/post/mypost", isUserAuth, isVerified, getMyPost);

router.get("/post/:postId", isUserAuth, isVerified, getPostById);

router.post("/post/comment/:postId", isUserAuth, isVerified, addComment);

router.post("/post/like/:postId", isUserAuth, isVerified, addLikes);

router.post("/post/dislike/:postId", isUserAuth, isVerified, removeLike);

module.exports = router;
