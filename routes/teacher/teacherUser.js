const express = require("express");
const router = express.Router();

const {
  teacherSignIn,
  teacherSignUp,
} = require("../../controllers/teacher/teacherUser");

const { isTeacherAuth,isTeacherVerified } = require("../../controllers/auth");

/*<==================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Teacher Routes Working",
  });
});

router.post("/signin", teacherSignIn);
router.post("/signup", teacherSignUp);

router.get("/testauth", isTeacherAuth,isTeacherVerified, (req, res) => {
  res.status(200).json({ msg: "Teacher authenticated" });
});

module.exports = router;