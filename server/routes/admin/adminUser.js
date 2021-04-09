const express = require("express");
const router = express.Router();
const { adminSignIn } = require("../../controllers/admin/adminUser");

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.post("/signin", adminSignIn);



module.exports = router;
