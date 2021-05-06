const express = require("express");
const router = express.Router();

const {
  signIn,
  signUp,
} = require("../../controllers/user/user");

/*<=======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Students Routes Working",
  });
});

router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;