const express = require("express");
const router = express.Router();

const {
  getAllNotices,
  createNotice,
  getUserById,
} = require("../../controllers/user/userDashboard");

const {
  isUserAuth,
  isVerified,
  isStudent,
  isTeacher,
} = require("../../controllers/auth");

/*<=======================================================================================================>*/

router.get("/testauth", isUserAuth, isVerified, (req, res) => {
  res.status(200).json({ msg: "User Authenticated" });
});

router.get("/:userId", isUserAuth, isVerified, getUserById);

router.get("/notices", isUserAuth, isVerified, getAllNotices);

router.post("/createNotice", isUserAuth, isVerified, createNotice);

module.exports = router;
