const express = require("express");
const router = express.Router();
const multer = require("multer");

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
  deletePost,
  deleteComment,
  verifyNotice,
  currentProfile,
  photo,
  downloadNotice,
} = require("../../controllers/user/userDashboard");

const { isUserAuth, isVerified } = require("../../controllers/auth");

/*<===================================================================================================>*/

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});

router.get("/testauth", isUserAuth, isVerified, (req, res) => {
  res.status(200).json({ msg: "User Authenticated" });
});

router.get("/currentUser", isUserAuth, currentProfile);

router.get("/user/:userId", getUserById);

router.put("/verifynotice/:noticeId", isUserAuth, isVerified, verifyNotice);

router.post(
  "/createNotice",
  isUserAuth,
  isVerified,
  upload.single("file"),
  createNotice
);

router.get("/downloadNotice/:noticeId", isUserAuth, isVerified, downloadNotice);

router.get("/notices", isUserAuth, isVerified, getAllNotices);

router.post("/post/createPost", isUserAuth, isVerified, createPost);

router.get("/post/getAllPost", isUserAuth, isVerified, getAllPost);

router.get("/post/photo/:postId", photo);

router.get("/post/mypost", isUserAuth, isVerified, getMyPost);

router.get("/post/:postId", isUserAuth, isVerified, getPostById);

router.delete("/post/delete/:postId", isUserAuth, isVerified, deletePost);

router.post("/post/comment/:postId", isUserAuth, isVerified, addComment);

router.delete(
  "/post/deleteComment/:postId/:commentId",
  isUserAuth,
  isVerified,
  deleteComment
);

router.put("/post/like/:postId", isUserAuth, isVerified, addLikes);

router.put("/post/dislike/:postId", isUserAuth, isVerified, removeLike);

module.exports = router;
