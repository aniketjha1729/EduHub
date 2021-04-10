const express = require("express");
const router = express.Router();
const { adminSignIn, isAdmin } = require("../../controllers/admin/adminUser");

/*<==================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.post("/signin", adminSignIn);

router.get("/testadmin", isAdmin, (req, res) => {
  res.status(200).json({ msg: "W" });
});

module.exports = router;
