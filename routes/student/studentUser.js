const express = require("express");
const router = express.Router();
const {
  studentSignIn,
  studentSignUp,
  getStudentById,
  getStudent,
} = require("../../controllers/student/studentUser");
const {
  isStudentSignedIn,
  isStudentAuthenticated,
  isStudentVerifed,
} = require("../../controllers/auth");

/*<===============================================================================================>*/

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
  isStudentSignedIn,
  isStudentAuthenticated,
  isStudentVerifed,
  getStudent
);

module.exports = router;
