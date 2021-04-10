const express = require("express");
const router = express.Router();
const {
  teacherSignIn,
  teacherSignUp,
  getTeacherById,
  getTeacher,
} = require("../../controllers/teacher/teacherUser");
const {
  isTeacherSignedIn,
  isTeacherAuthenticated,
  isTeacherVerifed,
} = require("../../controllers/auth");

/*<==================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Teacher Routes Working",
  });
});

router.param("teacherId", getTeacherById);

router.post("/signin", teacherSignIn);
router.post("/signup", teacherSignUp);

router.get(
  "/testauth/:teacherId",
  isTeacherSignedIn,
  isTeacherAuthenticated,
  isTeacherVerifed,
  getTeacher
);

module.exports = router;
