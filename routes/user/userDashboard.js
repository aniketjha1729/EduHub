const express = require("express");
const router = express.Router();

const {
  getAllNotices,
  createStudentNotice,
} = require("../../controllers/user/userDashboard");

const { isUserAuth, isVerified, isStudent,isTeacher } = require("../../controllers/auth");

/*<=======================================================================================================>*/

router.get("/testauth", isUserAuth, isVerified, (req, res) => {
  res.status(200).json({ msg: "User Authenticated" });
});

router.get("/notifications", isUserAuth, isVerified, getAllNotices);

router.post(
  "/createStudentnotice",
  isUserAuth,
  isVerified,
  createStudentNotice
);

module.exports = router;
