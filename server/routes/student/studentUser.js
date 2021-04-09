const express = require("express");
const router = express.Router();
const {
  studentSignIn,
  studentSignUp,
  isSignedIn,
  isAuthenticated,
  testAuth,
} = require("../../controllers/student/studentUser");

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Students Routes Working",
  });
});
router.post("/signin", studentSignIn);
router.post("/signup", studentSignUp);
router.get("/testauth", isSignedIn, testAuth);

module.exports = router;
