const express = require("express");
const router = express.Router();

const { createNotice } = require("../../controllers/teacher/teacherDashboard");

const { isTeacherAuth, isTeacherVerified } = require("../../controllers/auth");

/*<=======================================================================================================>*/


router.get("/testauth", isTeacherAuth, isTeacherVerified, (req, res) => {
  res.status(200).json({ msg: "Teacher authenticated" });
});

router.post(
  "/createnotification",
  isTeacherAuth,
  isTeacherVerified,
  createNotice
);

module.exports = router;
