const express = require("express");
const router = express.Router();
const {
  teacherSignIn,
  teacherSignUp,
} = require("../../controllers/teacher/teacherUser");

/*<==================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Teacher Routes Working",
  });
});
router.post("/signin", teacherSignIn);
router.post("/signup", teacherSignUp);

module.exports = router;
