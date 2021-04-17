const express = require("express");
const router = express.Router();

const {
  getAllNotices,
  createNotice,
} = require("../../controllers/student/studentDashboard");

const { isStudentAuth, isStudentVerified } = require("../../controllers/auth");

/*<=======================================================================================================>*/

router.get("/testauth", isStudentAuth, isStudentVerified, (req, res) => {
  res.status(200).json({ msg: "Student Authenticated" });
});

router.get(
  "/notifications",
  isStudentAuth,
  isStudentVerified,
  getAllNotices
);
router.post(
  "/createnotification",
  isStudentAuth,
  isStudentVerified,
  createNotice
);

module.exports = router;
