const express = require("express");
const router = express.Router();
const { adminSignIn, createAdmin} = require("../../controllers/admin/adminUser");

/*<======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.get("/createAdmin",createAdmin)
router.post("/signin", adminSignIn);

module.exports = router;
