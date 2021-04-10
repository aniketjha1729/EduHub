const express = require("express");
const router = express.Router();

const {
  studentSignIn,
  studentSignUp,
  getStudentById,
  getStudent,
} = require("../../controllers/student/studentUser");

const {
  isSignedIn,
  isAuthenticated,
  isVerifed,
} = require("../../controllers/auth");

// <=======================================================================================================>
router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Students Routes Working",
  });
});

router.param("studentId", getStudentById);

router.post("/signin", studentSignIn);
router.post("/signup", studentSignUp);

router.get(
  "/testauth/:studentId",
  isSignedIn,
  isAuthenticated,
  isVerifed,
  getStudent
);

module.exports = router;
