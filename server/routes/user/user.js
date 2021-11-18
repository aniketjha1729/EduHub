const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signIn, signUp } = require("../../controllers/user/user");

/*<=======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "User Routes Working",
  });
});

router.post(
  "/signin",
  check("email", "Please include a valid email").isEmail(),
  signIn
);
router.post(
  "/signup",
  check("name", "Name is required").notEmpty(),
  check("role", "Role is required").notEmpty(),
  check("department", "Department is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  signUp
);

module.exports = router;
