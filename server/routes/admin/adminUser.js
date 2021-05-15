const express = require("express");
const router = express.Router();
const { adminSignIn, createAdmin} = require("../../controllers/admin/adminUser");
const { check} = require("express-validator");

/*<======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.get("/createAdmin",createAdmin)
router.post("/signin",check("email", "Please include a valid email").isEmail(), adminSignIn);

module.exports = router;
