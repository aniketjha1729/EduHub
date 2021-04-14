const express = require("express");
const router = express.Router();

const {
  studentSignIn,
  studentSignUp,
} = require("../../controllers/student/studentUser");

const { isStudentAuth, isStudentVerified } = require("../../controllers/auth");

/*<===============================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Students Routes Working",
  });
});

router.post("/signin", studentSignIn);
router.post("/signup", studentSignUp);

router.get("/testauth", isStudentAuth, isStudentVerified, (req, res) => {
  res.status(200).json({ msg: "Student Authenticated" });
});

module.exports = router;