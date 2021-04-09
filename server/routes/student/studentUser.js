const express = require("express");
const router = express.Router();
const {
  studentSignIn,
  studentSignUp,
  testStudentAuth,
  getStudentById,
  getStudent
} = require("../../controllers/student/studentUser");
const { isSignedIn, isAuthenticated } = require("../../controllers/auth");

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Students Routes Working",
  });
});

router.param("studentId", getStudentById);

router.post("/signin", studentSignIn);
router.post("/signup", studentSignUp);
router.get("/testauth/:studentId", isSignedIn, isAuthenticated, getStudent);

module.exports = router;
