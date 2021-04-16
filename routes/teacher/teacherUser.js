const express = require("express");
const router = express.Router();

const {
  teacherSignIn,
  teacherSignUp,
  createNotifcation,
} = require("../../controllers/teacher/teacherUser");

const { isTeacherAuth, isTeacherVerified } = require("../../controllers/auth");

/*<=======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Teacher Routes Working",
  });
});

router.post("/signin", teacherSignIn);
router.post("/signup", teacherSignUp);

router.get("/testauth", isTeacherAuth, isTeacherVerified, (req, res) => {
  res.status(200).json({ msg: "Teacher authenticated" });
});

router.post(
  "/createnotification",
  isTeacherAuth,
  isTeacherVerified,
  createNotifcation
);

module.exports = router;
